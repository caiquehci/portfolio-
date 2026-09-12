'use client'

import { useState } from 'react'
import Link from 'next/link'
import { projects } from '@/lib/portfolio-data'
import ImageCarouselModal from '@/components/home/carousel-modal'
import ModelComparisonFlow from '@/components/ModelComparisonFlow';
import HeroTradeOffGrid from '@/components/HeroTradeOffGrid';
import MarketingAgilityFlow from '@/components/MarketingAgilityFlow'; 
import PrototypeExplorer from '@/components/PrototypeExplorer'; 
import CheckoutImpactCaseStudy from '@/components/CheckoutImpactCaseStudy';

export default function DittoPage() {
    const project = projects.find((p) => p.slug === 'ditto') // assuming 'ditto' is the project slug, or adjust as needed
    const [activeImage, setActiveImage] = useState<string | null>(null)

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
                    2025 – 2026 · EdTech / White-Label E-Commerce
                </p>
                <h1 className="max-w-3xl text-3xl font-medium leading-tight tracking-tight md:text-4xl">
                    Ditto: Architecting a white-label e-commerce engine for Quero Educação
                </h1>
                <p className="text-sm text-muted-foreground">
                    Product Designer · Marcas - QE (Qeevo Group) · May 2025  - February 2026
                </p>
            </header>

            {/* Main cover image placeholder - update path when assets are ready */}
            <div className="w-full">
                <button
                    onClick={() => setActiveImage("/portfolio-images/ditto/cover.png")}
                    className="w-full text-left cursor-pointer overflow-hidden rounded-xl bg-transparent"
                >
                    <img
                        src="/portfolio-images/ditto/cover.png"
                        alt="Ditto Main Banner"
                        className="w-full h-auto object-contain"
                    />
                </button>
            </div>

            <section className="flex max-w-2xl flex-col gap-4 mt-16">
                <h2 className="text-xl font-medium">Overview</h2>
                <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                    <p>
                        Quero Bolsa functioned as an aggregative educational marketplace. Prospective students landed on the platform to compare hundreds of institutions across Brazil, evaluating prices, locations, and discount vouchers. But high-intent traffic kept slipping through the cracks. Users who wanted a specific institution often found the marketplace interface too noisy, abandoning the funnel before conversion.
                    </p>
                    <p>
                        Quero Educação needed to capture that segment without cannibalizing its flagship brand. The solution was <strong>Ditto</strong>: a multi-tenant, white-label e-commerce engine built to deploy individual, brand-agnostic storefronts for top-tier educational partners.
                    </p>
                    <p>
                        Operating as the sole Product Designer inside the <em>Marcas</em> business unit over a ten-month development cycle, I owned the end-to-end interface architecture across mobile and web: spanning discovery homepages, Product Listing Pages (PLP), Product Detail Pages (PDP), checkouts, and admissions flows.
                    </p>
                </div>
            </section>

            <section className="flex flex-col gap-10 mt-16">
                <h2 className="text-xl font-medium">Initiatives</h2>

                <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8">
                    <h3 className="text-lg font-medium">The operational reality and the Zilla constraint</h3>
                    <p className="leading-relaxed text-muted-foreground">
                        Building a white-label product usually starts with a flexible design system. We had the opposite.
                    </p>
                    <p className="leading-relaxed text-muted-foreground">
                        Our core design system, <em>Zilla</em>, was rigidly hardcoded for Quero Bolsa. It lacked theme support, tokenization, or multi-brand flexibility. Essential components: such as a product card that existed only as unopinionated atomic primitives: an empty white vector box devoid of hierarchy, typography tokens, or layout boundaries. Compounding this, the wider organization was deeply change-averse, treating any attempt to adapt Zilla for Marcas as unnecessary friction.
                    </p>

                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                        <div className="w-full">
                            <button
                                onClick={() => setActiveImage("/portfolio-images/ditto/zilla card.png")}
                                className="w-full text-left cursor-pointer overflow-hidden rounded-xl border border-border bg-transparent"
                            >
                                <img
                                    src="/portfolio-images/ditto/zilla card.png"
                                    alt="Default card component for zilla: a vector white square, with color and round tokens. Nothing else."
                                    className="w-full h-auto object-contain"
                                />
                            </button>
                        </div>

                        <div className="w-full">
                            <button
                                onClick={() => setActiveImage("/portfolio-images/ditto/ditto card.png")}
                                className="w-full text-left cursor-pointer overflow-hidden rounded-xl border border-border bg-transparent"
                            >
                                <img
                                    src="/portfolio-images/ditto/ditto card.png"
                                    alt="Ditto's card component: seeding from Zilla, but now embracing other card qualifying structures. All of them tokenized and according to Zillas naming conventions."
                                    className="w-full h-auto object-contain"
                                />
                            </button>
                        </div>
                    </div> */}

                    <div className="w-full">
                        <button
                            onClick={() => setActiveImage("/portfolio-images/ditto/zilla card.png")}
                            className="w-full text-left cursor-pointer overflow-hidden rounded-xl border border-border bg-transparent"
                        >
                            <img
                                src="/portfolio-images/ditto/zilla card.png"
                                alt="Default card component for zilla: a vector white square, with color and round tokens. Nothing else."
                                className="w-full h-auto object-contain"
                            />
                        </button>
                        <p className="mt-2 text-sm text-muted-foreground text-center">
                            Default card component for zilla: a vector white square, with color and round tokens. Nothing else.
                        </p>
                    </div>

                    <p className="leading-relaxed text-muted-foreground mt-10">
                        Rather than attempting to rewrite a legacy design system, I approached Zilla modularly. I took its isolated atomic elements (padding tokens, typography blocks, and structural containers) and composed them in Figma into scalable component libraries. By aligning our Figma component nomenclature directly with frontend code standards, I bridged the gap between legacy constraints and multi-brand requirements.
                    </p>

                    <div className="w-full">
                        <button
                            onClick={() => setActiveImage("/portfolio-images/ditto/ditto card.png")}
                            className="w-full text-left cursor-pointer overflow-hidden rounded-xl border border-border bg-transparent"
                        >
                            <img
                                src="/portfolio-images/ditto/ditto card.png"
                                alt="Ditto's card component: seeding from Zilla, but now embracing other card qualifying structures. All of them tokenized and according to Zillas naming conventions."
                                className="w-full h-auto object-contain"
                            />
                        </button>
                        <p className="mt-2 text-sm text-muted-foreground text-center">
                            Ditto's card component: seeding from Zilla, but now embracing other card qualifying structures. All of them tokenized and according to Zillas naming conventions.
                        </p>
                    </div>

                    <p className="leading-relaxed text-muted-foreground mt-10">
                        This laid the groundwork for engineering collaboration. Once we established a shared mental model, we decoupled visual branding from code deployment. By integrating Tailwind parameters into <strong>Jiractus</strong> (our internal operations and management interface) the product and marketing teams gained the ability to dynamically configure primary and secondary colors, spin up new partner skins, and execute rapid campaign modifications without waiting for engineering sprint cycles.
                    </p>
                </article>

                <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8 mt-16">
                    <h3 className="text-lg font-medium">Shifting the mental model: Marketplace vs. Monobrand</h3>
                    <p className="leading-relaxed text-muted-foreground">
                        The architectural challenge went deeper than visual styling. Quero Bolsa operated on an affiliate voucher model: the user purchased a discount coupon from Quero Educação to redeem at an institution. The transaction was a middleman service.
                    </p>
                </article>

                <ModelComparisonFlow />
                
                <article className="flex max-w-2xl flex-col gap-4 pt-8">
                    <p className="leading-relaxed text-muted-foreground">
                        Under Ditto, legal agreements permitted us to present directly as the institution. The transaction shifted to a direct enrollment model. The user was no longer buying a digital discount; they were executing an educational contract.
                    </p>
                    <p className="leading-relaxed text-muted-foreground">
                        This semantic shift broke the legacy checkout flow. Copy and transactional terminology had to change from "purchase the discount" to "enroll now." Across a multi-step checkout, that alteration triggered intense internal debates regarding legal compliance, contract realities, and user expectations. Aligning stakeholders required proving that our interface could legally and visually impersonate the partner institution without exposing the underlying Quero Educação infrastructure.
                    </p>
                </article>

                <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8 mt-16">
                    <h3 className="text-lg font-medium">The hero section trade-off</h3>
                    <p className="leading-relaxed text-muted-foreground">
                        For the primary discovery hero section, I initially designed an immersive, highly automated interface featuring multi-step search interactions, intelligent draft-saving states, and deep database scraping.
                    </p>
                    <p className="leading-relaxed text-muted-foreground">
                        <strong>The constraints:</strong> Zilla’s technical limitations, early-stage frontend friction, and an aggressive MVP delivery window.
                    </p>
                    <p className="leading-relaxed text-muted-foreground">
                        <strong>The trade-off:</strong> Building the immersive search mechanism required heavy custom code that would have heavily bloated sprint points. While it delivered high visual fidelity, it carried no guaranteed conversion lift for an MVP where users simply needed to find a specific course within a single institution.
                    </p>
                    <p className="leading-relaxed text-muted-foreground">
                        I stepped back, discarded the multi-step draft-saving architecture, and reduced the hero section to a streamlined, high-efficiency search mechanism. This preserved our development velocity and delivery window while keeping user discovery clean and immediate.
                    </p>

                    <HeroTradeOffGrid />

                </article>

                <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8 mt-16">
                    <h3 className="text-lg font-medium">Unlocking marketing agility</h3>
                    <p className="leading-relaxed text-muted-foreground">
                        As Ditto grew, rigid content hierarchies on the Product Detail Pages began restricting marketing experimentation. Marketing wanted to test whether highlighting course grading data versus qualitative curriculum highlights drove better conversion, but changing orderings required engineering deployment.
                    </p>
                    <p className="leading-relaxed text-muted-foreground">
                        To solve this without sacrificing system stability, I designed an internal capability within Jiractus featuring a draggable interface. This allowed the marketing team to dynamically reorder content blocks for any institution or course combination in seconds, bypassing static code restrictions entirely. Marketing could run iterations and campaigns based on real-time data without touching a Figma file or opening a pull request.
                    </p>
                </article>

                <MarketingAgilityFlow />

                <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8 mt-36">
                    <h3 className="text-lg font-medium">Re-engineering the checkout and admissions pipeline</h3>
                    <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                        Resolving data redundancy, optimizing form completion, transitioning to an owned payment architecture, and scaling cleanly across multiple brands.
                    </p>
                </article>

                <CheckoutImpactCaseStudy />
                {/* <PrototypeExplorer /> */}

                {/* <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8 mt-16">
                    <h3 className="text-lg font-medium">Scaling past the initial horizon</h3>
                    <p className="leading-relaxed text-muted-foreground">
                        Without a scalable architectural foundation, expanding beyond the initial pilot group of 4 institutions would have overwhelmed the operating model. The alternative playbook within the organization relied on manual brute-force: deploying fragmented, low-quality copycat sites or scaling low-cost labor through an army of interns hand-crafting pages for every new brand.
                    </p>
                    <p className="leading-relaxed text-muted-foreground">
                        Instead, the architecture absorbed growth cleanly:
                    </p>
                    <ul className="flex max-w-2xl list-disc flex-col gap-2 pl-5 text-muted-foreground">
                        <li className="leading-relaxed">
                            <strong>Horizontal scalability:</strong> When internal business units such as <em>Branded</em> adopted Ditto to onboard 21 distinct partner institutions, the infrastructure handled the expansion without requiring parallel engineering teams or custom code rewrites for every new brand.
                        </li>
                        <li className="leading-relaxed">
                            <strong>Preserving brand integrity:</strong> Centralizing brand parameters and modular components prevented the web from flooding with disparate, unmaintainable clones of Quero Bolsa, protecting user trust across the corporate ecosystem.
                        </li>
                        <li className="leading-relaxed">
                            <strong>Protecting delivery timelines:</strong> For enterprise partners accustomed to high-touch executive visibility, the system ensured that subsequent institutional launches met tight MVP deadlines, insulating the product line from operational chaos.
                        </li>
                    </ul>
                </article> */}
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
                        .filter((p) => !p.hidden && p.slug !== 'ditto')
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