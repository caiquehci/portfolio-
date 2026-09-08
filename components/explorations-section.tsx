import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/lib/portfolio-data'

export function ExplorationsSection() {
    const items = projects.filter((p) => !p.featured)

    if (items.length === 0) return null

    return (
        <section className="border-b border-border">
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-16 md:py-24">
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-medium tracking-tight">See also</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {items.map((project) => (
                        <Link
                            key={project.slug}
                            href={`/work/${project.slug}`}
                            className="group relative flex flex-col justify-between rounded-2xl p-8 overflow-hidden transition-all duration-500 ease-in-out bg-zinc-950 border border-zinc-800/75 shadow-xl shadow-black/30"
                        >
                            {/* Blurred background banner image with dark overlay */}
                            {project.cover && (
                                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                                    <Image
                                        src={project.cover}
                                        alt=""
                                        fill
                                        className="object-cover filter blur-2xl scale-125"
                                    />
                                    <div className="absolute inset-0 bg-zinc-950/80" />
                                </div>
                            )}

                            {/* Content wrapper to stay above the background */}
                            <div className="relative z-10 space-y-6">
                                <div className="flex items-start justify-between gap-6">
                                    <div className="space-y-2">
                                        <span className="text-xs font-mono text-zinc-400 block">
                                            {project.domain}
                                        </span>
                                        <h3 className="text-2xl font-semibold text-zinc-100 group-hover:text-white transition-colors duration-300">
                                            {project.name}
                                        </h3>
                                    </div>

                                    {project.cover && (
                                        <div className="relative w-16 h-12 rounded-lg overflow-hidden border border-zinc-700/50 shrink-0 bg-zinc-900 shadow-md">
                                            <Image
                                                src={project.cover}
                                                alt={project.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="relative z-10 flex justify-end pt-8">
                                <span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300 flex items-center gap-1">
                                    See this project →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}