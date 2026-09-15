/**
 * Language configuration.
 *
 * The site ships one URL per page and swaps the dictionary client-side, so the
 * visitor's choice lives in localStorage rather than in the path. Adding a
 * third language means adding a dictionary and one entry here.
 */

export const LOCALES = ['en', 'pt'] as const

export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'en'

/** Key used for the saved preference, in localStorage and on <html lang>. */
export const LOCALE_STORAGE_KEY = 'portfolio-locale'

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  pt: 'PT',
}

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && LOCALES.includes(value as Locale)
}
