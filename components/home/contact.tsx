'use client'

import { profile } from '@/lib/portfolio-data'
import { useTranslations } from '@/lib/i18n/provider'

export function Contact() {
  const t = useTranslations()

  const channels = [
    { label: t.contact.email, href: profile.links.email, external: false },
    { label: t.contact.linkedin, href: profile.links.linkedin, external: true },
    { label: t.contact.resume, href: profile.links.resume, external: false },
  ]

  return (
    <section id="contact" className="scroll-mt-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-16 md:py-24">
        <h2 className="text-2xl font-medium tracking-tight">{t.contact.title}</h2>
        <p className="max-w-xl leading-relaxed text-muted-foreground">{t.contact.body}</p>
        <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          {channels.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noreferrer' : undefined}
                className="underline underline-offset-4 hover:text-muted-foreground"
              >
                {c.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
