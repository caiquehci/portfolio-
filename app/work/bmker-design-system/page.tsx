'use client'

import { useState } from 'react'
import Link from 'next/link'
import { projects } from '@/lib/portfolio-data'
import ImageCarouselModal from '@/components/home/carousel-modal'

export default function BmmkerPage() {
  const project = projects.find((p) => p.slug === 'bmker-design-system')
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
          B__mker: Reimagining social discovery and digital intent
        </h1>
        <p className="text-sm text-muted-foreground">
          Role: Solo Product Designer (Visual, UX, & Brand Strategy) · Timeline: June 2023 – January 2024 · Scope: End-to-end product strategy, user research, brand identity, and interface design.
        </p>
        {/* <p className="text-sm text-muted-foreground">
          TL;DR: <a href="https://www.behance.net/gallery/202964509/B__mker" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">View the illustration for this case study</a>
        </p> */}
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

      <section className="flex max-w-2xl flex-col gap-4 mt-16">
        <h2 className="text-xl font-medium">About the project</h2>
        <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
          <p>
            Modern social media platforms are trapped in an engagement loop optimized for passive consumption, leaving users fatigued by algorithmic echo chambers and noise. B__mker is an exploration of a healthier social ecosystem—one designed to balance casual browsing with intentional, high-value intellectual and professional growth.
          </p>
          <p>
            As the sole designer, I led the project from conception to high-fidelity execution, establishing the brand system, conducting quantitative and qualitative research, and architecting an interface that puts content curation directly back into the user's hands.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-10 mt-16">
        <h2 className="text-xl font-medium">Initiatives</h2>

        <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8">
          <h3 className="text-lg font-medium">The challenge</h3>
          <p className="leading-relaxed text-muted-foreground">
            How might we design a social networking experience that reduces digital fatigue through casual discovery, while providing a dedicated space for specific, intellectualized, and professional content?
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Most platforms force a false dichotomy: either hyper-professional networks constrained by corporate etiquette, or entertainment feeds driven by short-form distraction. The core challenge was architecting a dual-natured platform architecture that could accommodate both light-hearted social interaction and deep intellectual engagement without overwhelming the user's cognitive load.
          </p>
        </article>

        <div className="w-full">
          <button
            onClick={() => setActiveImage("/portfolio-images/bmker-design-system/IMAGEM_03.png")}
            className="w-auto text-left cursor-pointer overflow-hidden rounded-xl border border-border bg-transparent"
          >
            <img
              src="/portfolio-images/bmker-design-system/IMAGEM_03.png"
              alt="Illustration"
              className="h-[300px] md:h-[500px] w-auto object-contain"
            />
          </button>
        </div>

        <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8 mt-16">
          <h3 className="text-lg font-medium">Strategic approach and discovery</h3>
          <p className="leading-relaxed text-muted-foreground">
            To avoid building for an echo chamber, I decoupled personal assumptions from the product strategy early in the discovery phase.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            <strong>1. Quantitative e qualitative research</strong>
          </p>
          <p className="leading-relaxed text-muted-foreground">
            I structured a formal survey distributed to a sample group of 104 individuals, yielding 84 validated responses. The evaluation used linear-scale metrics (1 to 5) to measure behavioral pain points around digital fatigue, content fragmentation, and the desire for purposeful networking.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            <strong>Key insights uncovered:</strong>
          </p>
          <ul className="flex max-w-2xl list-disc flex-col gap-2 pl-5 text-muted-foreground">
            <li className="leading-relaxed">
              High correlation between passive algorithmic feeds and daily cognitive exhaustion.
            </li>
            <li className="leading-relaxed">
              A clear demand for segmented spaces where niche, career-oriented, or intellectual discussions could happen without getting buried by mainstream noise.
            </li>
          </ul>
          <p className="leading-relaxed text-muted-foreground">
            <strong>2. Translating data into architecture</strong>
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Instead of relying on bloated documentation, the research findings were immediately translated into foundational product artifacts:
          </p>
          <ul className="flex max-w-2xl list-disc flex-col gap-2 pl-5 text-muted-foreground">
            <li className="leading-relaxed">
              <strong>User personas and archetypes:</strong> Mapping distinct user behaviors regarding professional growth versus casual socializing.
            </li>
            <li className="leading-relaxed">
              <strong>User stories and frameworks:</strong> Establishing clear macro-level constraints (who, what, when, and why) to streamline feature prioritization and interface development.
            </li>
          </ul>
        </article>

        <div className="max-w-3xl">
          <ImageCarouselModal
            images={[
              "/portfolio-images/bmker-design-system/image05.png",
              "/portfolio-images/bmker-design-system/image06.png",
              "/portfolio-images/bmker-design-system/image07.png",
              "/portfolio-images/bmker-design-system/image08.png",
              "/portfolio-images/bmker-design-system/image09.png",
            ]}
            altText="B__mker persona discoveries"
            title=""
          />
        </div>

        <article className="flex max-w-2xl flex-col gap-6 border-t border-border pt-8 mt-16">
          <h3 className="text-lg font-medium">Core product pillars and solutions</h3>
          <p className="leading-relaxed text-muted-foreground">
            This section can house your visual assets/screens from the original site.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            <strong>Reclaiming content control</strong><br />
            Designed an onboarding and feed-filtering architecture that allows users to segment their digital consumption. By breaking away from rigid platform formatting, users can toggle between casual social loops and focused professional frameworks based on their immediate intent. Swipe left to see less. Right to see more, simple huh?!
          </p>

          <div className="w-full">
            <button
              onClick={() => setActiveImage("/portfolio-images/bmker-design-system/IMAGEM_10.png")}
              className="w-auto text-left cursor-pointer overflow-hidden rounded-xl border border-border bg-transparent"
            >
              <img
                src="/portfolio-images/bmker-design-system/IMAGEM_10.png"
                alt="Content control"
                className="h-[300px] md:h-[500px] w-auto object-contain"
              />
            </button>
          </div>

          <p className="leading-relaxed text-muted-foreground mt-8">
            <strong>Scalable design system and brand identity</strong><br />
            Developed a cohesive visual language from scratch. Because the project was solo-driven, creating a modular component foundation and clear typography/color guidelines was critical to maintaining visual integrity across high-density content cards and sparse discovery layouts.
          </p>
        </article>

        <div className="w-full">
          <button
            onClick={() => setActiveImage("/portfolio-images/bmker-design-system/IMAGEM_11.png")}
            className="w-auto text-left cursor-pointer overflow-hidden rounded-xl border border-border bg-transparent"
          >
            <img
              src="/portfolio-images/bmker-design-system/IMAGEM_11.png"
              alt="Brand identity"
              className="h-[300px] md:h-[500px] w-auto object-contain"
            />
          </button>
        </div>

        <div className="w-full">
          <button
            onClick={() => setActiveImage("/portfolio-images/bmker-design-system/IMAGEM_12.png")}
            className="w-auto text-left cursor-pointer overflow-hidden rounded-xl border border-border bg-transparent"
          >
            <img
              src="/portfolio-images/bmker-design-system/IMAGEM_12.png"
              alt="Brand identity 2"
              className="h-[200px] md:h-[214px] w-auto object-contain"
            />
          </button>
        </div>

        <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8 mt-16">
          <h3 className="text-lg font-medium">Key takeaways</h3>
          <p className="leading-relaxed text-muted-foreground">
            <strong>Research guardrails prevent bias:</strong> Validating early hypotheses with a structured survey of 80+ participants completely shifted the original feature roadmap, proving that subjective design choices must always be checked against actual user behavior.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            <strong>Balancing dual-intent architectures:</strong> Designing for two contrasting states of mind (casual leisure vs. professional/intellectual focus) within a single app requires strict information architecture to prevent cognitive overload.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            <strong>End-to-end system thinking:</strong> Executing a project solo as a product designer demands treating brand identity, UX strategy, and UI systems as interconnected layers rather than isolated silos.
          </p>
        </article>
      </section>

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
            .filter((p) => !p.hidden && p.slug !== 'bmker-design-system')
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