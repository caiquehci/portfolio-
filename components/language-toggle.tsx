'use client'

import { LOCALES, LOCALE_LABELS, type Locale } from '@/lib/i18n/config'
import { useI18n } from '@/lib/i18n/provider'
import { cn } from '@/lib/utils'

/**
 * EN / PT switch.
 *
 * Built as a radiogroup rather than a checkbox-style switch: both languages are
 * named on screen, so neither is framed as "the default plus the other one",
 * and screen readers announce which is selected.
 */
export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale, t } = useI18n()

  const describe = (target: Locale) =>
    target === 'pt' ? t.nav.switchToPortuguese : t.nav.switchToEnglish

  return (
    <div
      role="radiogroup"
      aria-label={t.nav.language}
      className={cn(
        'relative inline-flex items-center rounded-full border border-border p-0.5',
        className,
      )}
    >
      {LOCALES.map((option) => {
        const active = option === locale
        return (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={describe(option)}
            onClick={() => setLocale(option)}
            className={cn(
              'rounded-full px-2.5 py-1 text-xs font-medium transition-colors',
              active
                ? 'bg-foreground text-background'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {LOCALE_LABELS[option]}
          </button>
        )
      })}
    </div>
  )
}
