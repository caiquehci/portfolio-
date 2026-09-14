'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

/**
 * Fires a pageview on first paint and on every client-side navigation.
 *
 * Mounted once in the root layout. The dashboard itself is excluded so that
 * checking your stats doesn't inflate them.
 */
export function AnalyticsTracker() {
  const pathname = usePathname()
  const lastTracked = useRef<string | null>(null)

  useEffect(() => {
    if (!pathname) return
    if (pathname.startsWith('/analytics')) return

    // React runs effects twice in development's Strict Mode; this also guards
    // against re-renders that don't change the path.
    if (lastTracked.current === pathname) return
    lastTracked.current = pathname

    // keepalive lets the request survive the page being unloaded.
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: pathname }),
      keepalive: true,
    }).catch(() => {
      // Analytics is best-effort and must never surface to the visitor.
    })
  }, [pathname])

  return null
}
