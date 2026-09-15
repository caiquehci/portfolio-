'use client'

import { education, experience, profile, skills } from '@/lib/portfolio-data'
import { useTranslations } from '@/lib/i18n/provider'

/**
 * Client half of the About page. The page itself stays a Server Component so
 * it can export `metadata`; everything that reads the dictionary lives here.
 */
export function AboutContent() {
  const t = useTranslations()

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-16 md:py-24">
      <header className="flex max-w-2xl flex-col gap-4">
        <h1 className="text-3xl font-medium tracking-tight md:text-4xl">{t.about.title}</h1>
        <p className="leading-relaxed text-muted-foreground">{t.about.intro1}</p>
        <p className="leading-relaxed text-muted-foreground">
          {t.about.intro2Before}{' '}
          <a
            href="https://sobre.quero.com/carreiras/#:~:text=%2B60mi,anualmente"
            target="_blank"
            rel="noreferrer noopener nofollow"
            className="underline underline-offset-4"
          >
            {t.about.intro2Link}
          </a>
          {t.about.intro2After}
        </p>
        <p className="leading-relaxed text-muted-foreground">{t.about.intro3}</p>
        <p className="text-sm text-muted-foreground">{t.about.location || profile.location}</p>
      </header>

      <section className="flex flex-col gap-6 mt-16">
        <h2 className="text-xl font-medium">{t.about.experienceTitle}</h2>
        <ul className="flex flex-col">
          {experience.map((item) => (
            <li key={item.role} className="border-t border-border py-6 last:border-b">
              <p className="font-medium">{item.role}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.company} · {item.period}
              </p>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-6 mt-16">
        <h2 className="text-xl font-medium">{t.about.educationTitle}</h2>
        <ul className="flex flex-col">
          {education.map((item) => (
            <li key={item.course} className="border-t border-border py-5 last:border-b">
              {item.href ? (
                <a href={item.href} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                  {item.course}
                </a>
              ) : (
                <p className="font-medium">{item.course}</p>
              )}
              <p className="mt-1 text-sm text-muted-foreground">
                {item.institution} · {item.date}
                {item.credential ? ` · ${item.credential}` : ''}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-4 mt-16">
        <h2 className="text-xl font-medium">{t.about.skillsTitle}</h2>
        <p className="max-w-2xl leading-relaxed text-muted-foreground">{skills.join(', ')}</p>
      </section>
    </main>
  )
}
