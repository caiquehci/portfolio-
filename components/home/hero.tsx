'use client'

import { profile } from '@/lib/portfolio-data'
import { useTranslations } from '@/lib/i18n/provider'

export function Hero() {
  const t = useTranslations()

  return (
    <section className="border-b border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-16 md:py-24">
        <p className="text-sm text-muted-foreground">{t.hero.title}</p>

        <h1 className="max-w-3xl text-4xl font-medium leading-tight tracking-tight md:text-5xl text-foreground">
          {profile.shortName}
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-foreground">{t.hero.positioning}</p>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">{t.hero.experienceLine}</p>

      </div>
    </section>
  )
}
