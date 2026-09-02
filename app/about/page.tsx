import type { Metadata } from 'next'
import { education, experience, profile, skills } from '@/lib/portfolio-data'

export const metadata: Metadata = {
  title: `About, ${profile.shortName}`,
}

export default function AboutPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-16 md:py-24">
      <header className="flex max-w-2xl flex-col gap-4">
        <h1 className="text-3xl font-medium tracking-tight md:text-4xl">About</h1>
        {profile.aboutIntro.map((p) => (
          <p key={p} className="leading-relaxed text-muted-foreground">
            {p}
          </p>
        ))}
        <p className="text-sm text-muted-foreground">{profile.location}</p>
      </header>

      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Experience</h2>
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

      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Education</h2>
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

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-medium">Skills</h2>
        <p className="max-w-2xl leading-relaxed text-muted-foreground">{skills.join(', ')}</p>
      </section>
    </main>
  )
}
