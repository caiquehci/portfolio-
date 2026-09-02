import { profile } from '@/lib/portfolio-data'

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-16 md:py-24">
        <p className="text-sm text-muted-foreground">{profile.title}</p>
        <h1 className="max-w-3xl text-4xl font-medium leading-tight tracking-tight md:text-5xl">
          {profile.shortName}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{profile.positioning}</p>
        <p className="max-w-2xl text-base leading-relaxed text-foreground">{profile.experienceLine}</p>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <a href="#work" className="underline underline-offset-4 hover:text-muted-foreground">
            Selected work
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:text-muted-foreground"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
