'use client'

import { useState } from 'react'
import Link from 'next/link'
import { projects } from '@/lib/portfolio-data'

export default function AudenCollegePage() {
  const project = projects.find((p) => p.slug === 'auden-college')
  const [activeImage, setActiveImage] = useState<string | null>(null)

  if (!project) return null

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-16 md:py-24">
      <button
        onClick={() => window.history.back()}
        className="text-sm text-muted-foreground underline underline-offset-4 cursor-pointer bg-transparent border-none p-0 text-left"
      >
        ← Back
      </button>

      <header className="flex flex-col gap-4">
        <p className="text-sm text-muted-foreground">
          {project.year} · {project.domain}
        </p>
        <h1 className="max-w-3xl text-3xl font-medium leading-tight tracking-tight md:text-4xl">
          {project.name}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          From zero to a selling e-commerce in 3 days
        </p>
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

      <section className="flex max-w-2xl flex-col gap-4">
        <h2 className="text-xl font-medium">About the project</h2>
        <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
          <p>
            AUDEN was a new, Gen Z-focused brand with no website or e-commerce live. Its official path to market was through Ditto, an internal product I had designed, but adapting it to AUDEN’s visual requirements would require engineering time and multiple iterations.
          </p>
          <p>
            The business needed to start selling immediately. Rather than waiting for the internal product backlog, I evaluated whether an existing validated experience could be deployed through a faster stack.
          </p>
        </div>
      </section>

      <section className="flex max-w-2xl flex-col gap-4  mt-16">
        <h2 className="text-xl font-medium">The challenge</h2>
        <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
          <p>
            The challenge was not simply to design a new website. It was to balance time-to-market, brand expression, product consistency, and technical constraints.
          </p>
          <p>
            Ditto could support the core purchasing journey, but getting AUDEN from zero to a functional storefront would take roughly two weeks. Every day without a live site meant another day without the ability to generate leads and enrollments.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-10 mt-16">
        <h2 className="text-xl font-medium">Initiatives</h2>

        <article className="flex max-w-2xl flex-col gap-5 border-t border-border pt-8">
          <h3 className="text-lg font-medium">The decision</h3>
          <p className="leading-relaxed text-muted-foreground">
            I chose Framer instead of Ditto. The decision was based on more than visual flexibility. I analyzed existing Ditto experiences through Clarity, looking at user flows, page performance, and heatmaps. The data showed that the existing Home to PLP to PDP to Checkout journey was already a validated path. That allowed me to separate what needed to change from what was already working.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            The three principles were straightforward:
          </p>
          <ul className="flex flex-col gap-2 pl-5 list-disc text-muted-foreground">
            <li>Give the homepage enough personality to establish AUDEN as a new, Gen Z-focused brand.</li>
            <li>Preserve the validated purchasing journey.</li>
            <li>Use Framer to gain design independence and reduce time-to-market.</li>
          </ul>
        </article>

        <article className="flex max-w-2xl flex-col gap-5 border-t border-border pt-8">
          <h3 className="text-lg font-medium">Execution</h3>
          <p className="leading-relaxed text-muted-foreground">
            I designed and built the website and CMS in Framer, translating the existing product logic into a new branded experience without rebuilding the underlying purchasing journey from scratch. The result was a functional e-commerce website with CMS capabilities delivered in 3 days, compared with approximately 2 weeks through the internal Ditto workflow.
          </p>
        </article>

        <div className="w-full">
          <button
            onClick={() => setActiveImage("/portfolio-images/auden-college/IMAGEM_02.png")}
            className="w-auto text-left cursor-pointer overflow-hidden rounded-xl border border-border bg-transparent"
          >
            <img
              src="/portfolio-images/auden-college/IMAGEM_02.png"
              alt="Illustration"
              className="h-[300px] md:h-[500px] w-auto object-contain"
            />
          </button>
        </div>

        <article className="flex max-w-2xl flex-col gap-5 border-t border-border pt-8">
          <h3 className="text-lg font-medium">Trade-offs</h3>
          <p className="leading-relaxed text-muted-foreground">
            The speed came with real consequences. Framer offered significantly more freedom and faster iteration, but introduced considerations around infrastructure, image hosting, bandwidth, caching, Core Web Vitals, SEO, and long-term scalability. The decision was therefore not simply Framer is faster. It was a deliberate trade-off between immediate time-to-market and long-term control of the technology stack.
          </p>
        </article>
      </section>

      <section className="flex max-w-2xl flex-col gap-4 mt-16">
        <h2 className="text-xl font-medium">Outcome</h2>
        <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
          <p>
            AUDEN went from having no digital storefront to a functional website and CMS in 3 days, allowing the brand to begin selling without waiting for the engineering backlog.
          </p>
          <p>
            The project also exposed a broader product question: if a designer could independently deliver a branded storefront this quickly, what did that say about the limitations and positioning of the internal product? The result was a strategic discussion around Ditto’s scope, technology costs, governance, and the role of internal versus external platforms.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-4 w-full mt-16">
        <h2 className="text-xl font-medium">See it yourself</h2>
        <div className="w-full h-[80vh] md:h-[80vh] overflow-hidden rounded-xl bg-neutral-900/10">
          <iframe
            src="https://faculdadeauden.com.br/"
            title="Auden Live Website Preview"
            className="w-full h-full border-none"
            allowFullScreen
          />
        </div>
      </section>

      <section className="flex max-w-2xl flex-col gap-4  mt-16">
        <h2 className="text-xl font-medium">Key takeaway</h2>
        <p className="leading-relaxed text-muted-foreground">
          The fastest solution was not necessarily the best product decision in the long term. But it was doable!
        </p>
      </section>

      {/* {project.team ? (
        <p className="max-w-2xl text-sm text-muted-foreground">{project.team}</p>
      ) : null} */}

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

      <section className="flex flex-col gap-6 border-t border-border pt-16 mt-40">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-medium tracking-tight">Explore other cases</h2>
          <p className="text-base text-muted-foreground">Continue reading about my process and impact across other digital products.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3 mt-4">
          {projects
            .filter((p) => !p.hidden && p.slug !== 'auden-college')
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