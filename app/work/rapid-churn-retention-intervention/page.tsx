'use client'

import { useState } from 'react'
import Link from 'next/link'
import { projects } from '@/lib/portfolio-data'
import ImageComparisonModal from '@/components/home/image-comparison-modal'
import ImageCarouselModal from '@/components/home/carousel-modal'
import { useTranslations } from '@/lib/i18n/provider'

export default function RapidChurnPage() {
    const project = projects.find((p) => p.slug === 'rapid-churn-retention-intervention')
    const [activeImage, setActiveImage] = useState<string | null>(null)
    const t = useTranslations()

    if (!project) return null

    return (
        <main className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-16 md:py-24">
            <button
                onClick={() => window.history.back()}
                className="text-sm text-muted-foreground underline underline-offset-4 cursor-pointer bg-transparent border-none p-0 text-left"
            >{t.caseCommon.back}</button>

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
                <h2 className="text-xl font-medium">{t.caseCommon.roleAndScope}</h2>
                <ul className="flex max-w-2xl list-disc flex-col gap-2 pl-5 text-muted-foreground">
                    <li className="leading-relaxed">{t.cases.rapidChurn.scope1}</li>
                    <li className="leading-relaxed">{t.cases.rapidChurn.scope2}</li>
                    <li className="leading-relaxed">{t.cases.rapidChurn.scope3}</li>
                </ul>
            </section>

            <section className="flex max-w-2xl flex-col gap-4 mt-16">
                <h2 className="text-xl font-medium">{t.caseCommon.contextAndExecutiveSummary}</h2>
                <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                    <p>{t.cases.rapidChurn.context1}</p>
                    <p>{t.cases.rapidChurn.context2}</p>
                    <p>{t.cases.rapidChurn.context3}</p>
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
                <h2 className="text-xl font-medium">{t.caseCommon.initiatives}</h2>

                <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8">
                    <h3 className="text-lg font-medium">{t.cases.rapidChurn.init1Title}</h3>
                    <p className="leading-relaxed text-muted-foreground">
                        <strong>{t.cases.rapidChurn.init1Label1}</strong>{t.cases.rapidChurn.init1Text1}</p>
                    <p className="leading-relaxed text-muted-foreground">
                        <strong>{t.cases.rapidChurn.init1Label2}</strong>{t.cases.rapidChurn.init1Text2}</p>
                    <p className="leading-relaxed text-muted-foreground">
                        <strong>{t.cases.rapidChurn.init1Label3}</strong>{t.cases.rapidChurn.init1Text3}</p>
                </article>

                <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8">
                    <h3 className="text-lg font-medium">{t.cases.rapidChurn.init2Title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{t.cases.rapidChurn.init2Intro}</p>
                    <p className="leading-relaxed text-muted-foreground">
                        <strong>{t.cases.rapidChurn.init2QualLabel}</strong>
                    </p>
                    <ul className="flex max-w-2xl list-disc flex-col gap-2 pl-5 text-muted-foreground">
                        <li className="leading-relaxed">{t.cases.rapidChurn.init2Qual1}</li>
                        <li className="leading-relaxed">{t.cases.rapidChurn.init2Qual2}</li>
                    </ul>
                    <p className="leading-relaxed text-muted-foreground">
                        <strong>{t.cases.rapidChurn.init2QuantLabel}</strong>
                    </p>
                    <ul className="flex max-w-2xl list-disc flex-col gap-2 pl-5 text-muted-foreground">
                        <li className="leading-relaxed">{t.cases.rapidChurn.init2Quant1}</li>
                        <li className="leading-relaxed">{t.cases.rapidChurn.init2Quant2}</li>
                        <li className="leading-relaxed">{t.cases.rapidChurn.init2Quant3}</li>
                    </ul>
                    <p className="leading-relaxed text-muted-foreground">
                        <strong>{t.cases.rapidChurn.init2GuardrailsLabel}</strong>
                    </p>
                    <p className="leading-relaxed text-muted-foreground">{t.cases.rapidChurn.init2GuardrailsText}</p>
                </article>

                <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8">
                    <h3 className="text-lg font-medium">{t.cases.rapidChurn.init3Title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{t.cases.rapidChurn.init3Intro}</p>
                    <ul className="flex max-w-2xl list-disc flex-col gap-2 pl-5 text-muted-foreground">
                        <li className="leading-relaxed">
                            <strong>{t.cases.rapidChurn.init3Label1}</strong>{t.cases.rapidChurn.init3Text1}</li>
                        <li className="leading-relaxed">
                            <strong>{t.cases.rapidChurn.init3Label2}</strong>{t.cases.rapidChurn.init3Text2}</li>
                        <li className="leading-relaxed">
                            <strong>{t.cases.rapidChurn.init3Label3}</strong>{t.cases.rapidChurn.init3Text3}</li>
                        <li className="leading-relaxed">
                            <strong>{t.cases.rapidChurn.init3Label4}</strong>{t.cases.rapidChurn.init3Text4}</li>
                    </ul>
                </article>

                <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8  mt-16">
                    <h3 className="text-lg font-medium">{t.cases.rapidChurn.insightsTitle}</h3>
                    <p className="leading-relaxed text-muted-foreground">
                        <strong>{t.cases.rapidChurn.insightsLabel1}</strong>{t.cases.rapidChurn.insightsText1}</p>
                    <p className="leading-relaxed text-muted-foreground">
                        <strong>{t.cases.rapidChurn.insightsLabel2}</strong>{t.cases.rapidChurn.insightsText2}</p>
                    <p className="leading-relaxed text-muted-foreground">
                        <strong>{t.cases.rapidChurn.insightsLabel3}</strong>{t.cases.rapidChurn.insightsText3}</p>
                </article>
            </section>

            <section className="flex max-w-2xl flex-col gap-4 mt-16">
                <h2 className="text-xl font-medium">{t.cases.rapidChurn.outcomeTitle}</h2>
                <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                    <p>{t.cases.rapidChurn.outcome1}</p>
                    <p>{t.cases.rapidChurn.outcome2}</p>
                    <p>{t.cases.rapidChurn.outcome3}</p>
                </div>
            </section>

            <section className="flex max-w-2xl flex-col gap-4 mt-16">
                <h2 className="text-xl font-medium">{t.cases.rapidChurn.presentationTitle}</h2>
                <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                    <p>{t.cases.rapidChurn.presentationText}</p>
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
                    >{t.caseCommon.close}</button>
                </div>
            )}

            <section className="flex flex-col gap-6 border-t border-border pt-16 mt-40">
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-medium tracking-tight">{t.caseCommon.exploreOtherCases}</h2>
                    <p className="text-base text-muted-foreground">{t.caseCommon.exploreOtherCasesSubtitle}</p>
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