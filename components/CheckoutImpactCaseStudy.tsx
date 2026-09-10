import {
    FileText,
    Clock,
    CreditCard,
    GitBranch,
    Home,
    ShieldCheck,
    Zap,
    TrendingUp,
    Layers,
    CheckCircle2
} from 'lucide-react';

export default function CheckoutAndScalingSection() {
    return (
        <div className="w-full max-w-2xl flex flex-col gap-10 text-neutral-100 mt-4">

            {/* Part 1: The Redundancy & Payload Discovery */}
            <div className="relative flex flex-col gap-4 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-neutral-900/80 via-neutral-900/40 to-purple-950/20 border border-neutral-800/80 shadow-lg overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                        <FileText className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-200">Solving data redundancy</h3>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                    Because institutional compliance documentation was initially absent, I audited legal baselines against Brazil&apos;s Ministry of Education (MEC) standards and cross-referenced them with actual partner back-office intake habits. I discovered a data overlap: our automated payload was sending data that partner institutions were redundantly asking students to fill out again downstream during final enrollment.
                </p>
            </div>

            {/* Part 2: Contextual Exit Routing */}
            <div className="relative flex flex-col gap-4 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-neutral-900/80 via-neutral-900/40 to-indigo-950/20 border border-neutral-800/80 shadow-lg overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                        <GitBranch className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-200">Streamlining post-checkout destinations</h3>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                    To eliminate user disorientation post-transaction, I restructured the final screen pipeline to dynamically branch based on institutional pathways—seamlessly directing students into immediate enrollment workflows or routing them back to optimized nurturing sequences without friction.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-1">
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800/80">
                        <div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
                            <FileText className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-medium text-neutral-200">Admission / Enrollment workflow</span>
                            <span className="text-[11px] text-neutral-400 mt-0.5">Routed directly to the first screen of the institutional enrollment flow.</span>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800/80">
                        <div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
                            <Home className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-medium text-neutral-200">Homepage and mailing sequence</span>
                            <span className="text-[11px] text-neutral-400 mt-0.5">Redirected back to the home environment, paired with initial automated emails.</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Part 3: Metrics & Payment Migration */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Form Optimization */}
                <div className="relative flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-br from-neutral-900/80 via-neutral-900/40 to-pink-950/20 border border-neutral-800/80 shadow-lg gap-6 overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-pink-600/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Form Refinement</span>
                            <span className="text-[11px] font-medium text-pink-400/30 bg-pink-500/[0.02] px-2 py-0.5 rounded border border-pink-500/5">Impact</span>
                        </div>
                        <h3 className="text-base font-semibold text-neutral-200">Cutting 3 fields from the 12 step form long</h3>
                        <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
                            Based on the intake audit showing partner overlap, I eliminated 3 redundant fields from the 12-step data payload. By excising fields that students would simply be forced to re-enter inside partner back-offices anyway, we streamlined the immediate client-facing barrier.
                        </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-neutral-800/80 text-xs">
                        <div className="flex items-center gap-1.5 text-neutral-300">
                            <Clock className="w-3.5 h-3.5 text-pink-400" />
                            <span>Before: ~6.0 min</span>
                        </div>
                        <span className="text-neutral-600">→</span>
                        <div className="flex items-center gap-1.5 font-medium text-neutral-300">
                            <Zap className="w-3.5 h-3.5 text-pink-400" />
                            <span>After: ~4.5 min</span>
                        </div>
                    </div>
                </div>

                {/* Paystation Migration */}
                <div className="relative flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-br from-neutral-900/80 via-neutral-900/40 to-fuchsia-950/20 border border-neutral-800/80 shadow-lg gap-6 overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-fuchsia-600/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Infrastructure</span>
                            <span className="text-[11px] font-medium text-fuchsia-400/30 bg-fuchsia-500/[0.02] px-2 py-0.5 rounded border border-fuchsia-500/5">Owned stack</span>
                        </div>
                        <h3 className="text-base font-semibold text-neutral-200">Migration to Paystation</h3>
                        <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
                            Removed external processing dependencies away from third-party legacy gateways, migrating to an entirely owned checkout architecture. Eliminating third-party reliance secured transaction integrity, protected payment data streams from external downtime, and lowered transaction overhead.
                        </p>
                    </div>

                    <div className="flex items-center gap-2 pt-4 border-t border-neutral-800/80 text-xs text-neutral-300">
                        <ShieldCheck className="w-4 h-4 text-fuchsia-400 shrink-0" />
                        <span>Zero external gateway dependencies</span>
                    </div>
                </div>

            </div>

            {/* Part 4: Scaling Past the Initial Horizon */}
            <div className="relative flex flex-col gap-5 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-neutral-900/80 via-neutral-900/40 to-purple-950/10 border border-neutral-800/80 shadow-lg overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-neutral-100">Scaling past the initial horizon</h3>
                    <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
                        Avoiding manual brute-force solutions (such as fragmented copycat sites or low-cost intern labor) by building an infrastructure that absorbs growth cleanly across 21+ partner institutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4 border-t border-neutral-800/80">
                    <div className="flex flex-col gap-1.5">
                        <span className="text-xs font-semibold text-neutral-200 uppercase tracking-wider">Horizontal Scalability</span>
                        <p className="text-[11px] md:text-xs text-neutral-400 leading-relaxed">
                            Adopted by internal business units like Branded to seamlessly onboard 21 distinct partner institutions without parallel engineering rewrites.
                        </p>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <span className="text-xs font-semibold text-neutral-200 uppercase tracking-wider">Brand Integrity</span>
                        <p className="text-[11px] md:text-xs text-neutral-400 leading-relaxed">
                            Centralized parameters and modular components prevented web pollution from unmaintainable Quero Bolsa clones, safeguarding user trust.
                        </p>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <span className="text-xs font-semibold text-neutral-200 uppercase tracking-wider">Delivery Timelines</span>
                        <p className="text-[11px] md:text-xs text-neutral-400 leading-relaxed">
                            Insulated enterprise partner launches from operational chaos, consistently meeting tight MVP delivery windows under high-touch executive scrutiny.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}