import type { Metadata } from 'next'
import { profile } from '@/lib/portfolio-data'
import { AboutContent } from './about-content'

// Metadata is resolved on the server, before the visitor's language is known,
// so it stays in the site's default language.
export const metadata: Metadata = {
  title: `About, ${profile.shortName}`,
}

export default function AboutPage() {
  return <AboutContent />
}
