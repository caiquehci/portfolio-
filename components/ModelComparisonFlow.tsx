// components/ModelComparisonFlow.tsx
import React from 'react';

export default function ModelComparisonFlow() {
    return (
        <div className="flex flex-col gap-6 my-8 p-6 md:p-8 rounded-2xl border border-border bg-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                {/* Left Column: Quero Bolsa (Marketplace Model) */}
                <div className="flex flex-col items-center p-6 rounded-xl border border-blue-900/40 bg-blue-950/10">
                    <div className="text-center mb-6">
                        <h4 className="text-base font-semibold text-blue-400 tracking-wide">
                            Quero Bolsa
                        </h4>
                        <span className="text-xs text-blue-400/80">Aggregative marketplace model</span>
                    </div>

                    {/* Grouped Container housing the pipeline AND the final connected outcome block */}
                    <div className="w-full flex flex-col p-5 rounded-xl border border-border/60 bg-background/40 gap-4">
                        <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground text-center mb-1">
                            User's discovery and selection pipeline
                        </span>

                        <div className="w-full p-3 rounded-lg border border-border bg-background text-center text-sm font-medium">
                            Browse cross-institutional catalog
                            <span className="block text-xs font-normal text-muted-foreground mt-0.5">Courses gathered from hundreds of distinct colleges</span>
                        </div>
                        <div className="flex justify-center text-muted-foreground text-xs -my-1">↓</div>

                        <div className="w-full p-3 rounded-lg border border-border bg-background text-center text-sm font-medium">
                            Compare options across multiple institutions
                        </div>
                        <div className="flex justify-center text-muted-foreground text-xs -my-1">↓</div>

                        <div className="w-full p-3 rounded-lg border border-border bg-background text-center text-sm font-medium">
                            Purchase discount voucher
                        </div>

                        <div className="flex justify-center text-muted-foreground text-xs -my-1">↓</div>

                        {/* Connected final outcome block inside the group */}
                        <div className="w-full p-3 rounded-lg border border-blue-900/50 bg-blue-950/30 text-center text-sm text-blue-300 font-medium">
                            Middleman transaction
                            <span className="block text-xs font-normal text-blue-400/80 mt-0.5">User buys vouchers from institutions via QB</span>
                        </div>
                    </div>

                    <p className="mt-8 text-xs text-center text-muted-foreground">
                        Core dynamic: Aggregating many courses from many institutions into a single discovery hub
                    </p>
                </div>

                {/* Right Column: Ditto (Monobrand Model) */}
                <div className="flex flex-col items-center p-6 rounded-xl border border-emerald-900/30 bg-emerald-950/10">
                    <div className="text-center mb-6">
                        <h4 className="text-base font-semibold text-emerald-400 tracking-wide">
                            Ditto (Marcas)
                        </h4>
                        <span className="text-xs text-emerald-400/80">Dedicated monobrand model</span>
                    </div>

                    {/* Grouped Container housing the pipeline AND the final connected outcome block */}
                    <div className="w-full flex flex-col p-5 rounded-xl border border-border/60 bg-background/40 gap-4">
                        <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground text-center mb-1">
                            User's discovery and selection pipeline
                        </span>

                        <div className="w-full p-3 rounded-lg border border-border bg-background text-center text-sm font-medium">
                            Explore isolated single-brand catalog
                            <span className="block text-xs font-normal text-muted-foreground mt-0.5">Courses restricted to ONE partner institution</span>
                        </div>
                        <div className="flex justify-center text-muted-foreground text-xs -my-1">↓</div>

                        <div className="w-full p-3 rounded-lg border border-border bg-background text-center text-sm font-medium">
                            Select course and campus variant
                        </div>
                        <div className="flex justify-center text-muted-foreground text-xs -my-1">↓</div>

                        <div className="w-full p-3 rounded-lg border border-border bg-background text-center text-sm font-medium">
                            Execute direct contract
                        </div>

                        <div className="flex justify-center text-muted-foreground text-xs -my-1">↓</div>

                        {/* Connected final outcome block inside the group */}
                        <div className="w-full p-3 rounded-lg border border-emerald-900/50 bg-emerald-950/30 text-center text-sm text-emerald-300 font-medium">
                            Direct institutional enrollment
                            <span className="block text-xs font-normal text-emerald-400/80 mt-0.5">Impersonates partner brand seamlessly</span>
                        </div>
                    </div>

                    <p className="mt-8 text-xs text-center text-muted-foreground">
                        Core dynamic: Immersing users entirely within courses from a single institution at a time.
                    </p>
                </div>
            </div>
        </div>
    );
}