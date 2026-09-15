'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Cover } from '@/components/cover'
import { useProjects, useTranslations } from '@/lib/i18n/provider'

export function SelectedWork() {
  const projects = useProjects()
  const featured = projects.filter((p) => p.featured)
  const t = useTranslations()

  return (
    <section id="work" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-16 md:py-24">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-medium tracking-tight">{t.selectedWork.title}</h2>
          <p className="max-w-xl text-muted-foreground">{t.selectedWork.subtitle}</p>
        </div>

        <div className="flex flex-col gap-10">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group relative grid grid-cols-1 md:grid-cols-[1.1fr_1fr] md:items-center rounded-2xl bg-zinc-950 border border-zinc-800/75 overflow-hidden transition-all duration-500 ease-in-out"
            >
              {/* Blurred background banner image that only fades in on hover */}
              {project.cover && (
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity duration-700">
                  <Image
                    src={project.cover}
                    alt=""
                    fill
                    className="object-cover filter blur-2xl scale-125"
                  />
                  <div className="absolute inset-0 bg-zinc-950/80" />
                </div>
              )}

              <div className="relative z-10 w-full h-full [&_*]:rounded-none">
                <Cover title={project.name} imageUrl={project.cover} index={''} />
              </div>
              <div className="relative z-10 flex flex-col gap-3 p-6 md:p-8">
                <p className="text-sm text-zinc-400">
                  {project.year} · {project.domain}
                </p>
                <h3 className="text-xl font-medium tracking-tight md:text-2xl text-zinc-100 group-hover:text-white transition-colors">
                  {project.name}
                </h3>
                <p className="leading-relaxed text-muted-foreground">{project.summary}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <Link
            href="/work/all"
            className="px-8 py-4 rounded-xl bg-[#ffc000] text-zinc-950 font-medium hover:opacity-90 transition-opacity duration-300 shadow-lg shadow-[#ffc000]/10 flex items-center gap-2"
          >
            {t.selectedWork.seeAll}
          </Link>
        </div>
      </div>
    </section>
  )
}