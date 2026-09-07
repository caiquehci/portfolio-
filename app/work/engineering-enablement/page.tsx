'use client'

import { useState } from 'react'
import Link from 'next/link'
import { projects } from '@/lib/portfolio-data'

export default function EngineeringEnablementPage() {
    const project = projects.find((p) => p.slug === 'engineering-enablement')
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
                    Engineering enablement without the bottleneck: how building portable HTML specs got me into faster sprints
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{project.headline}</p>
                <p className="text-sm text-muted-foreground">
                    {project.role} · {project.project} · {project.period}
                </p>
            </header>

            {project.cover ? (
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
            ) : null}

            <section className="flex flex-col gap-3">
                <h2 className="text-xl font-medium">Role and scope</h2>
                <ul className="flex max-w-2xl list-disc flex-col gap-2 pl-5 text-muted-foreground">
                    <li className="leading-relaxed">
                        Spearheaded a scrappy, highly experimental developer experience workflow on a cross-functional product team to eliminate communication bottlenecks and speed up delivery velocity.
                    </li>
                    <li className="leading-relaxed">
                        Introduced portable HTML specification files and Markdown context documents paired with Figma designs to act as a universal translation layer.
                    </li>
                    <li className="leading-relaxed">
                        Operationalized core foundational components like the Tabela de Processos to bring component systematization to the team.
                    </li>
                </ul>
            </section>

            <section className="flex max-w-2xl flex-col gap-4 mt-16">
                <h2 className="text-xl font-medium">Executive summary</h2>
                <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                    <p>
                        When joining a cross-functional product team consisting of one product designer and four engineers, the workflow suffered from a classic bottleneck. Despite having design files available, the team lacked a shared design system or experience working with a dedicated product designer. This resulted in fragmented component choices, heavy reliance on synchronous back-and-forth communication, and inflated sprint hours spent clarifying layout decisions rather than shipping features.
                    </p>
                    <p>
                        To solve this, I introduced a scrappy, highly experimental developer experience workflow: pairing Figma designs with lightweight, self-contained HTML specification files and Markdown context documents. Long before automated tooling became mainstream workspace defaults, these portable specs acted as a universal translation layer, transforming our delivery velocity, recovering hours previously lost to redundant alignment, and shifting our sprint capacity from fighting debt to dedicating <strong className="text-foreground">80% of our time</strong> to high-value new features.
                    </p>
                </div>
            </section>

            <section className="flex flex-col gap-10 mt-16">
                <h2 className="text-xl font-medium">Initiatives</h2>

                <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8">
                    <h3 className="text-lg font-medium">The challenge: friction in a greenfield design environment</h3>
                    <ul className="flex flex-col gap-3 list-disc pl-5 text-muted-foreground">
                        <li className="leading-relaxed">
                            <strong className="text-foreground">Inconsistent component choices:</strong> Engineers were accustomed to sourcing the first third-party library that seemed appropriate, leading to deep visual inconsistencies, redundant technical debt, and mismatched component implementations across the product.
                        </li>
                        <li className="leading-relaxed">
                            <strong className="text-foreground">Synchronous communication bottlenecks:</strong> Despite detailed design files and documented tickets, the team frequently relied on synchronous check-ins for layout logic, states, and behavior. This created dead time in sprints where engineering velocity stalled waiting for clarification.
                        </li>
                        <li className="leading-relaxed">
                            <strong className="text-foreground">Cultural resistance to overhead:</strong> The team had no prior exposure to structured design systems, and introducing new processes risked being met with resistance if perceived as bureaucratic overhead.
                        </li>
                    </ul>
                </article>

                <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8 mt-16">
                    <h3 className="text-lg font-medium">The solution: scrappy experimentation with portable HTML specs</h3>
                    <p className="leading-relaxed text-muted-foreground">
                        Driven by curiosity and a desire to eliminate repetitive friction, I experimented with a proactive approach. I observed how easily accessible online code libraries accelerated my own understanding, even without a formal developer background. Reversing the logic, I started crafting standalone HTML specification files alongside Markdown context notes.
                    </p>
                </article>

                <div className="w-full h-[600px] border border-border rounded-xl overflow-hidden bg-background shadow-sm mt-2">
                    <iframe
                        src="/specs/tabela-processos.html"
                        title="Tabela de Processos Specification"
                        className="w-full h-full border-0 block"
                    />
                </div>

                <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8 mt-16">
                    <h3 className="text-lg font-medium">Why this approach worked</h3>
                    <ul className="flex flex-col gap-3 list-disc pl-5 text-muted-foreground">
                        <li className="leading-relaxed">
                            <strong className="text-foreground">Zero-friction accessibility:</strong> HTML files could be opened instantly in any browser without requiring a Figma license, specialized design tool knowledge, or complex onboarding. They were small-sized, highly flexible, and acted as a self-explanatory bridge.
                        </li>
                        <li className="leading-relaxed">
                            <strong className="text-foreground">Proactive translation:</strong> Long before developer-centric agents and rich context windows were standard, these HTML sheets served as clear visual breakdowns where all component unfolding was easy to see and review. They allowed developers to inspect behaviors, variants, and tokens at their own pace without needing to decode a complex design tool. Meanwhile, the Markdown files held the broader project context and narrative.
                        </li>
                        <li className="leading-relaxed">
                            <strong className="text-foreground">Organic, bottom-up adoption:</strong> Rather than rolling out a top-down mandate or heavy design system governance framework, I tested the concept small. It was introduced as a collaborative experiment rather than an enforced corporate rule. While one developer initially resisted the shift, the undeniable quality improvement won the team over within two sprints.
                        </li>
                    </ul>
                </article>

                <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8 mt-16">
                    <h3 className="text-lg font-medium">Key takeaway: Systematizing developer experience without overhead</h3>
                    <p className="leading-relaxed text-muted-foreground">
                        Scaling a design workflow across a greenfield team isn't about enforcing top-down governance; it's about building a universal translation layer that respects engineering velocity. By introducing lightweight, portable HTML specifications and markdown context documents alongside Figma, I transformed our delivery loop from a reactive cycle of endless synchronous alignment into an autonomous, high-velocity engine.
                    </p>
                    <p className="leading-relaxed text-muted-foreground">
                        The quantitative impact is clear: recovering hours previously lost to redundant design interpretation allowed us to shift our sprint capacity from fighting technical and alignment debt to dedicating 80% of our time to high-value new features. More importantly, this experiment proved that systemic consistency, perationalized through foundational components like the Tabela de Processos, doesn't require heavy enterprise tooling to succeed. For cross-functional leadership, this demonstrates how a product designer can operate as a strategic facilitator, using scrappy prototyping and technical empathy to align engineering output with product vision under constraints.
                    </p>
                    <p className="leading-relaxed text-muted-foreground">
                        If you read it all, you may be having second thoughts by now. "All that with only this?" and I can asure you, yes, dear reader. There's no magic in here, sometimes people need it simple and if you're not a native speaker (as I'm not on English or a professional dev), this was made in 2023/2024, it's 2026 now. We sure can do something regarding <strong>anything</strong>.
                    </p>
                </article>
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