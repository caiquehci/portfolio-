import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { getSummary, isUsingMemoryStore } from '@/lib/analytics'
import { AUTH_COOKIE, isAuthConfigured, verifySession } from '@/lib/analytics-auth'
import { Dashboard } from './dashboard'
import { LoginForm } from './login-form'

// Counters change on every visit, so this page must never be cached.
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Analytics',
  // Keep the dashboard out of search results even though it is password-gated.
  robots: { index: false, follow: false, nocache: true },
}

function SetupNotice({ missing }: { missing: string[] }) {
  return (
    <main className="mx-auto flex w-full max-w-lg flex-col gap-4 px-6 py-24">
      <h1 className="text-2xl font-medium tracking-tight">Analytics setup</h1>
      <p className="text-sm text-muted-foreground">
        The dashboard needs these environment variables before it can run:
      </p>
      <ul className="flex flex-col gap-2">
        {missing.map((name) => (
          <li
            key={name}
            className="rounded-lg border border-border bg-card px-4 py-3 font-mono text-sm"
          >
            {name}
          </li>
        ))}
      </ul>
      <p className="text-sm text-muted-foreground">
        See <span className="font-mono">ANALYTICS.md</span> for the setup steps.
      </p>
    </main>
  )
}

export default async function AnalyticsPage() {
  // Only the password is strictly required: without Redis the dashboard falls
  // back to an in-memory store so it can still be reviewed locally.
  if (!isAuthConfigured()) {
    return <SetupNotice missing={['ANALYTICS_PASSWORD']} />
  }

  const cookieStore = await cookies()
  if (!verifySession(cookieStore.get(AUTH_COOKIE)?.value)) {
    return <LoginForm />
  }

  const data = await getSummary(30)
  return <Dashboard data={data} isMemoryStore={isUsingMemoryStore()} />
}
