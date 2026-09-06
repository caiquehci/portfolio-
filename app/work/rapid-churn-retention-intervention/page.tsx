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
                <h2 className="text-xl font-medium">Context and executive summary</h2>
                <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                    <p>
                        With only four months left in the fiscal year and annual performance stuck at 60% right at the start of the &quot;alta&quot; (historically the peak conversion window for selling educational scholarships) our sales numbers stalled completely, barely ticking up to 61% after weeks of stagnation. While our upfront one-time enrollment purchases initially masked the issue, long-term product engagement and user lifetime value (LTV) were collapsing.
                    </p>
                    <p>
                        The root cause was structural. Following federal guidelines established via Decreto nº 12.456/2025 and Portaria MEC nº 378/2025, higher education institutions could no longer offer 100% remote courses without meeting strict physical presence requirements. As QE (Qeevo Group) (the single largest educational e-commerce infrastructure provider in Brazil) our core platform allowed us to sell scholarships nationwide. However, after the regulation dropped, partner institutions could no longer enroll students who lacked a physical on-site campus (as we called polo presencial) in their local cities. Students simply refused to commit to institutions whose mandatory on-site schedules no longer fit their lives.
                    </p>
                    <p>
                        While my team struggled with internal ambiguity and friction, I felt like I had to step in. I know, this may be a long read for what it can deliver, but the ending? Hmm, chef’s kiss. I promise. My primary designing and e-commerce deliverables were already complete. Ditto was working as intended, starting to be used by other sectors of the company. Recognizing that our entire business model was freezing up during our most critical season, I architected, proposed, and secured approval for a rapid-response product discovery framework to diagnose why students were walking away after enrollment.
                    </p>
                </div>
            </section>

            <section className="flex flex-col gap-10">
                <h2 className="text-xl font-medium">Initiatives</h2>

                <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8">
                    <h3 className="text-lg font-medium">1. Product problem statement</h3>
                    <p className="leading-relaxed text-muted-foreground">
                        <strong>The regulatory product blockade:</strong> Federal policy shifts via Portaria MEC nº 378/2025 banned 100% remote delivery for high-demand tracks and mandated physical attendance thresholds. Because our partner institutions lacked physical presence (polos) across diverse local markets, prospective students could no longer fit the rigid geographic and time constraints into their schedules, halting product consumption entirely.
                    </p>
                    <p className="leading-relaxed text-muted-foreground">
                        <strong>The peak season stagnation:</strong> While top-of-funnel acquisition metrics should have spiked during the peak sales window, our annual targets sat frozen at 60% to 61%. Acquisition stalled because the underlying product-market value proposition broke mid-stream.
                    </p>
                    <p className="leading-relaxed text-muted-foreground">
                        <strong>My intervention (?):</strong> With leadership and internal teams missing clear behavioral telemetry, I try to go and do something. I stepped outside my completed delivery scope to build an empirical research model rather than relying on internal speculation. Was I trying to save the day? Probably. I knew that I could? Probably not. Was I going to wait and see? Sure not.
                    </p>
                </article>

                <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8">
                    <h3 className="text-lg font-medium">2. Methodology: Rapid mixed-methods discovery</h3>
                    <p className="leading-relaxed text-muted-foreground">
                        To diagnose why prospective and active users were abandoning the product after purchase, under severe time constraints, I deployed a pragmatic, rigorous mixed-methods framework:
                    </p>
                    <p className="leading-relaxed text-muted-foreground">
                        <strong>Qualitative discovery (Causal mapping):</strong>
                    </p>
                    <ul className="flex max-w-2xl list-disc flex-col gap-2 pl-5 text-muted-foreground">
                        <li className="leading-relaxed">
                            I conducted deep-dive interviews using behavioral frameworks to understand exact user decision-making boundaries regarding time and location.
                        </li>
                        <li className="leading-relaxed">
                            I leveraged high user motivation: users frustrated by the sudden structural mismatch readily engaged with me, yielding high-signal qualitative feedback.
                        </li>
                    </ul>
                    <p className="leading-relaxed text-muted-foreground">
                        <strong>Quantitative validation (n=200 baseline):</strong>
                    </p>
                    <ul className="flex max-w-2xl list-disc flex-col gap-2 pl-5 text-muted-foreground">
                        <li className="leading-relaxed">
                            I established a target sample size of n=200 respondents split evenly between active accounts and churned profiles to ensure directional statistical validity. You, dear reader, may ask &ldquo;but why 200?&rdquo; and I’ll let people much more experienced than me do the talking in that case.
                        </li>
                        <li className="leading-relaxed">
                            I applied recency weighting to dropout cohorts, prioritizing users from the 1-to-6-month window over older profiles to isolate immediate fallout from the regulatory shift.
                        </li>
                    </ul>
                    <p className="leading-relaxed text-muted-foreground">
                        <strong>Product actionability guardrails:</strong>
                    </p>
                    <p className="leading-relaxed text-muted-foreground">
                        To eliminate noise, I established strict criteria: a friction point was deemed actionable only if it appeared in 3 of my qualitative causal maps and landed in the upper quartile of the quantitative survey distribution.
                    </p>
                </article>

                <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8">
                    <h3 className="text-lg font-medium">3. Product storyline and executive architecture</h3>
                    <p className="leading-relaxed text-muted-foreground">
                        I structured the product narrative for leadership around a direct, high-impact 4-step framework:
                    </p>
                    <ul className="flex max-w-2xl list-disc flex-col gap-2 pl-5 text-muted-foreground">
                        <li className="leading-relaxed">
                            <strong>User segmentation:</strong> Cohort sizes, demographic distribution, and the precise split between active enrollees and churned users that I analyzed to isolate the behavior gap.
                        </li>
                        <li className="leading-relaxed">
                            <strong>Product retention drivers:</strong> Quantitative metrics paired with verbatim qualitative evidence mapping what core product mechanics kept users engaged past the critical 1-year mark.
                        </li>
                        <li className="leading-relaxed">
                            <strong>Product churn drivers:</strong> Isolation of the primary product leakage vectors occurring during the first year of usage, driven by physical attendance friction.
                        </li>
                        <li className="leading-relaxed">
                            <strong>Experience and recommendation impact:</strong> Comparative Net Promoter Score (NPS) analysis segmented by active versus churned user states to demonstrate user sentiment.
                        </li>
                    </ul>
                </article>

                <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8">
                    <h3 className="text-lg font-medium">4. Key takeaways</h3>
                    <p className="leading-relaxed text-muted-foreground">
                        <strong>Trying to solve problems, always:</strong> When my core deliverables were finished and internal teams were spinning their wheels against a 40% goal deficit during our peak sales season (alta), I couldn't just sit back. I stepped up to diagnose why our numbers were stuck at 61%.
                    </p>
                    <p className="leading-relaxed text-muted-foreground">
                        <strong>Facing hard truths over comfort:</strong> When federal regulations (Portaria MEC nº 378/2025 and Decreto nº 12.456/2025) broke our nationwide scholarship model because partner institutions lacked local physical campuses, I refused to let leadership drown in internal guesswork.
                    </p>
                    <p className="leading-relaxed text-muted-foreground">
                        <strong>Building rigor when things are falling apart:</strong> I engineered a pragmatic, mixed-methods research framework (n=200, recency-weighted dropouts, and strict validation rules) to force us to look at actual student behavior instead of panic. I mean, if you’re reading this until now, first congrats. Second: what do we expect? Magic? The only ones who actually KNOWS why our product is bad are our users. It’s a loop.
                    </p>
                </article>
            </section>

            <section className="flex max-w-2xl flex-col gap-4">
                <h2 className="text-xl font-medium">How things ended</h2>
                <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                    <p>
                        I built the blueprint, laid out the hard data, and invited leadership to confront the structural brick wall our business model had hit. But when a company would rather ignore the hard facts than face them, carrying the weight of a failing strategy has a price. Right as the research framework was approved and set into motion, my seat was cut, and I was let go. I know, such a bummer. I was REALLY excited to be able to talk to people, to help my people… No regrets, just the proof of what happens when you care enough about the work to tell the truth, even when it costs you your spot. Does it diminish my craft, my decision making? I guess not, but it is up to you, dear reader, to tell me (if you’re still reading). The important thing is to keep moving forward, no matter what.
                    </p>
                </div>
            </section>

            <section className="flex max-w-2xl flex-col gap-4">
                <h2 className="text-xl font-medium">Presentation invitation</h2>
                <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                    <p>
                        Want to see the actual slides I walked into my leadership's office with? Take a look at the exact presentation I used to pitch this diagnostic framework.
                    </p>
                </div>
            </section>

            <section className="flex flex-col gap-4 w-full mt-10">
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