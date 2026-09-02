import { moreWork } from '@/lib/portfolio-data'

export function MoreWork() {
  return (
    <section id="more-work" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-16 md:py-20">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-medium tracking-tight">More work</h2>
          <p className="max-w-xl text-muted-foreground">
            Smaller pieces: wireframes, presentations, and graphic design.
          </p>
        </div>
        <ul className="flex flex-col">
          {moreWork.map((item) => (
            <li key={item.name} className="border-t border-border last:border-b">
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col gap-2 py-6 md:flex-row md:items-baseline md:justify-between md:gap-8"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-right">
                  {item.summary}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
