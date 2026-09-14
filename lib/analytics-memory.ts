/**
 * In-memory fallback store, used only when Redis credentials are absent.
 *
 * It exists so the dashboard can be developed and reviewed without
 * provisioning a database. Data lives in the process and is lost on restart,
 * so this is never a production path — `lib/analytics.ts` picks Redis whenever
 * credentials exist.
 *
 * Unique visitors are counted with an exact Set here rather than a
 * HyperLogLog. At local-testing volumes that is both simpler and more
 * accurate; Redis keeps the HLL because it must stay bounded in size.
 */

type Store = {
  counters: Map<string, number>
  hashes: Map<string, Map<string, number>>
  sets: Map<string, Set<string>>
}

// Survives hot-reloads in development, which would otherwise reset on edit.
const globalStore = globalThis as unknown as { __analyticsMemory?: Store }

function store(): Store {
  if (!globalStore.__analyticsMemory) {
    globalStore.__analyticsMemory = {
      counters: new Map(),
      hashes: new Map(),
      sets: new Map(),
    }
  }
  return globalStore.__analyticsMemory
}

export function memIncr(key: string): void {
  const s = store()
  s.counters.set(key, (s.counters.get(key) ?? 0) + 1)
}

export function memGet(key: string): number {
  return store().counters.get(key) ?? 0
}

export function memHIncrBy(key: string, field: string): void {
  const s = store()
  const hash = s.hashes.get(key) ?? new Map<string, number>()
  hash.set(field, (hash.get(field) ?? 0) + 1)
  s.hashes.set(key, hash)
}

export function memHGetAll(key: string): Record<string, number> {
  return Object.fromEntries(store().hashes.get(key) ?? new Map())
}

export function memSAdd(key: string, member: string): void {
  const s = store()
  const set = s.sets.get(key) ?? new Set<string>()
  set.add(member)
  s.sets.set(key, set)
}

export function memSCount(key: string): number {
  return store().sets.get(key)?.size ?? 0
}

/** Returns every counter key matching the `pv:path:` prefix. */
export function memPathKeys(): string[] {
  return [...store().counters.keys()].filter((k) => k.startsWith('pv:path:'))
}
