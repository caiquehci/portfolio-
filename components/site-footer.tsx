import Link from 'next/link'
import { profile } from '@/lib/portfolio-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          {new Date().getFullYear()} {profile.name}
        </p>
        <ul className="flex flex-wrap items-center gap-5 text-xs">
          <li>
            <a href={profile.links.email} className="text-muted-foreground hover:text-foreground">
              Email
            </a>
          </li>
          <li>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={profile.links.behance}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              Behance
            </a>
          </li>
          <li>
            <Link href="/about" className="text-muted-foreground hover:text-foreground">
              About
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
