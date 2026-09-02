import { profile } from '@/lib/portfolio-data'

const channels = [
  { label: 'Email', href: profile.links.email, external: false },
  { label: 'LinkedIn', href: profile.links.linkedin, external: true },
  { label: 'Resume', href: profile.links.resume, external: false },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-16 md:py-24">
        <h2 className="text-2xl font-medium tracking-tight">Contact</h2>
        <p className="max-w-xl leading-relaxed text-muted-foreground">
          I can share more about these projects. Some details are omitted because they are sensitive or
          protected.
        </p>
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
