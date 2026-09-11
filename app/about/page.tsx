import type { Metadata } from 'next'
import { education, experience, profile, skills } from '@/lib/portfolio-data'

export const metadata: Metadata = {
  title: `About, ${profile.shortName}`,
}

export default function AboutPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-16 md:py-24">
      <header className="flex max-w-2xl flex-col gap-4">
        <h1 className="text-3xl font-medium tracking-tight md:text-4xl">About me</h1>
        <p className="leading-relaxed text-muted-foreground">
          I am a Product Designer with over 5+ years of experience in digital products, working end-to-end across discovery and delivery, from research to prototyping, validation, and handoff. I specialize in research, information architecture, design systems, and data-driven decision-making, accumulating a total professional journey of 11 years in design and technology.
        </p>
        <p className="leading-relaxed text-muted-foreground">
          Throughout my career spanning SaaS, e-commerce, educational ecosystems, industrial software, and social networks, I have developed solutions that impacted tens of thousands of active monthly users through high-scale platforms. Most recently, I built and optimized high-scale platforms for the Quero Educação/Qeevo Group network, contributing to an ecosystem that drives over{' '} 
          <a
            href="https://sobre.quero.com/carreiras/#:~:text=%2B60mi,anualmente"
            target="_blank"
            rel="noreferrer noopener nofollow"
            className="underline underline-offset-4"
          >
            60 million visits anually
          </a>
          {''} to connect students and partner institutions.
        </p>
        <p className="leading-relaxed text-muted-foreground">
          I ship complete digital products, design flows that reduce cognitive load, and back product decisions with funnels, statistical tests, and documented trade-offs. My work integrates the bread and butter Figma, with analytical rigor (Google Analytics, Microsoft Clarity, Hotjar, you name the tool), statistical testing, and the advanced use of generative AI to optimize end-to-end processes.
        </p>
        <p className="text-sm text-muted-foreground">{profile.location}</p>
      </header>

      <section className="flex flex-col gap-6 mt-16">
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

      <section className="flex flex-col gap-6 mt-16">
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

      <section className="flex flex-col gap-4 mt-16">
        <h2 className="text-xl font-medium">Skills</h2>
        <p className="max-w-2xl leading-relaxed text-muted-foreground">{skills.join(', ')}</p>
      </section>
    </main>
  )
}