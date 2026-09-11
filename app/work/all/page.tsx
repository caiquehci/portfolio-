'use client'

import { projects } from "@/lib/portfolio-data";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function AllWorkPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProjects = projects.filter((project) => {
        const query = searchQuery.toLowerCase();
        const matchName = project.name.toLowerCase().includes(query);
        const matchDomain = project.domain.toLowerCase().includes(query);
        const matchSummary = project.summary.toLowerCase().includes(query);
        const matchTags = project.tags.some((tag) => tag.toLowerCase().includes(query));

        return matchName || matchDomain || matchSummary || matchTags;
    });

    return (
        <main className="max-w-5xl mx-auto px-6 py-24">
            <h1 className="text-4xl font-bold tracking-tight mb-4">All Projects</h1>
            <p className="text-zinc-400">A complete collection of my projects within product design and engineering, for your appreciation.</p>

            {/* Search Bar Section with Segmenting Dividers */}
            <div className="border-t border-zinc-800/60 my-8 pt-8">
                <div className="relative w-full md:max-w-md">
                    <input
                        type="text"
                        placeholder="Search by keyword, e.g., 'design system', 'saas', 'A/B test'..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-3 pr-11 rounded-xl bg-zinc-900/60 border border-zinc-800 text-zinc-200 placeholder:text-zinc-500 shadow-[0_0_15px_rgba(255,255,255,0.03)] focus:outline-none focus:border-zinc-200 transition-all duration-300 text-sm"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="border-b border-zinc-800/60 mb-12" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))
                ) : (
                    <div className="col-span-full py-12 text-center text-zinc-500">
                        No projects found matching &ldquo;{searchQuery}&rdquo;.
                    </div>
                )}
            </div>
        </main>
    );
}

function ProjectCard({ project }: { project: any }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const measurerRef = useRef<HTMLDivElement>(null);
    const [visibleCount, setVisibleCount] = useState(project.tags.length);

    useEffect(() => {
        function calculateVisibleTags() {
            if (!containerRef.current || !measurerRef.current) return;

            const containerWidth = containerRef.current.offsetWidth;
            const tagElements = Array.from(measurerRef.current.children) as HTMLElement[];

            let totalWidth = 0;
            let count = 0;
            const gap = 8;

            for (let i = 0; i < tagElements.length; i++) {
                const tagWidth = tagElements[i].offsetWidth + gap;
                if (totalWidth + tagWidth <= containerWidth) {
                    totalWidth += tagWidth;
                    count++;
                } else {
                    break;
                }
            }

            setVisibleCount(count > 0 ? count : (project.tags.length > 0 ? 1 : 0));
        }

        calculateVisibleTags();
        window.addEventListener('resize', calculateVisibleTags);
        return () => window.removeEventListener('resize', calculateVisibleTags);
    }, [project.tags]);

    return (
        <Link
            href={`/work/${project.slug}`}
            className="group relative flex flex-col justify-between border border-zinc-800/80 rounded-2xl p-8 overflow-hidden transition-all duration-500 ease-in-out bg-zinc-950"
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
                            {project.index} · {project.domain}
                        </span>
                        <h2 className="text-2xl font-semibold text-zinc-100 group-hover:text-white transition-colors duration-300">
                            {project.name}
                        </h2>
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

            <div className="relative z-10 space-y-6 mt-8">
                <div ref={measurerRef} className="absolute invisible pointer-events-none flex gap-2 h-0 overflow-hidden">
                    {project.tags.map((tag: string) => (
                        <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md border">
                            {tag}
                        </span>
                    ))}
                </div>

                <div ref={containerRef} className="flex items-center gap-2 h-7 overflow-hidden">
                    {project.tags.slice(0, visibleCount).map((tag: string) => (
                        <span
                            key={tag}
                            className="text-xs font-medium px-2.5 py-1 rounded-md bg-zinc-900/80 text-zinc-300 border border-zinc-700/40 shrink-0 whitespace-nowrap backdrop-blur-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex justify-end pt-2">
                    <span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300 flex items-center gap-1">
                        See this project →
                    </span>
                </div>
            </div>
        </Link>
    );
}