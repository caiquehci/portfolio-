import { trackPageview } from '@/lib/analytics'

// Every request must be recorded, so this handler can never be prerendered.
export const dynamic = 'force-dynamic'

const MAX_PATH_LENGTH = 128

/**
 * Normalizes a client-supplied path before it becomes a Redis key. The body is
 * untrusted, so anything unexpected collapses to a safe bucket rather than
 * letting a caller create arbitrary keys.
 */
function normalizePath(raw: unknown): string | null {
  if (typeof raw !== 'string' || !raw.startsWith('/')) return null

  // Drop query strings and hashes: /work/all?x=1 and /work/all are one page.
  const path = raw.split(/[?#]/)[0]

  if (path.length > MAX_PATH_LENGTH) return null
  if (!/^\/[A-Za-z0-9\-._/]*$/.test(path)) return null

  // Collapse a trailing slash so "/about/" and "/about" share a counter.
  return path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return Response.json({ ok: false }, { status: 400 })
  }

  const path = normalizePath((body as { path?: unknown })?.path)
  if (!path) {
    return Response.json({ ok: false }, { status: 400 })
  }

  const headers = request.headers

  // x-forwarded-for can carry a list; the first entry is the client.
  const ip =
    headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    headers.get('x-real-ip') ||
    'unknown'

  await trackPageview({
    path,
    ip,
    userAgent: headers.get('user-agent') ?? 'unknown',
    // Set by Vercel's edge network; absent in local development.
    country: headers.get('x-vercel-ip-country') ?? undefined,
    region: headers.get('x-vercel-ip-country-region') ?? undefined,
  })

  // 204: the client has nothing to do with the response.
  return new Response(null, { status: 204 })
}
