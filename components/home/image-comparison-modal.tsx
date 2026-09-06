'use client'

import { useState } from 'react'

interface ImageComparisonModalProps {
    beforeImg: string
    afterImg: string
    altText?: string
    title?: string
}

export default function ImageComparisonModal({
    beforeImg,
    afterImg,
    altText = 'Design Comparison',
    title,
}: ImageComparisonModalProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [viewState, setViewState] = useState<'before' | 'after'>('after')

    return (
        <>
            <div className="w-full my-6 flex flex-col gap-3">
                {title && <h3 className="text-lg font-medium">{title}</h3>}
                <button
                    onClick={() => {
                        setViewState('after')
                        setIsOpen(true)
                    }}
                    className="w-full text-left cursor-pointer overflow-hidden rounded-xl border border-border bg-transparent group focus:outline-none"
                >
                    <div className="relative w-full h-[350px] md:h-[500px] overflow-hidden rounded-xl bg-neutral-900/50 flex items-center justify-center">
                        <img
                            src={afterImg}
                            alt={altText}
                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                        />
                        <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-md text-xs text-white border border-white/10">
                            Click to compare before and after
                        </div>
                    </div>
                </button>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-10"
                    onClick={() => setIsOpen(false)}
                >
                    <button
                        className="absolute top-6 right-6 z-50 min-w-[44px] min-h-[44px] w-12 h-12 flex items-center justify-center text-white bg-neutral-800/80 hover:bg-neutral-700 rounded-full transition-colors border border-white/10"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close modal"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div
                        className="relative flex flex-col items-center justify-center max-w-[92vw] w-full h-[92vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-center w-full h-[calc(100%-70px)] gap-4 md:gap-8">
                            <button
                                onClick={() => setViewState(viewState === 'before' ? 'after' : 'before')}
                                className="shrink-0 min-w-[44px] min-h-[44px] w-12 h-12 flex items-center justify-center rounded-full bg-neutral-900/80 text-white hover:bg-neutral-800 transition-colors border border-white/10"
                                aria-label="Previous image"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <div className="relative overflow-hidden rounded-xl w-full h-full flex items-center justify-center bg-black">
                                <img
                                    src={viewState === 'before' ? beforeImg : afterImg}
                                    alt={`${altText} - ${viewState}`}
                                    className="w-full h-full object-contain rounded-xl select-none"
                                />
                            </div>

                            <button
                                onClick={() => setViewState(viewState === 'before' ? 'after' : 'before')}
                                className="shrink-0 min-w-[44px] min-h-[44px] w-12 h-12 flex items-center justify-center rounded-full bg-neutral-900/80 text-white hover:bg-neutral-800 transition-colors border border-white/10"
                                aria-label="Next image"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex items-center gap-2 mt-4 bg-neutral-900/80 p-1.5 rounded-full border border-neutral-800 backdrop-blur-md shrink-0">
                            <button
                                onClick={() => setViewState('before')}
                                className={`min-w-[44px] min-h-[44px] px-5 py-2 rounded-full text-xs font-medium transition-colors ${viewState === 'before'
                                        ? 'bg-white text-black'
                                        : 'text-neutral-400 hover:text-white'
                                    }`}
                            >
                                Before
                            </button>
                            <button
                                onClick={() => setViewState('after')}
                                className={`min-w-[44px] min-h-[44px] px-5 py-2 rounded-full text-xs font-medium transition-colors ${viewState === 'after'
                                        ? 'bg-white text-black'
                                        : 'text-neutral-400 hover:text-white'
                                    }`}
                            >
                                After
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}