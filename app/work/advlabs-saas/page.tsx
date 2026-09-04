'use client'

import { useState } from 'react'
import Link from 'next/link'
import { projects } from '@/lib/portfolio-data'

export default function AdvlabsSaaSPage() {
  const project = projects.find((p) => p.slug === 'advlabs-saas')
  const [activeImage, setActiveImage] = useState<string | null>(null)

  if (!project) return null

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

      <div className="w-full">
        <button 
          onClick={() => setActiveImage(project.cover)}
          className="w-full text-left cursor-pointer overflow-hidden rounded-xl bg-transparent"
        >
          <img 
            src={project.cover} 
            alt="Main Banner" 
            className="w-full h-auto object-contain"
          />
        </button>
      </div>

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
        <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
          {project.about.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </div>
      </section>

      <div className="w-full">
        <button 
          onClick={() => setActiveImage("/portfolio-images/advlabs-saas/IMAGEM_02.png")}
          className="w-auto text-left cursor-pointer overflow-hidden rounded-xl border border-border bg-transparent"
        >
          <img 
            src="/portfolio-images/advlabs-saas/IMAGEM_02.png" 
            alt="Illustration" 
            className="h-[300px] md:h-[500px] w-auto object-contain"
          />
        </button>
      </div>

      <section className="flex flex-col gap-10">
        <h2 className="text-xl font-medium">Initiatives</h2>
        {project.initiatives.map((item) => (
          <article key={item.title} className="flex max-w-2xl flex-col gap-5 border-t border-border pt-8">
            <h3 className="text-lg font-medium">{item.title}</h3>
            <p className="leading-relaxed text-muted-foreground">{item.challenge}</p>
            
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground">{item.focusLabel}</p>
              <p className="leading-relaxed text-muted-foreground">{item.focus}</p>
            </div>

            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground">Solution</p>
              <p className="leading-relaxed text-muted-foreground">{item.solution}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="flex max-w-2xl flex-col gap-4">
        <h2 className="text-xl font-medium">Outcome</h2>
        <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
          {project.outcome.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </div>
      </section>

      {project.limitations ? (
        <section className="flex max-w-2xl flex-col gap-4">
          <h2 className="text-xl font-medium">Limitations</h2>
          {project.limitations.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </section>
      ) : null}

      {project.team ? (
        <p className="max-w-2xl text-sm text-muted-foreground">{project.team}</p>
      ) : null}

      {activeImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-7xl max-h-full overflow-hidden rounded-xl">
            <img 
              src={activeImage} 
              alt="Zoomed view" 
              className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-xl"
            />
          </div>
          <button 
            className="absolute top-4 right-4 text-white text-sm bg-black/40 px-3 py-1.5 rounded-full hover:bg-black/60"
            onClick={() => setActiveImage(null)}
          >
            Close
          </button>
        </div>
      )}
      
      <section className="flex flex-col gap-6 border-t border-border pt-16 mt-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-medium tracking-tight">Explore other cases</h2>
          <p className="text-base text-muted-foreground">Continue reading about my process and impact across other digital products.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3 mt-4">
          {projects
            .filter((p) => p.slug !== 'advlabs-saas')
            .map((p) => (
              <Link 
                key={p.slug} 
                href={`/work/${p.slug}`}
                className="group flex flex-col gap-3 rounded-xl border border-border p-4 bg-transparent hover:bg-neutral-900/40 transition-colors"
              >
                <div className="w-full aspect-[16/10] overflow-hidden rounded-lg border border-border/50">
                  <img 
                    src={p.cover} 
                    alt={p.name} 
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col gap-1 mt-1">
                  <h3 className="text-base font-medium tracking-tight text-foreground group-hover:text-muted-foreground transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{p.domain}</p>
                </div>
              </Link>
            ))}
        </div>
      </section>

    </main>
  )
}
