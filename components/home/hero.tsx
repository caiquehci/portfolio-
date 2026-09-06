import { profile } from '@/lib/portfolio-data'

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-16 md:py-24">
        {/* "Product Designer" in grey */}
        <p className="text-sm text-muted-foreground">{profile.title}</p>

        {/* "Senior ..." in white */}
        <h1 className="max-w-3xl text-4xl font-medium leading-tight tracking-tight md:text-5xl text-foreground">
          {profile.shortName}
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-foreground">{profile.positioning}</p>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">{profile.experienceLine}</p>

        {/* CTAs removed completely */}
      </div>
    </section>
  )
}