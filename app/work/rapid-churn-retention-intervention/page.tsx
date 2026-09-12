'use client'

import { useState } from 'react'
import Link from 'next/link'
import { projects } from '@/lib/portfolio-data'
import ImageComparisonModal from '@/components/home/image-comparison-modal'
import ImageCarouselModal from '@/components/home/carousel-modal'

export default function RapidChurnPage() {
    const project = projects.find((p) => p.slug === 'rapid-churn-retention-intervention')
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
                <h2 className="text-xl font-medium">Role and scope</h2>
                <ul className="flex max-w-2xl list-disc flex-col gap-2 pl-5 text-muted-foreground">
                    <li className="leading-relaxed">
                        Operated as the lead product designer embedded within Marcas Team [a branch of Qeevo Group (QE)], having completed core e-commerce design deliverables before pivoting to address systemic business-level drop-offs.
                    </li>
                    <li className="leading-relaxed">
                        Took full ownership of scoping, designing, and executing a rapid mixed-methods research framework to diagnose student churn and behavioral friction following federal regulatory shifts.
                    </li>
                    <li className="leading-relaxed">
                        Structured and delivered the executive diagnostic architecture, combining qualitative causal maps and quantitative recency-weighted cohort analysis to translate complex user telemetry into actionable insights for leadership.
                    </li>
                </ul>
            </section>

            <section className="flex max-w-2xl flex-col gap-4 mt-16">
                <h2 className="text-xl font-medium">Context and executive summary</h2>
                <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                    <p>
                        Four months prior to the close of the fiscal year, annual performance stalled at 60% right at the onset of the "alta" (historically the peak conversion window for educational scholarship sales). Sales numbers remained frozen at 61% following weeks of stagnation. While upfront, one-time enrollment purchases temporarily masked the issue, long-term product engagement and user lifetime value (LTV) were collapsing.
                    </p>
                    <p>
                        The root cause was structural. Following federal policy shifts established via Decreto nº 12.456/2025 and Portaria MEC nº 378/2025, higher education institutions could no longer offer 100% remote courses without meeting strict physical presence requirements. As QE operates as a major educational e-commerce infrastructure provider in Brazil, our platform historically enabled nationwide scholarship distribution. However, the new regulations meant partner institutions could no longer enroll students lacking a physical on-site campus within their local municipality. Prospective and active students faced rigid scheduling and geographic barriers that broke the core product-market fit.
                    </p>
                    <p>
                        With core e-commerce design milestones finalized and internal design systems operational across other company sectors, I initiated a rapid discovery framework to quantify post-enrollment drop-offs and provide leadership with empirical behavioral data. The objective was clear: by uncovering the exact post-enrollment gaps and friction points driving student abandonment, we could proactively equip Ditto and our sales and commercial teams with critical early-warning indicators—allowing them to identify vulnerability and intervene before churn occurred downstream.
                    </p>
                </div>
            </section>

            {/* <div className="w-full">
                <button
                    onClick={() => setActiveImage("/portfolio-images/rapid-churn-retention-intervention/checkout_confound_isolation_flow.png")}
                    className="w-auto text-left cursor-pointer overflow-hidden rounded-xl border border-border bg-transparent"
                >
                    <img
                        src="/portfolio-images/rapid-churn-retention-intervention/checkout_confound_isolation_flow.png"
                        alt="Visual explanation/bigger picture of the factual happening process bewteen changes and outcomes"
                        className="h-[300px] md:h-[500px] w-auto object-contain"
                    />
                </button>
            </div> */}

            <section className="flex flex-col gap-10  mt-16">
                <h2 className="text-xl font-medium">Initiatives</h2>

                <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8">
                    <h3 className="text-lg font-medium">1. Product problem statement</h3>
                    <p className="leading-relaxed text-muted-foreground">
                        <strong>The regulatory product blockade:</strong> Federal mandates via Portaria MEC nº 378/2025 prohibited 100% remote delivery for high-demand academic tracks, enforcing mandatory physical attendance thresholds. Because partner institutions lacked physical polos across diverse local markets, students could no longer reconcile local attendance mandates with their schedules, halting product consumption.
                    </p>
                    <p className="leading-relaxed text-muted-foreground">
                        <strong>The peak season stagnation:</strong> While top-of-funnel acquisition metrics should have spiked during the peak sales window, our annual targets sat frozen at 60% to 61%. Acquisition stalled because the underlying product-market value proposition broke mid-stream.
                    </p>
                    <p className="leading-relaxed text-muted-foreground">
                        <strong>My intervention:</strong> Historical telemetry from 0-to-12-month cohorts could not bypass federal compliance parameters or manufacture physical infrastructure where local presence was missing. Rather than treating research as a mechanism to reverse compliance-driven drop-offs, the framework was deployed to map the exact threshold of market impact. Providing leadership with empirical data to separate unrecoverable geographic segments from salvageable user groups.
                    </p>
                </article>

                <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8">
                    <h3 className="text-lg font-medium">2. Methodology: Rapid mixed-methods discovery</h3>
                    <p className="leading-relaxed text-muted-foreground">
                        To diagnose post-purchase abandonment under severe time constraints, I deployed a structured mixed-methods framework designed around two strategic execution paths:
                    </p>
                    <p className="leading-relaxed text-muted-foreground">
                        <strong>Qualitative discovery (1:1 sync interviews):</strong>
                    </p>
                    <ul className="flex max-w-2xl list-disc flex-col gap-2 pl-5 text-muted-foreground">
                        <li className="leading-relaxed">
                            Option 1 (Stratified by modality): Structured for granular, format-specific decisions. Comprises 48 total interviews split evenly between active students (24 enrolled 3–12 months) and dropouts (24 within 12 months, prioritizing recent churn), perfectly mirrored across online, hybrid, and in-person delivery modes.
                        </li>
                        <li className="leading-relaxed">
                            Option 2 (Modality-agnostic): Structured for operational simplicity. Comprises 16 total interviews (8 active students, 8 dropouts) ignoring modality to establish a baseline causal contrast.
                        </li>
                    </ul>
                    <p className="leading-relaxed text-muted-foreground">
                        <strong>Quantitative validation (Online async surveys):</strong>
                    </p>
                    <ul className="flex max-w-2xl list-disc flex-col gap-2 pl-5 text-muted-foreground">
                        <li className="leading-relaxed">
                            Option 1 (Stratified by modality): Comprises 600 total respondents (300 active students, 300 dropouts, evenly split across online, hybrid, and in-person formats) to enable deep cross-tabulations by modality.
                        </li>
                        <li className="leading-relaxed">
                            Option 2 (Modality-agnostic): Comprises 200 total respondents (100 active students, 100 dropouts, regardless of modality) focused strictly on core active-versus-dropout comparisons.
                        </li>
                        <li className="leading-relaxed">
                            Recency weighting: Applied weighting to dropout cohorts, prioritizing users from the 1-to-6-month window over older profiles to isolate immediate fallout from the regulatory transition and to also avoid memory bias.
                        </li>
                    </ul>
                    <p className="leading-relaxed text-muted-foreground">
                        <strong>Actionability guardrails:</strong>
                    </p>
                    <p className="leading-relaxed text-muted-foreground">
                        To eliminate noise, friction points were classified as actionable only when corroborated across qualitative causal maps and landing within the upper quartile of the quantitative survey distribution.
                    </p>
                </article>

                <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8">
                    <h3 className="text-lg font-medium">3. Product storyline and executive architecture</h3>
                    <p className="leading-relaxed text-muted-foreground">
                        I structured the product narrative for leadership around a direct, high-impact 4-step framework:
                    </p>
                    <ul className="flex max-w-2xl list-disc flex-col gap-2 pl-5 text-muted-foreground">
                        <li className="leading-relaxed">
                            <strong>User segmentation:</strong> Analysis of cohort sizes, demographic distributions, and active versus churned user splits.
                        </li>
                        <li className="leading-relaxed">
                            <strong>Product retention drivers:</strong> Quantitative metrics paired with qualitative verbatims highlighting core mechanics driving retention past the 1-year mark.
                        </li>
                        <li className="leading-relaxed">
                            <strong>Product churn drivers:</strong> Isolation of primary leakage vectors occurring during the first year of usage.
                        </li>
                        <li className="leading-relaxed">
                            <strong>Experience and recommendation impact:</strong> Comparative Net Promoter Score (NPS) analysis segmented by active and churned user states.
                        </li>
                    </ul>
                </article>

                <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8  mt-16">
                    <h3 className="text-lg font-medium">Operational insights</h3>
                    <p className="leading-relaxed text-muted-foreground">
                        <strong>Data-driven diagnosis:</strong> Retrospective user data cannot invalidate an external regulatory shift. Empirical research served to quantify the boundaries of market friction rather than misrepresenting compliance-driven drop-offs as product design failures.
                    </p>
                    <p className="leading-relaxed text-muted-foreground">
                        <strong>Adaptable research architecture:</strong> Executing a streamlined methodology balanced granular format analysis with rapid delivery under tight operational constraints.
                    </p>
                    <p className="leading-relaxed text-muted-foreground">
                        <strong>Operational risk mitigation:</strong> Post-enrollment insights can be converted into early-warning indicators for commercial and sales teams, isolating vulnerability before downstream churn occured.
                    </p>
                </article>
            </section>

            <section className="flex max-w-2xl flex-col gap-4 mt-16">
                <h2 className="text-xl font-medium">Execution, outcomes and deliverable validation</h2>
                <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                    <p>
                        The diagnostic framework was fully scoped, architected, and approved under streamlined parameters to prioritize speed and immediate executive utility. Partnered with product analyst to extract target student cohorts, while product management engineered an automated n8n pipeline to distribute survey instruments via email at scale.
                    </p>
                    <p>
                        The primary deliverable of this engagement was the comprehensive diagnostic architecture itself. A validated, end-to-end research framework that successfully yielded initial survey data (achieving roughly 45 baseline responses out of the 200 target respondents) prior to organizational layoffs halting the initiative.
                    </p>
                    <p>
                        The rigor of the framework proved that product design extends far beyond visual UI delivery into systemic business diagnosis and risk mitigation under crisis conditions.
                    </p>
                </div>
            </section>

            <section className="flex max-w-2xl flex-col gap-4 mt-16">
                <h2 className="text-xl font-medium">Presentation invitation</h2>
                <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                    <p>
                        Want to see the actual slides I walked into my leadership's office with? Take a look at the exact presentation I used to pitch this diagnostic framework.
                    </p>
                </div>
            </section>

            <section className="flex flex-col gap-4 w-full">
                <h2 className="text-xl font-medium"></h2>
                <div className="w-full h-[80vh] md:h-[80vh] overflow-hidden rounded-xl bg-neutral-900/10">
                    <iframe
                        src="https://tokens-snack-88612944.figma.site"
                        title="Research Plan"
                        className="w-full h-full border-none"
                        allowFullScreen
                    />
                </div>
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