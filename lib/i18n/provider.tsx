'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import en from '@/messages/en.json'
import pt from '@/messages/pt.json'
import type { Project } from '@/lib/portfolio-data'
import { findLocalizedProject, localizeProjects } from './projects'
import {
  DEFAULT_LOCALE,
  isLocale,
  LOCALE_STORAGE_KEY,
  type Locale,
} from './config'

/**
 * Both dictionaries are bundled and swapped in memory, so switching languages
 * is instant and needs no network round-trip. At ~10KB each that is cheaper
 * than the request it would otherwise cost.
 *
 * `en` types the dictionary shape: a key missing from pt.json becomes a
 * TypeScript error rather than a blank string at runtime.
 */
const dictionaries = { en, pt } as const

type Dictionary = typeof en

type I18nValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dictionary
}

const I18nContext = createContext<I18nValue | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  // Starts at the default so server and first client render agree; the real
  // preference is applied in the effect below. The inline script in the layout
  // has already set <html lang>, so there is no visible flash.
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE)

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY)
      if (isLocale(stored)) {
        setLocaleState(stored)
        return
      }
      // No saved choice: follow the browser's preferred language once.
      if (navigator.language?.toLowerCase().startsWith('pt')) {
        setLocaleState('pt')
      }
    } catch {
      // Private mode or blocked storage: the default locale still works.
    }
  }, [])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    document.documentElement.lang = next
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, next)
    } catch {
      // Preference just won't persist; the current page still switches.
    }
  }, [])

  // Keep <html lang> in sync when the locale comes from storage or the browser.
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return (
    <I18nContext.Provider
      value={{ locale, setLocale, t: dictionaries[locale] }}
    >
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n(): I18nValue {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used inside <I18nProvider>')
  }
  return context
}

/** Convenience hook for components that only need the strings. */
export function useTranslations(): Dictionary {
  return useI18n().t
}

/**
 * The project list with its copy in the active language. Structural fields
 * (slug, cover, year) are untouched — see `lib/i18n/projects.ts`.
 */
export function useProjects(): Project[] {
  const { locale } = useI18n()
  return useMemo(() => localizeProjects(locale), [locale])
}

/** A single project by slug, in the active language. */
export function useProject(slug: string): Project | undefined {
  const { locale } = useI18n()
  return useMemo(() => findLocalizedProject(slug, locale), [slug, locale])
}
