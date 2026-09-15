import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import { Space_Grotesk, Geist } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { AnalyticsTracker } from '@/components/analytics-tracker'
import { I18nProvider } from '@/lib/i18n/provider'
import { InlineScript } from '@/components/inline-script'
import { LOCALE_STORAGE_KEY } from '@/lib/i18n/config'
import './globals.css'

// const ibmPlexSans = IBM_Plex_Sans({
//   subsets: ['latin'],
//   weight: ['400', '500', '600'],
//   variable: '--font-ibm-plex-sans',
// })

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Castanheira, Product Designer',
  description:
    'Product designer. Checkout, design systems, and product decisions backed by research and data.',
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
    <html
      lang="en"
      className={`${geist.variable} ${spaceGrotesk.variable}`}
      // The inline script below rewrites `lang` before hydration, so React is
      // expected to find a different value here than it rendered on the server.
      suppressHydrationWarning
    >
      <head>
        {/*
          Sets <html lang> from the saved preference before first paint, so the
          document never reports the wrong language while React hydrates.
        */}
        <InlineScript
          html={`(function(){try{var l=localStorage.getItem('${LOCALE_STORAGE_KEY}');if(l!=='en'&&l!=='pt'){l=navigator.language&&navigator.language.toLowerCase().indexOf('pt')===0?'pt':'en'}document.documentElement.lang=l}catch(e){}})()`}
        />
      </head>
      <body className="min-h-dvh flex flex-col font-sans antialiased">
        <I18nProvider>
          <AnalyticsTracker />
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </I18nProvider>
      </body>
    </html>
  )
}
