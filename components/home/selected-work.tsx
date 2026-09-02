import Link from 'next/link'
import { Cover } from '@/components/cover'
import { projects } from '@/lib/portfolio-data'

export function SelectedWork() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section id="work" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-16 md:py-24">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-medium tracking-tight">Selected work</h2>
          <p className="max-w-xl text-muted-foreground">
            Four cases. Role, context, the decisions, and what happened next.
          </p>
        </div>

        <ul className="flex flex-col">
          {featured.map((project) => (
            <li key={project.slug} className="border-t border-border last:border-b">
              <Link
                href={`/work/${project.slug}`}
                className="grid gap-6 py-8 md:grid-cols-[1fr_1.2fr] md:items-center md:gap-10"
              >
                <Cover title={project.name} index={project.index} />
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-muted-foreground">
                    {project.year} · {project.domain}
                  </p>
                  <h3 className="text-xl font-medium tracking-tight md:text-2xl">{project.name}</h3>
                  <p className="leading-relaxed text-muted-foreground">{project.summary}</p>
                  {project.metric ? (
                    <p className="text-sm">
                      {project.metric.value}
                      <span className="text-muted-foreground"> · {project.metric.label}</span>
                    </p>
                  ) : null}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
