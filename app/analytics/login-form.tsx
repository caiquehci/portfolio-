'use client'

import { useActionState } from 'react'
import { login, type LoginState } from './actions'

export function LoginForm() {
  const [state, formAction, pending] = useActionState<LoginState, FormData>(
    login,
    {},
  )

  return (
    <main className="mx-auto flex w-full max-w-sm flex-col gap-6 px-6 py-24">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium tracking-tight">Analytics</h1>
        <p className="text-sm text-muted-foreground">
          This page is private. Enter the password to continue.
        </p>
      </div>

      <form action={formAction} className="flex flex-col gap-3">
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          autoFocus
          required
          className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
          placeholder="Password"
        />

        <button
          type="submit"
          disabled={pending}
          className="rounded-lg bg-foreground px-4 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {pending ? 'Checking…' : 'Enter'}
        </button>

        {state.error && (
          <p role="alert" className="text-sm text-red-400">
            {state.error}
          </p>
        )}
      </form>
    </main>
  )
}
