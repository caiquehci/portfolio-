'use client'

import { useState } from 'react'
import Link from 'next/link'
import { projects } from '@/lib/portfolio-data'
import ImageComparisonModal from '@/components/home/image-comparison-modal'
import ImageCarouselModal from '@/components/home/carousel-modal'

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
        <h2 className="text-xl font-medium">Role & Scope</h2>
        <ul className="flex max-w-2xl list-disc flex-col gap-2 pl-5 text-muted-foreground">
          <li className="leading-relaxed">
            Owned the end-to-end design and UX architecture of AdvLabs, a specialized SaaS platform for environmental lawyers, scaling its interface standards across a two-year engagement.
          </li>
          <li className="leading-relaxed">
            Redesigned and modernized core legacy modules including the Administrative Dashboard, Cases & Petitions, Subscriptions, and Networks, bringing structural hierarchy and clarity to complex workflows.
          </li>
          <li className="leading-relaxed">
            Architected and shipped brand-new product modules from scratch, including My Clients & Calculator, Courses, and Classes, ensuring seamless integration into the existing information architecture.
          </li>
          <li className="leading-relaxed">
            Developed and institutionalized the platform's first comprehensive Design System, consolidating foundational tokens, UI components, and behavioral guidelines to eliminate ad-hoc development decisions.
          </li>
        </ul>
      </section>

      <section className="flex max-w-2xl flex-col gap-4">
        <h2 className="text-xl font-medium">About the project</h2>
        <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
          <p>
            AdvLabs is a specialized SaaS platform built for environmental lawyers, operating on a Chakra UI foundation. Joining after initial conception, I took full ownership of modernizing core workflows and architecting new feature modules while scaling the product's interface standards across a two-year engagement.
          </p>
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

        <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8">
          <h3 className="text-lg font-medium">The challenge</h3>
          <p className="leading-relaxed text-muted-foreground">
            The platform suffered from critical operational bottlenecks. Without a formalized design system or clear interaction documentation, component behavior was left to ad-hoc development decisions. This led to fragmented user journeys, heavy cognitive friction across complex legal workflows, and rising drop-off rates in high-intent areas like petition management and account subscriptions.
          </p>
        </article>

        <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8">
          <h3 className="text-lg font-medium">Restoring consistency</h3>
          <p className="leading-relaxed text-muted-foreground">
            I systematically audited and redesigned core product areas, including the Administrative Dashboard, Cases & Petitions, Subscriptions, and Networks. By establishing predictable visual hierarchies and standardizing layout patterns, I transformed fragmented screens into unified, intuitive workflows optimized for deep legal data analysis.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            For instance, looking at the dashboard evolution, the initial version suffered from a scattered hierarchy where critical metrics sat awkwardly next to empty states while core service actions competed for attention. Through the redesign, I transformed it into a cohesive, high-density command center. By restructuring the layout into a deliberate grid with a dedicated calendar sidebar, contextual banner zones, and clear visual chunking, I shifted the product from a basic collection of cards into an intentional workspace built for professional legal execution.
          </p>
        </article>

        <div className="max-w-3xl">
          <ImageComparisonModal
            beforeImg="/portfolio-images/advlabs-saas/Pré.png"
            afterImg="/portfolio-images/advlabs-saas/Pós.png"
            altText="AdvLabs Dashboard Evolution"
            title="Dashboard Redesign Evolution"
          />
        </div>

        <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8 mt-6">
          <h3 className="text-lg font-medium">Designing new capabilities</h3>
          <p className="leading-relaxed text-muted-foreground">
            Alongside legacy refactoring, I conceptualized and shipped brand-new product modules, including My Clients & Calculator, Courses, and Classes. Operating within strict technical parameters, I ensured these features integrated seamlessly into the existing information architecture, maintaining a consistent mental model for users without introducing isolated UI patterns.
          </p>
        </article>

        <div className="max-w-3xl">
          <ImageCarouselModal
            images={[
              "/portfolio-images/advlabs-saas/meus_clientes.png",
              "/portfolio-images/advlabs-saas/calculadora.png",
              "/portfolio-images/advlabs-saas/cursos.png",
              "/portfolio-images/advlabs-saas/classes.png"
            ]}
            altText="AdvLabs Feature Exploration"
            title="Design Iterations & Variations"
          />
        </div>

        <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8 mt-6">
          <h3 className="text-lg font-medium">Building the design system</h3>
          <p className="leading-relaxed text-muted-foreground">
            To solve long-term scalability issues, I developed and institutionalized the platform's first comprehensive Design System. By consolidating foundational tokens, UI components, and behavioral guidelines, I eliminated ad-hoc styling and established a rigorous single source of truth that bridged the gap between product design and frontend engineering.
          </p>
        </article>

        <div className="w-full">
          <button
            onClick={() => setActiveImage("/portfolio-images/advlabs-saas/IMAGEM_03.png")}
            className="w-auto text-left cursor-pointer overflow-hidden rounded-xl border border-border bg-transparent"
          >
            <img
              src="/portfolio-images/advlabs-saas/IMAGEM_03.png"
              alt="Illustration"
              className="h-[300px] md:h-[500px] w-auto object-contain"
            />
          </button>
        </div>

        <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8">
          <h3 className="text-lg font-medium">Challenging product assumptions</h3>
          <p className="leading-relaxed text-muted-foreground">
            Beyond interface design, I actively steered product strategy by auditing information architecture. For instance, the desktop sidebar navigation had expanded to 19 disparate items, overwhelming users and shrinking active workspace. I restructured the navigation model to reduce cognitive overhead and aligned feature prioritization with direct user feedback and behavioral data.
          </p>
        </article>
      </section>

      <section className="flex max-w-2xl flex-col gap-4">
        <h2 className="text-xl font-medium">Retrospective</h2>
        <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
          <p>
            Reflecting on a two-year tenure, I would have pushed for formalizing the Design System even earlier in the lifecycle. Allowing components to scale without a system first created unnecessary technical debt that required heavy remediation later. Establishing foundational guardrails from day one accelerates long-term velocity much faster than retroactive cleanup.
          </p>
        </div>
      </section>

      <div className="w-full">
        <button
          onClick={() => setActiveImage("/portfolio-images/advlabs-saas/Frame 36.png")}
          className="w-auto text-left cursor-pointer overflow-hidden rounded-xl border border-border bg-transparent"
        >
          <img
            src="/portfolio-images/advlabs-saas/Frame 36.png"
            alt="Illustration"
            className="h-[300px] md:h-[500px] w-auto object-contain"
          />
        </button>
      </div>

      <section className="flex max-w-2xl flex-col gap-4 mt-6">
        <h2 className="text-xl font-medium">Outcome</h2>
        <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
          <p>
            AdvLabs transitioned from an unstandardized software prototype into a mature, highly scalable SaaS platform. By driving the creation of the design system, refactoring core legal workflows, and taking complete ownership of product UI health, I established the architectural framework necessary for the business to scale confidently over two years.
          </p>
        </div>
      </section>

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

      <section className="flex flex-col gap-6 border-t border-border pt-16 mt-40">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-medium tracking-tight">Explore other cases</h2>
          <p className="text-base text-muted-foreground">Continue reading about my process and impact across other digital products.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3 mt-4">
          {projects
            .filter((p) => !p.hidden && p.slug !== 'advlabs-saas')
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