import { Hero } from '@/components/home/hero'
import { SelectedWork } from '@/components/home/selected-work'
import { MoreWork } from '@/components/home/more-work'
import { Contact } from '@/components/home/contact'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <MoreWork />
      <Contact />
    </main>
  )
}
