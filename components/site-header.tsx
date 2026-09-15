'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { profile } from '@/lib/portfolio-data'
import { useTranslations } from '@/lib/i18n/provider'
import { LanguageToggle } from '@/components/language-toggle'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const t = useTranslations()

  const nav = [
    { href: '/work/all', label: t.nav.work },
    { href: '/about', label: t.nav.about },
    { href: '/#contact', label: t.nav.contact },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-sm" onClick={() => setOpen(false)}>
          {profile.shortName}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => {
            const active = item.href === '/about' && pathname === '/about'
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm text-muted-foreground hover:text-foreground',
                  active && 'text-foreground',
                )}
              >
                {item.label}
              </Link>
            )
          })}

          <LanguageToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />

          <button
            type="button"
            className="inline-flex size-9 items-center justify-center"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? t.nav.close : t.nav.menu}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border md:hidden">
          <ul className="flex flex-col px-6 py-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)} className="block py-2 text-sm">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
