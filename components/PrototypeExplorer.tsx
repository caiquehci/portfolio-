import { useState } from 'react';
import { Maximize2, X, Monitor } from 'lucide-react';

export default function PrototypeExplorer() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <section className="flex flex-col gap-4 w-full">
                <h2 className="text-xl font-medium"></h2>

                {/* Desktop View */}
                <div className="hidden md:block relative w-full h-[80vh] overflow-hidden rounded-xl bg-neutral-900/10">
                    <button
                        onClick={() => setIsExpanded(true)}
                        aria-label="Expand prototype"
                        className="absolute top-4 right-4 z-10 flex items-center justify-center w-[999px] max-w-[44px] h-[44px] rounded-full bg-white/80 hover:bg-white shadow-md backdrop-blur-sm transition-all border border-neutral-200/50 text-neutral-800"
                    >
                        <Maximize2 className="w-5 h-5" />
                    </button>

                    {/* iframe wrapper element */}
                    <iframe
                        src="https://thus-remix-91246525.figma.site"
                        title="Research Plan"
                        className="w-full h-full border-none"
                        allowFullScreen
                    />
                </div>

                {/* Mobile Fallback */}
                <div className="flex md:hidden flex-col items-center justify-center text-center p-8 w-full h-[60vh] rounded-xl bg-neutral-900/5 border border-neutral-200 text-neutral-600 gap-3">
                    <Monitor className="w-10 h-10 text-neutral-400" />
                    <p className="text-sm font-medium">
                        This prototype wasn't made to work on mobile. Please check it out on a desktop.
                    </p>
                </div>
            </section>

            {/* Expanded Fullscreen Overlay (Desktop Only) */}
            {isExpanded && (
                <div className="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-md hidden md:flex flex-col p-6 animate-in fade-in duration-200">
                    <div className="relative w-full h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-2xl">
                        <div className="flex items-center justify-between px-6 py-3 bg-neutral-100 border-b border-neutral-200">
                            <span className="text-sm font-medium text-neutral-700">Research Plan — Fullscreen Explorer</span>
                            <button
                                onClick={() => setIsExpanded(false)}
                                aria-label="Close fullscreen view"
                                className="flex items-center justify-center w-9 h-9 rounded-full bg-neutral-200/60 hover:bg-neutral-200 text-neutral-700 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* iframe wrapper element for fullscreen view */}
                        <iframe
                            src="https://thus-remix-91246525.figma.site"
                            title="Research Plan Fullscreen"
                            className="w-full h-full border-none"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </>
    );
}