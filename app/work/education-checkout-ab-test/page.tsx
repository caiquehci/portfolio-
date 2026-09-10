'use client'

import { useState } from 'react'
import Link from 'next/link'
import { projects } from '@/lib/portfolio-data'
import { ThoughtText } from '@/components/home/thought-text'

// how to use ThoughtText
// < ThoughtText thought = "Hidden text">hightlighted words</ThoughtText >
//



export default function EducationCheckoutPage() {
  const project = projects.find((p) => p.slug === 'education-checkout-ab-test')

  const [activeImage, setActiveImage] = useState<string | null>(null)

  if (!project) return null

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-16 md:py-24">
      <button
        onClick={() => window.history.back()}
        className="text-sm text-muted-foreground underline underline-offset-4 cursor-pointer bg-transparent border-none p-0 text-left"
      >
        ← Back
      </button>

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
        <h2 className="text-xl font-medium">Role and scope</h2>
        <ul className="flex max-w-2xl list-disc flex-col gap-2 pl-5 text-muted-foreground">
          <li className="leading-relaxed">
            Owned <strong>Ditto</strong>, the white-label product for higher-education institutions, spanning the homepage, lead generation, course listings, PDP, checkout, and digital admissions.
          </li>
          <li className="leading-relaxed">
            Redesigned UFBRA’s checkout, migrating it to <strong>Paystation</strong> (our internal payment gateway) while aligning it with institutional branding.
          </li>
          <li className="leading-relaxed">
            Investigated quantitative data daily across <strong>Google Analytics, Clarity, Metabase, and internal dashboards</strong>.
          </li>
          <li className="leading-relaxed">
            Structured the A/B testing framework, performed < ThoughtText thought="In case you're wandering `why a Z-Test`? I used it because I was measuring a binary conversion outcome (checkout initiation vs. completed payment / enrollment fee payment): Y/N? Across large, independent traffic samples. With sample sizes scaling into thousands of users per variant, the Z-Test allows us to more safely assume a normal distribution via the Central Limit Theorem, providing a statistically sound method to verify whether the 6.85% vs. 4.72% conversion difference was a true behavioral improvement rather than random noise. I mean, I'm no statistics major, but this is functional science-grounded decision making.">Z-Test statistical validation</ThoughtText >, and drove alignment across stakeholders.
          </li>
        </ul>
      </section>

      <section className="flex max-w-2xl flex-col gap-4 mt-16">
        <h2 className="text-xl font-medium">Context</h2>
        <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
          <p>
            During my time at Quero Educação (Qeevo Group), I was responsible for Ditto, a white-label product suite for higher education institutions. It was operated via CMS by the Marcas team and brought to life by me, our PM and QE’s engineering team.
          </p>
          <p>
            As part of this scope, I redesigned the UFBRA checkout. It went live in December, fully integrated with Paystation. Shortly after launch, however, it faced heavy internal friction: stakeholders pointed fingers at the redesign, accusing it of “performing worse than its predecessor.”
          </p>
          <p>
            My goals were clear: to align the checkout with institutional branding, migrate from Pagar.me to Paystation, improve conversion, and reduce infrastructure costs.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-3 max-w-3xl  mt-16">
          <h2 className="text-xl font-medium">Baseline X Proposal: why the "new" checkout is the baseline (a wording matter)</h2>
          <p className="leading-relaxed text-muted-foreground">
            In the A/B test report, the nomenclature is counterintuitive:
          </p>
          <ul className="list-disc pl-5 flex flex-col gap-2 text-muted-foreground leading-relaxed">
            <li>
              <strong className="text-foreground">Baseline =</strong> The new checkout (my design), running on Paystation via iframe, created within Ditto.
            </li>
            <li>
              <strong className="text-foreground">Proposal =</strong> The old checkout (based on Pagar.me), originally designed for QB and reused in Marcas.
            </li>
          </ul>
          <p className="leading-relaxed text-muted-foreground mt-1">
            The new checkout went live first, completely replacing the old one. Only after performance questions arose did the previous checkout run in parallel for comparison, which is why the new version appears as the baseline in the analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
          <div className="w-full">
            <button
              onClick={() => setActiveImage("/portfolio-images/education-checkout-ab-test/proposal-antigo.png")}
              className="w-full text-left cursor-pointer overflow-hidden rounded-xl border border-border bg-transparent"
            >
              <img
                src="/portfolio-images/education-checkout-ab-test/proposal-antigo.png"
                alt="Baseline - Novo"
                className="w-full h-auto object-contain"
              />
            </button>
          </div>
          <div className="w-full">
            <button
              onClick={() => setActiveImage("/portfolio-images/education-checkout-ab-test/baseline-novo.png")}
              className="w-full text-left cursor-pointer overflow-hidden rounded-xl border border-border bg-transparent"
            >
              <img
                src="/portfolio-images/education-checkout-ab-test/baseline-novo.png"
                alt="Proposal - Antigo"
                className="w-full h-auto object-contain"
              />
            </button>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-10 mt-16">
        <h2 className="text-xl font-medium">Initiatives</h2>

        <article className="flex max-w-2xl flex-col gap-5 border-t border-border pt-8">
          <h3 className="text-lg font-medium">1. Separating the price effect from the interface effect</h3>
          <p className="leading-relaxed text-muted-foreground">
            The migration from Pagar.me to Paystation happened in December without an initial A/B test. When conversion dipped days later, the redesign was identified as a possible cause.
          </p>
          <div className="space-y-1">
            <p className="text-sm font-medium text-foreground">Strategic focus</p>
            <p className="leading-relaxed text-muted-foreground">
              I treated the conversion decline as a product investigation rather than assuming the interface was the cause. Cross-reference internal events and daily analytics to uncover what actually shifted concurrently with the launch.
            </p>
            <p className="text-sm font-medium text-foreground pt-3">Clarified Hypothesis</p>
            <p className="leading-relaxed text-muted-foreground pt-1">
              The null hypothesis (H0): There is no significant difference in conversion rates between the new Paystation checkout (Baseline) and the legacy Pagar.me flow (Proposal).
            </p>
            <p className="leading-relaxed text-muted-foreground pt-1">
              The Product/Marcas alternative hypothesis (H1): Streamlining the interface, reducing cognitive load, displaying a clear price summary, and allowing inline campus corrections, will result in a higher conversion rate than the legacy form architecture.
            </p>
            <p className="leading-relaxed text-muted-foreground pt-1">
              The behavioral/change-averse hypothesis (H2): Users accustomed to the legacy Pagar.me flow may experience temporary friction after the interface change, resulting in conversion decline.
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-foreground">Solution</p>
            <p className="leading-relaxed text-muted-foreground">
              Digging into data, I discovered that on December 11th, tThe price increase and checkout redesign occurred at the same time, making it necessary to separate their effects on conversion.
            </p>
          </div>
        </article>

        <article className="flex max-w-2xl flex-col gap-5 border-t border-border pt-8">
          <h3 className="text-lg font-medium">2. Reducing cognitive load at the moment of decision.</h3>
          <p className="leading-relaxed text-muted-foreground">
            The legacy checkout (repurposed from a different business unit, QB) forced users through bloated forms and broke the journey if a campus selection needed tweaking.
          </p>
          <div className="space-y-1">
            <p className="text-sm font-medium text-foreground">Strategic focus</p>
            <p className="leading-relaxed text-muted-foreground">
              Clean up the funnel using market benchmarks, placing the purchase summary front-and-center and trimming the form down to bare-minimum essentials.
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-foreground">Solution</p>
            <p className="leading-relaxed text-muted-foreground">
              Restructured the layout to feature a clear purchase summary (course, modality, current/future prices) right in focus, allowed users to correct their campus selection directly inside the checkout flow, and eliminated non-mandatory friction (such as universally collecting ID numbers upfront, shifting compliance documentation post-payment). The changes were aligned with stakeholders by positioning QE as an enabler of the checkout experience.
            </p>
          </div>
        </article>

        <article className="flex max-w-2xl flex-col gap-5 border-t border-border pt-8">
          <h3 className="text-lg font-medium">3. Proving it with a statistically robust A/B test</h3>
          <p className="leading-relaxed text-muted-foreground">
            Because the new checkout had been pushed live first, the A/B test nomenclature was inverted: the new design ran as the "Baseline," while the old Pagar.me flow acted as the "Proposal."
          </p>
          <div className="space-y-1">
            <p className="text-sm font-medium text-foreground">Validation and impact</p>
            <p className="leading-relaxed text-muted-foreground">
              Across three distinct traffic segments (80/20, 50/50, and 50/50 integrated with Google OAuth during Carnival), < ThoughtText thought="The sample size was dictated by real-world traffic. Instead of waiting for an arbitrary theoretical threshold, we ran the test across sequential traffic allocations to capture high-intent seasonal volume (the peak), securing enough statistical power and volume to achieve a definitive, highly significant Z-score (4.1056) and a p-value well below standard alpha thresholds. Roughly 0.0000403 compared to the standard 0.05 ~or 5%: it is orders of magnitude smaller than 0.05, meaning there is virtually a 0% chance the results occurred by random chance.">with this sample size</ThoughtText > we tracked performance from checkout initiation to completed payment, validating results with a Z-Test. Baseline achieved 6.85% conversion vs. Proposal's 4.72% (Z-Score of 4.1056, p-value of 0.0000403). This generated 68.5 additional enrollments during the test window (scaling to 288 for equal volumes), the results showed higher conversion for the new baseline checkout. Also validating < ThoughtText thought="The Product/Marcas alternative hypothesis (H1): Streamlining the interface, reducing cognitive load, displaying a clear price summary, and allowing inline campus corrections, will outperform the legacy form architecture AND/OR couldn't affect the checkout negatively.">hypothesis H1</ThoughtText >.
            </p>
          </div>
        </article>
      </section>

      <section className="flex flex-col gap-4 w-full mt-16">
        <h2 className="text-xl font-medium">Results</h2>
        <div className="w-full h-[80vh] md:h-[80vh] overflow-hidden rounded-xl border border-border bg-neutral-900/10">
          <iframe
            src="https://shaky-wolf-35335466.figma.site/"
            title="A/B Test Results Prototype"
            className="w-full h-full border-none"
            allowFullScreen
          />
        </div>
      </section>

      <section className="flex max-w-2xl flex-col gap-4 mt-16">
        <h2 className="text-xl font-medium">Outcome</h2>
        <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
          <p>
            The A/B test confirmed the new checkout outperformed the legacy flow.<ThoughtText thought="The results are trustworthy because we methodically isolated variables and eliminated confounding factors: (A) Price effect vs. Interface effect isolation: We traced and accounted for a concurrent price increase [PEF jumping from R$49.90 to R$74.90 on December 12th] that had initially biased stakeholders against the redesign. (B) Multi-segment replication: The test wasn't run on a single isolated day; it was validated across three separate traffic configurations, including high-stress seasonal traffic periods like Carnival. (C) Statistical guardrails: The final outcome achieved a Z-Score of 4.1056 and a p-value of 0.0000403. The statistical results indicate that the observed conversion difference is unlikely to be explained by random variation." widthClass='w-[500px]'>(and maybe you're asking yourself on the why is that so?)</ThoughtText>: the new checkout decisively outperformed the legacy flow across every relevant metric, backed by rigorous statistical validation.
          </p>
          <p>
            Beyond conversion wins, migrating from Pagar.me to Paystation reduced infrastructure fees from approximately 2% to 0.5%. With QE retaining 70% of revenue, this corresponded to more than R$15,100 in estimated direct margin gains during the analysis period.
          </p>
          <p>
            This project reflects my approach as a Product Designer: I design end-to-end digital experiences, investigate performance through analytics, structure funnels, and use quantitative evidence to guide product decisions..
          </p>
        </div>
      </section>

      {/* <div className="w-full">
        <button
          onClick={() => setActiveImage("/portfolio-images/education-checkout-ab-test/IMAGEM_05.png")}
          className="w-auto text-left cursor-pointer overflow-hidden rounded-xl border border-border bg-transparent"
        >
          <img
            src="/portfolio-images/education-checkout-ab-test/IMAGEM_05.png"
            alt="Illustration"
            className="h-[300px] md:h-[500px] w-auto object-contain"
          />
        </button>
      </div> */}

      {/* <section className="flex max-w-2xl flex-col gap-4 mt-10">
        <h2 className="text-xl font-medium">Limitations</h2>
        <p className="leading-relaxed text-muted-foreground">
          <strong>Scope boundaries:</strong> Metrics were isolated to PEF (one-time enrollment fees). LTV tracking wasn't factored in due to varying monthly tuitions per course.
        </p>
        <p className="leading-relaxed text-muted-foreground">
          <strong>Timing:</strong> The A/B test was deployed after performance alarms went off. Running it pre-launch would have saved weeks of unnecessary stakeholder friction. Profit is earned, but the lesson is invaluable.
        </p>
      </section> */}

      {/* {project.team ? (
        <p className="max-w-2xl text-sm text-muted-foreground">{project.team}</p>
      ) : null} */}

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
          >
            Close
          </button>
        </div>
      )}

      <section className="flex flex-col gap-6 border-t border-border pt-16 mt-40">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-medium tracking-tight">Explore other cases</h2>
          <p className="text-base text-muted-foreground">Continue reading about my process and impact across other digital products.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3 mt-4">
          {projects
            .filter((p) => !p.hidden && p.slug !== 'education-checkout-ab-test')
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