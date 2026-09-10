import React from 'react';

export default function ModelComparisonFlow() {
    return (
        <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <div className="flex flex-col items-center p-4 rounded-xl border border-blue-900/40 bg-blue-950/10">
                <div className="text-center mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 tracking-wide">
                        Quero Bolsa
                    </h4>
                    <span className="text-[11px] text-blue-400/80">Aggregative marketplace model</span>
                </div>

                <div className="w-full flex flex-col p-4 rounded-xl border border-border/60 bg-background/40 gap-3">
                    <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground text-center mb-0.5">
                        User's discovery and selection pipeline
                    </span>

                    <div className="w-full p-2.5 rounded-lg border border-border bg-background text-center text-xs font-medium">
                        Browse cross-institutional catalog
                        <span className="block text-[11px] font-normal text-muted-foreground mt-0.5">Courses gathered from distinct colleges</span>
                    </div>
                    <div className="flex justify-center text-muted-foreground text-xs -my-1">↓</div>

                    <div className="w-full p-2.5 rounded-lg border border-border bg-background text-center text-xs font-medium">
                        Compare options across institutions
                    </div>
                    <div className="flex justify-center text-muted-foreground text-xs -my-1">↓</div>

                    <div className="w-full p-2.5 rounded-lg border border-border bg-background text-center text-xs font-medium">
                        Purchase discount voucher
                    </div>

                    <div className="flex justify-center text-muted-foreground text-xs -my-1">↓</div>

                    <div className="w-full p-2.5 rounded-lg border border-blue-900/50 bg-blue-950/30 text-center text-xs text-blue-300 font-medium">
                        Middleman transaction
                        <span className="block text-[11px] font-normal text-blue-400 mt-0.5">User buys vouchers from institutions via QB</span>
                    </div>
                </div>

                <p className="mt-6 text-[11px] text-center text-muted-foreground">
                    Core dynamic: Aggregating many courses from many institutions into a single discovery hub
                </p>
            </div>

            <div className="flex flex-col items-center p-4 rounded-xl border border-[rgba(141,123,184,0.3)] bg-[rgba(141,123,184,0.07)]">
                <div className="text-center mb-4">
                    <h4 className="text-sm font-semibold text-[rgba(141,123,184)] tracking-wide">
                        Ditto (Marcas)
                    </h4>
                    <span className="text-[11px] text-[rgba(141,123,184)]/80">Dedicated monobrand model</span>
                </div>

                <div className="w-full flex flex-col p-4 rounded-xl border border-border/60 bg-background/40 gap-3">
                    <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground text-center mb-0.5">
                        User's discovery and selection pipeline
                    </span>

                    <div className="w-full p-2.5 rounded-lg border border-border bg-background text-center text-xs font-medium">
                        Explore isolated single-brand catalog
                        <span className="block text-[11px] font-normal text-muted-foreground mt-0.5">Courses restricted to ONE partner institution</span>
                    </div>
                    <div className="flex justify-center text-muted-foreground text-xs -my-1">↓</div>

                    <div className="w-full p-2.5 rounded-lg border border-border bg-background text-center text-xs font-medium">
                        Select course and campus variant
                    </div>
                    <div className="flex justify-center text-muted-foreground text-xs -my-1">↓</div>

                    <div className="w-full p-2.5 rounded-lg border border-border bg-background text-center text-xs font-medium">
                        Execute direct contract
                    </div>

                    <div className="flex justify-center text-muted-foreground text-xs -my-1">↓</div>

                    <div className="w-full p-2.5 rounded-lg border border-[rgba(174,123,184,0.3)] bg-[rgba(174,123,184,0.08)] text-center text-xs text-foreground font-medium">
                        Direct institutional enrollment
                        <span className="block text-[11px] font-normal text-[rgba(215,195,225,0.85)] mt-0.5">Impersonates partner brand seamlessly</span>
                    </div>
                </div>

                <p className="mt-6 text-[11px] text-center text-muted-foreground">
                    Core dynamic: Immersing users entirely within courses from a single institution at a time.
                </p>
            </div>
        </div>
    );
}