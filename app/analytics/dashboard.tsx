import type { AnalyticsSummary } from '@/lib/analytics'
import { logout } from './actions'

/**
 * Private analytics dashboard.
 *
 * Form choices follow the data's job: single values are stat tiles (not
 * one-bar charts), magnitude comparisons are horizontal bars in a single hue
 * (bar length already encodes magnitude, so a value-ramp would double-encode),
 * and the daily trend is one series, so it carries no legend.
 */

const SERIES = '#3987e5'
const SERIES_TRACK = 'rgba(57, 135, 229, 0.14)'

const REGION_NAMES = new Intl.DisplayNames(['en'], { type: 'region' })

function countryName(code: string): string {
  try {
    return REGION_NAMES.of(code) ?? code
  } catch {
    return code
  }
}

function compact(n: number): string {
  if (n < 1000) return String(n)
  if (n < 1_000_000) return `${(n / 1000).toFixed(n < 10_000 ? 1 : 0)}K`
  return `${(n / 1_000_000).toFixed(1)}M`
}

function StatTile({
  label,
  value,
  hint,
}: {
  label: string
  value: string
  hint?: string
}) {
  return (
    <div className="flex flex-col gap-1 rounded-xl border border-border bg-card p-5">
      <p className="text-sm text-muted-foreground">{label}</p>
      {/* Proportional figures: tabular-nums makes large numbers look loose. */}
      <p className="text-3xl font-semibold tracking-tight">{value}</p>
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
    </div>
  )
}

/** Horizontal bars in one hue, with the value direct-labelled at the tip. */
function BarList({
  title,
  empty,
  rows,
}: {
  title: string
  empty: string
  rows: { key: string; label: string; views: number }[]
}) {
  const max = Math.max(...rows.map((r) => r.views), 1)

  return (
    <section className="flex flex-col gap-4 rounded-xl border border-border bg-card p-5">
      <h2 className="text-sm font-medium">{title}</h2>

      {rows.length === 0 ? (
        <p className="text-sm text-muted-foreground">{empty}</p>
      ) : (
        <ul className="flex flex-col gap-3">
          {rows.map((row) => (
            <li key={row.key} className="flex flex-col gap-1.5">
              <div className="flex items-baseline justify-between gap-4">
                <span className="truncate text-sm" title={row.label}>
                  {row.label}
                </span>
                <span className="shrink-0 text-sm text-muted-foreground tabular-nums">
                  {row.views.toLocaleString()}
                </span>
              </div>
              <div
                className="h-1.5 w-full overflow-hidden rounded-full"
                style={{ background: SERIES_TRACK }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${Math.max((row.views / max) * 100, 2)}%`,
                    background: SERIES,
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

/**
 * Single-series daily trend. One series means no legend: the heading names
 * what is plotted. Only the peak is direct-labelled - a number on every point
 * would go unread.
 */
function TrendChart({ daily }: { daily: AnalyticsSummary['daily'] }) {
  const max = Math.max(...daily.map((d) => d.views), 1)
  const peakIndex = daily.findIndex((d) => d.views === max)
  const hasData = daily.some((d) => d.views > 0)

  return (
    <section className="flex flex-col gap-4 rounded-xl border border-border bg-card p-5">
      <div className="flex items-baseline justify-between">
        <h2 className="text-sm font-medium">Pageviews, last 30 days</h2>
        {hasData && (
          <span className="text-xs text-muted-foreground">
            peak {max.toLocaleString()}
          </span>
        )}
      </div>

      {!hasData ? (
        <p className="text-sm text-muted-foreground">
          No visits recorded yet in this period.
        </p>
      ) : (
        <>
          {/* Columns: 4px rounded cap, 2px gap between neighbours via flex. */}
          <div className="flex h-32 items-end gap-[2px]">
            {daily.map((day, i) => (
              <div
                key={day.date}
                className="group relative flex-1"
                style={{ height: '100%' }}
              >
                <div
                  className="absolute bottom-0 w-full rounded-t"
                  style={{
                    height: `${Math.max((day.views / max) * 100, day.views > 0 ? 3 : 0)}%`,
                    background: i === peakIndex ? SERIES : SERIES_TRACK,
                    borderTop: i === peakIndex ? 'none' : `2px solid ${SERIES}`,
                  }}
                />
                {/* Hover layer: tooltips enhance, the table below carries every value. */}
                <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 hidden -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-background px-2 py-1 text-xs group-hover:block">
                  <span className="text-muted-foreground">{day.date}</span>
                  {' · '}
                  {day.views.toLocaleString()} views
                  {' · '}
                  {day.uniques.toLocaleString()} unique
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between text-xs text-muted-foreground tabular-nums">
            <span>{daily[0]?.date}</span>
            <span>{daily[daily.length - 1]?.date}</span>
          </div>
        </>
      )}
    </section>
  )
}

export function Dashboard({
  data,
  isMemoryStore,
}: {
  data: AnalyticsSummary
  isMemoryStore: boolean
}) {
  const activeDays = data.daily.filter((d) => d.views > 0).length

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-16">
      {isMemoryStore && (
        <div className="rounded-xl border border-border bg-card px-5 py-4">
          <p className="text-sm font-medium">Local preview mode</p>
          <p className="mt-1 text-sm text-muted-foreground">
            No database is connected, so these numbers live in memory and reset
            when the dev server restarts. Connect Upstash Redis to keep real
            data — see ANALYTICS.md.
          </p>
        </div>
      )}

      <header className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-medium tracking-tight">Analytics</h1>
          <p className="text-sm text-muted-foreground">
            Private dashboard. Visitors are counted anonymously, without cookies.
          </p>
        </div>

        <form action={logout}>
          <button
            type="submit"
            className="shrink-0 rounded-lg border border-border px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
          >
            Sign out
          </button>
        </form>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatTile
          label="Total pageviews"
          value={compact(data.totalViews)}
          hint="all time"
        />
        <StatTile
          label="Unique visitors"
          value={compact(data.uniqueVisitors)}
          hint="all time, approximate"
        />
        <StatTile
          label="Active days"
          value={String(activeDays)}
          hint="with visits, last 30 days"
        />
      </div>

      <TrendChart daily={data.daily} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <BarList
          title="Pages"
          empty="No pageviews recorded yet."
          rows={data.pages.map((p) => ({
            key: p.path,
            label: p.path,
            views: p.views,
          }))}
        />

        <BarList
          title="Countries"
          empty="No country data yet. This is only populated once deployed to Vercel."
          rows={data.countries.map((c) => ({
            key: c.code,
            label: `${countryName(c.code)} (${c.code})`,
            views: c.views,
          }))}
        />
      </div>

      {data.regions.length > 0 && (
        <BarList
          title="Regions"
          empty="No region data yet."
          rows={data.regions.slice(0, 15).map((r) => ({
            key: r.code,
            label: r.code,
            views: r.views,
          }))}
        />
      )}

      {/* Table view: every charted value is reachable without relying on marks. */}
      <details className="rounded-xl border border-border bg-card p-5">
        <summary className="cursor-pointer text-sm font-medium">
          Daily breakdown (table)
        </summary>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-muted-foreground">
                <th className="py-2 pr-4 font-normal">Date</th>
                <th className="py-2 pr-4 font-normal">Pageviews</th>
                <th className="py-2 font-normal">Unique visitors</th>
              </tr>
            </thead>
            <tbody>
              {data.daily
                .slice()
                .reverse()
                .map((day) => (
                  <tr key={day.date} className="border-t border-border">
                    <td className="py-2 pr-4 tabular-nums">{day.date}</td>
                    <td className="py-2 pr-4 tabular-nums">
                      {day.views.toLocaleString()}
                    </td>
                    <td className="py-2 tabular-nums">
                      {day.uniques.toLocaleString()}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </details>
    </main>
  )
}
