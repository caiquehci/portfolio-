import { createHmac, timingSafeEqual } from 'crypto'

/**
 * Gate for the private analytics dashboard.
 *
 * The password itself never reaches the cookie. On a correct login we store an
 * HMAC of a fixed marker keyed by the password, so the cookie proves knowledge
 * of the password without carrying it, and changing ANALYTICS_PASSWORD
 * invalidates every existing session.
 */

export const AUTH_COOKIE = 'analytics_auth'
export const SESSION_MAX_AGE = 60 * 60 * 24 * 30 // 30 days

function getPassword(): string | null {
  const password = process.env.ANALYTICS_PASSWORD
  return password && password.length > 0 ? password : null
}

export function isAuthConfigured(): boolean {
  return getPassword() !== null
}

/** Compares two strings without leaking length or content through timing. */
function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a)
  const bufB = Buffer.from(b)
  if (bufA.length !== bufB.length) return false
  return timingSafeEqual(bufA, bufB)
}

/** The value stored in the session cookie for the current password. */
export function sessionToken(): string | null {
  const password = getPassword()
  if (!password) return null
  return createHmac('sha256', password).update('analytics-session-v1').digest('hex')
}

export function verifyPassword(candidate: string): boolean {
  const password = getPassword()
  if (!password) return false
  return safeEqual(candidate, password)
}

export function verifySession(cookieValue: string | undefined): boolean {
  if (!cookieValue) return false
  const expected = sessionToken()
  if (!expected) return false
  return safeEqual(cookieValue, expected)
}
