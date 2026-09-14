'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import {
  AUTH_COOKIE,
  SESSION_MAX_AGE,
  sessionToken,
  verifyPassword,
} from '@/lib/analytics-auth'

export type LoginState = { error?: string }

export async function login(
  _prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const password = formData.get('password')

  if (typeof password !== 'string' || !verifyPassword(password)) {
    // Deliberately vague: don't reveal whether a password is even configured.
    return { error: 'Incorrect password.' }
  }

  const token = sessionToken()
  if (!token) return { error: 'Analytics password is not configured.' }

  const cookieStore = await cookies()
  cookieStore.set(AUTH_COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/analytics',
    maxAge: SESSION_MAX_AGE,
  })

  redirect('/analytics')
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete({ name: AUTH_COOKIE, path: '/analytics' })
  redirect('/analytics')
}
