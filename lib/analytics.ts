import { Redis } from '@upstash/redis'
import { createHash } from 'crypto'
import {
  memGet,
  memHGetAll,
  memHIncrBy,
  memIncr,
  memPathKeys,
  memSAdd,
  memSCount,
} from './analytics-memory'

/**
 * Analytics storage layer.
 *
 * Keys in Redis:
 *   pv:total                     -> all-time pageview counter
 *   pv:path:<path>               -> pageviews per page
 *   pv:day:<YYYY-MM-DD>          -> pageviews per day
 *   geo:country                  -> hash of country code -> count
 *   geo:region                   -> hash of "COUNTRY/REGION" -> count
 *   uniq:all                     -> HyperLogLog of all visitor hashes
 *   uniq:day:<YYYY-MM-DD>        -> HyperLogLog of daily visitor hashes
 *
 * Visitors are identified by a salted daily hash of IP + user-agent. No cookie
 * is set and the raw IP is never stored, so there is nothing to consent to
 * under GDPR/LGPD. The salt rotates daily, which also prevents linking a
 * visitor across days.
 */

const DAILY_KEYS_TTL_SECONDS = 60 * 60 * 24 * 90 // keep 90 days of daily series

let client: Redis | null = null

/** Returns the Redis client, or null when the store isn't configured yet. */
function getRedis(): Redis | null {
  if (client) return client

  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL
  const token =
    process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN

  if (!url || !token) return null

  client = new Redis({ url, token })
  return client
}

export function isAnalyticsConfigured(): boolean {
  return getRedis() !== null
}

/**
 * True when running without Redis, on the in-memory fallback. The dashboard
 * surfaces this so nobody mistakes throwaway local data for real traffic.
 */
export function isUsingMemoryStore(): boolean {
  return getRedis() === null
}

/** Current date as YYYY-MM-DD in UTC, so buckets are stable across regions. */
export function today(): string {
  return new Date().toISOString().slice(0, 10)
}

/**
 * Builds an anonymous, non-reversible visitor id. The date is part of the
 * digest so the same person on a different day is a different id.
 */
function visitorHash(ip: string, userAgent: string, date: string): string {
  const salt = process.env.ANALYTICS_SALT ?? 'portfolio-default-salt'
  return createHash('sha256')
    .update(`${ip}|${userAgent}|${date}|${salt}`)
    .digest('hex')
    .slice(0, 32)
}

export type TrackInput = {
  path: string
  ip: string
  userAgent: string
  country?: string
  region?: string
}

/**
 * Records a single pageview. Never throws: analytics must not be able to break
 * page delivery, so failures are swallowed after logging.
 */
export async function trackPageview(input: TrackInput): Promise<void> {
  const redis = getRedis()
  const date = today()
  const visitor = visitorHash(input.ip, input.userAgent, date)

  if (!redis) {
    memIncr('pv:total')
    memIncr(`pv:path:${input.path}`)
    memIncr(`pv:day:${date}`)
    memSAdd('uniq:all', visitor)
    memSAdd(`uniq:day:${date}`, visitor)
    if (input.country) {
      memHIncrBy('geo:country', input.country)
      if (input.region) {
        memHIncrBy('geo:region', `${input.country}/${input.region}`)
      }
    }
    return
  }

  try {
    const pipeline = redis.pipeline()

    pipeline.incr('pv:total')
    pipeline.incr(`pv:path:${input.path}`)
    pipeline.incr(`pv:day:${date}`)
    pipeline.expire(`pv:day:${date}`, DAILY_KEYS_TTL_SECONDS)

    pipeline.pfadd('uniq:all', visitor)
    pipeline.pfadd(`uniq:day:${date}`, visitor)
    pipeline.expire(`uniq:day:${date}`, DAILY_KEYS_TTL_SECONDS)

    if (input.country) {
      pipeline.hincrby('geo:country', input.country, 1)
      if (input.region) {
        pipeline.hincrby('geo:region', `${input.country}/${input.region}`, 1)
      }
    }

    await pipeline.exec()
  } catch (error) {
    console.error('[analytics] failed to record pageview', error)
  }
}

export type AnalyticsSummary = {
  totalViews: number
  uniqueVisitors: number
  pages: { path: string; views: number }[]
  countries: { code: string; views: number }[]
  regions: { code: string; views: number }[]
  daily: { date: string; views: number; uniques: number }[]
}

const EMPTY_SUMMARY: AnalyticsSummary = {
  totalViews: 0,
  uniqueVisitors: 0,
  pages: [],
  countries: [],
  regions: [],
  daily: [],
}

/** Returns the last `days` dates (UTC), oldest first. */
function recentDates(days: number): string[] {
  const dates: string[] = []
  const now = Date.now()
  for (let i = days - 1; i >= 0; i--) {
    dates.push(new Date(now - i * 86_400_000).toISOString().slice(0, 10))
  }
  return dates
}

/** Reads the full dashboard dataset. Returns empty data when unconfigured. */
export async function getSummary(days = 30): Promise<AnalyticsSummary> {
  const redis = getRedis()
  const dates = recentDates(days)

  if (!redis) {
    const pages = memPathKeys()
      .map((key) => ({
        path: key.replace('pv:path:', ''),
        views: memGet(key),
      }))
      .sort((a, b) => b.views - a.views)

    const toSortedEntries = (hash: Record<string, number>) =>
      Object.entries(hash)
        .map(([code, views]) => ({ code, views }))
        .sort((a, b) => b.views - a.views)

    return {
      totalViews: memGet('pv:total'),
      uniqueVisitors: memSCount('uniq:all'),
      pages,
      countries: toSortedEntries(memHGetAll('geo:country')),
      regions: toSortedEntries(memHGetAll('geo:region')),
      daily: dates.map((date) => ({
        date,
        views: memGet(`pv:day:${date}`),
        uniques: memSCount(`uniq:day:${date}`),
      })),
    }
  }

  try {

    // `keys` is acceptable here: this runs only on the private dashboard, and
    // the keyspace is one entry per portfolio page.
    const pathKeys = await redis.keys('pv:path:*')

    const [totalViews, uniqueVisitors, pathViews, countryHash, regionHash] =
      await Promise.all([
        redis.get<number>('pv:total'),
        redis.pfcount('uniq:all'),
        pathKeys.length
          ? redis.mget<(number | null)[]>(...pathKeys)
          : Promise.resolve([]),
        redis.hgetall<Record<string, number>>('geo:country'),
        redis.hgetall<Record<string, number>>('geo:region'),
      ])

    const [dailyViews, dailyUniques] = await Promise.all([
      dates.length
        ? redis.mget<(number | null)[]>(...dates.map((d) => `pv:day:${d}`))
        : Promise.resolve([]),
      Promise.all(dates.map((d) => redis.pfcount(`uniq:day:${d}`))),
    ])

    const pages = pathKeys
      .map((key, i) => ({
        path: key.replace('pv:path:', ''),
        views: Number(pathViews[i] ?? 0),
      }))
      .sort((a, b) => b.views - a.views)

    const toSortedEntries = (hash: Record<string, number> | null) =>
      Object.entries(hash ?? {})
        .map(([code, views]) => ({ code, views: Number(views) }))
        .sort((a, b) => b.views - a.views)

    return {
      totalViews: Number(totalViews ?? 0),
      uniqueVisitors: Number(uniqueVisitors ?? 0),
      pages,
      countries: toSortedEntries(countryHash),
      regions: toSortedEntries(regionHash),
      daily: dates.map((date, i) => ({
        date,
        views: Number(dailyViews[i] ?? 0),
        uniques: Number(dailyUniques[i] ?? 0),
      })),
    }
  } catch (error) {
    console.error('[analytics] failed to read summary', error)
    return EMPTY_SUMMARY
  }
}
