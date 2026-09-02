import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Cover } from '@/components/cover'
import { projects } from '@/lib/portfolio-data'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return { title: 'Work' }
  return { title: `${project.name}, Carlos Machado` }
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-16 md:py-24">
      <Link href="/#work" className="text-sm text-muted-foreground underline underline-offset-4">
        Back to work
      </Link>

      <header className="flex flex-col gap-4">
        <p className="text-sm text-muted-foreground">
          {project.year} · {project.domain}
        </p>
        <h1 className="max-w-3xl text-3xl font-medium leading-tight tracking-tight md:text-4xl">
          {project.name}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{project.headline}</p>
        <p className="text-sm text-muted-foreground">
          {project.role} · {project.project} · {project.period}
        </p>
      </header>

      <Cover title={project.name} index={project.index} />

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-medium">What I did</h2>
        <ul className="flex max-w-2xl list-disc flex-col gap-2 pl-5 text-muted-foreground">
          {project.whatIDid.map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex max-w-2xl flex-col gap-4">
        <h2 className="text-xl font-medium">Context</h2>
        {project.about.map((p) => (
          <p key={p} className="leading-relaxed text-muted-foreground">
            {p}
          </p>
        ))}
      </section>

      <section className="flex flex-col gap-10">
        <h2 className="text-xl font-medium">Initiatives</h2>
        {project.initiatives.map((item) => (
          <article key={item.title} className="flex max-w-2xl flex-col gap-3 border-t border-border pt-8">
            <h3 className="text-lg font-medium">{item.title}</h3>
            <p className="leading-relaxed text-muted-foreground">{item.challenge}</p>
            <p className="text-sm font-medium">{item.focusLabel}</p>
            <p className="leading-relaxed text-muted-foreground">{item.focus}</p>
            <p className="leading-relaxed text-muted-foreground">{item.solution}</p>
          </article>
        ))}
      </section>

      <section className="flex max-w-2xl flex-col gap-4">
        <h2 className="text-xl font-medium">Outcome</h2>
        {project.outcome.map((p) => (
          <p key={p} className="leading-relaxed text-muted-foreground">
            {p}
          </p>
        ))}
      </section>

      {project.limitations ? (
        <section className="flex max-w-2xl flex-col gap-4">
          <h2 className="text-xl font-medium">Limitations</h2>
          {project.limitations.map((p) => (
            <p key={p} className="leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </section>
      ) : null}

      {project.team ? (
        <p className="max-w-2xl text-sm text-muted-foreground">{project.team}</p>
      ) : null}
    </main>
  )
}
