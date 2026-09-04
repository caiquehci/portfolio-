import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex-sans',
})

export const metadata: Metadata = {
  title: 'Carlos Machado, Product Designer',
  description:
    'Product and UX/UI designer. Checkout, design systems, and product decisions backed by research and data.',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#131313',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={ibmPlexSans.variable}>
      <body className="min-h-dvh flex flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  )
}
