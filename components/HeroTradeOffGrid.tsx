'use client'

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroTradeOffGrid() {
    const [selectedVersion, setSelectedVersion] = useState<'chosen' | 'discarded'>('chosen');
    const [modalImageOpen, setModalImageOpen] = useState(false);

    const chosenImage = '/portfolio-images/ditto/Slice2.png';
    const discardedImage = '/portfolio-images/ditto/Slice1.png';

    const currentImage = selectedVersion === 'chosen' ? chosenImage : discardedImage;

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!modalImageOpen) return;
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                setSelectedVersion((prev) => (prev === 'chosen' ? 'discarded' : 'chosen'));
            } else if (e.key === 'Escape') {
                setModalImageOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [modalImageOpen]);

    return (
        <div className="my-6 flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-3 bg-card rounded-xl border border-border shadow-sm divide-y md:divide-y-0 md:divide-x divide-border overflow-hidden">
                <div className="flex flex-col p-6 bg-card">
                    <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2">
                        Dilemma
                    </span>
                    <h4 className="text-base font-medium text-foreground mb-3">
                        Real MVP needs vs. time to do so
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        I had initially designed a search experience with additional interactions and deeper data integration. It became clear that this approach would require custom frontend work.
                    </p>
                </div>

                <div className="flex flex-col p-6 bg-card">
                    <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2">
                        Pivot
                    </span>
                    <h4 className="text-base font-medium text-foreground mb-3">
                        Reducing scope and complexity 
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Additional interactions were removed from the first release because they depend on engineering work that wasn't necessary to validate the core experience.
                    </p>
                </div>

                <div className="flex flex-col p-6 bg-card">
                    <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2">
                        Impact
                    </span>
                    <h4 className="text-base font-medium text-foreground mb-3">
                        Preserving the core discovery
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        The final MVP shipped with the essential search experience rather than carrying the additional frontend work into the first release.
                    </p>
                </div>
            </div>

            <div className="flex flex-col p-5 bg-card rounded-xl border border-border gap-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <span className="text-sm font-medium text-foreground">
                        Explore implementation variants:
                    </span>
                    <div className="flex items-center p-1 bg-background rounded-lg border border-border">
                        <button
                            onClick={() => setSelectedVersion('chosen')}
                            className={`px-4 py-1.5 text-xs font-medium rounded-md transition-colors ${selectedVersion === 'chosen'
                                    ? 'bg-muted text-foreground border border-border'
                                    : 'text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            Chosen version
                        </button>
                        <button
                            onClick={() => setSelectedVersion('discarded')}
                            className={`px-4 py-1.5 text-xs font-medium rounded-md transition-colors ${selectedVersion === 'discarded'
                                    ? 'bg-muted text-foreground border border-border'
                                    : 'text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            Discarded version
                        </button>
                    </div>
                </div>

                <div
                    onClick={() => setModalImageOpen(true)}
                    className="relative group cursor-pointer overflow-hidden rounded-lg border border-border bg-background/50 aspect-video flex items-center justify-center"
                >
                    <img
                        key={selectedVersion}
                        src={currentImage}
                        alt={selectedVersion === 'chosen' ? 'Chosen hero version' : 'Discarded hero version'}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-[1.02]"
                        onError={(e) => {
                            console.error(`Error loading image from path: ${e.currentTarget.src}`);
                        }}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-xs font-medium text-white bg-black/60 px-3 py-1.5 rounded-full border border-white/10">
                            Click to expand
                        </span>
                    </div>
                </div>
            </div>

            {modalImageOpen && (
                <div
                    onClick={() => setModalImageOpen(false)}
                    className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-w-5xl w-full max-h-[90vh] bg-card rounded-2xl border border-border overflow-hidden p-4 flex flex-col shadow-2xl items-center"
                    >
                        <div className="w-full flex items-center justify-between pb-3 mb-2 border-b border-border">
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                Viewing: <span className="text-foreground">{selectedVersion === 'chosen' ? 'Chosen version' : 'Discarded version'}</span>
                            </span>
                            <button
                                onClick={() => setModalImageOpen(false)}
                                className="bg-background/80 hover:bg-background text-foreground text-xs font-bold px-3 py-1.5 rounded-full border border-border transition-colors cursor-pointer"
                            >
                                Close ✕
                            </button>
                        </div>

                        <div className="relative w-full flex items-center justify-center overflow-auto py-2">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedVersion((prev) => (prev === 'chosen' ? 'discarded' : 'chosen'));
                                }}
                                className="absolute left-2 z-20 bg-background/80 hover:bg-background text-foreground p-2.5 rounded-full border border-border shadow-lg transition-transform hover:scale-110 cursor-pointer"
                                aria-label="Previous version"
                            >
                                <ChevronLeft size={20} />
                            </button>

                            <img
                                key={`modal-${selectedVersion}`}
                                src={currentImage}
                                alt="Enlarged variant preview"
                                className="max-w-full max-h-[72vh] object-contain rounded-lg shadow-md transition-all duration-200"
                            />

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedVersion((prev) => (prev === 'chosen' ? 'discarded' : 'chosen'));
                                }}
                                className="absolute right-2 z-20 bg-background/80 hover:bg-background text-foreground p-2.5 rounded-full border border-border shadow-lg transition-transform hover:scale-110 cursor-pointer"
                                aria-label="Next version"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}