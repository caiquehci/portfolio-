'use client'

import Link from 'next/link'
import { profile } from '@/lib/portfolio-data'
import { useTranslations } from '@/lib/i18n/provider'

export function SiteFooter() {
  const t = useTranslations()

  return (
    <footer className="relative border-t border-border">
      {/* Absolute background gradient: sits behind everything, takes up 0 layout height */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[rgba(255,192,0,0.06)] to-transparent z-0" />

      {/* Inner container wrapped with relative z-10 to stay above the gradient */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          {new Date().getFullYear()} {profile.name}
        </p>
        <ul className="flex flex-wrap items-center gap-5 text-xs">
          <li>
            <a href={profile.links.email} className="text-muted-foreground hover:text-foreground">
              {t.footer.email}
            </a>
          </li>
          <li>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <Link href="/about" className="text-muted-foreground hover:text-foreground">
              {t.footer.about}
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}