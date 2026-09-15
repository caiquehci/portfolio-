'use client'

import { useState } from 'react'
import Link from 'next/link'
import { projects } from '@/lib/portfolio-data'
import { useTranslations } from '@/lib/i18n/provider'

export default function EngineeringEnablementPage() {
    const project = projects.find((p) => p.slug === 'engineering-enablement')
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
                <h2 className="text-xl font-medium">{t.caseCommon.roleAndScope}</h2>
                <ul className="flex max-w-2xl list-disc flex-col gap-2 pl-5 text-muted-foreground">
                    <li className="leading-relaxed">{t.cases.engineeringEnablement.scope1}</li>
                    <li className="leading-relaxed">{t.cases.engineeringEnablement.scope2}</li>
                    <li className="leading-relaxed">{t.cases.engineeringEnablement.scope3}</li>
                </ul>
            </section>

            <section className="flex max-w-2xl flex-col gap-4 mt-16">
                <h2 className="text-xl font-medium">{t.caseCommon.executiveSummary}</h2>
                <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                    <p>{t.cases.engineeringEnablement.summary1}</p>
                    <p>{t.cases.engineeringEnablement.summary2}<strong className="text-foreground">80% of our time</strong> to new features.
                    </p>
                </div>
            </section>

            <section className="flex flex-col gap-10 mt-16">
                <h2 className="text-xl font-medium">{t.caseCommon.initiatives}</h2>

                <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8">
                    <h3 className="text-lg font-medium">{t.cases.engineeringEnablement.challengeTitle}</h3>
                    <ul className="flex flex-col gap-3 list-disc pl-5 text-muted-foreground">
                        <li className="leading-relaxed">
                            <strong className="text-foreground">{t.cases.engineeringEnablement.challengeLabel1}</strong>{t.cases.engineeringEnablement.challengeText1}</li>
                        <li className="leading-relaxed">
                            <strong className="text-foreground">{t.cases.engineeringEnablement.challengeLabel2}</strong>{t.cases.engineeringEnablement.challengeText2}</li>
                        <li className="leading-relaxed">
                            <strong className="text-foreground">{t.cases.engineeringEnablement.challengeLabel3}</strong>{t.cases.engineeringEnablement.challengeText3}</li>
                    </ul>
                </article>

                <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8 mt-16">
                    <h3 className="text-lg font-medium">{t.cases.engineeringEnablement.solutionTitle}</h3>
                    <p className="leading-relaxed text-muted-foreground">{t.cases.engineeringEnablement.solutionText}</p>
                </article>

                <div className="w-full h-[600px] border border-border rounded-xl overflow-hidden bg-background shadow-sm mt-2">
                    <iframe
                        src="/specs/tabela-processos.html"
                        title="Tabela de Processos Specification"
                        className="w-full h-full border-0 block"
                    />
                </div>

                <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8 mt-16">
                    <h3 className="text-lg font-medium">{t.cases.engineeringEnablement.whyTitle}</h3>
                    <ul className="flex flex-col gap-3 list-disc pl-5 text-muted-foreground">
                        <li className="leading-relaxed">
                            <strong className="text-foreground">{t.cases.engineeringEnablement.whyLabel1}</strong>{t.cases.engineeringEnablement.whyText1}</li>
                        <li className="leading-relaxed">
                            <strong className="text-foreground">{t.cases.engineeringEnablement.whyLabel2}</strong>{t.cases.engineeringEnablement.whyText2}</li>
                        <li className="leading-relaxed">
                            <strong className="text-foreground">{t.cases.engineeringEnablement.whyLabel3}</strong>{t.cases.engineeringEnablement.whyText3}</li>
                    </ul>
                </article>

                <article className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8 mt-16">
                    <h3 className="text-lg font-medium">{t.cases.engineeringEnablement.takeawaysTitle}</h3>
                    <p className="leading-relaxed text-muted-foreground">{t.cases.engineeringEnablement.takeaways1}</p>
                    <p className="leading-relaxed text-muted-foreground">{t.cases.engineeringEnablement.takeaways2}</p>
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