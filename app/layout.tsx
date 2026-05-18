import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title:       'Lukmon Awoyemi — Developer & Writer',
  description: 'Senior Drupal & full-stack developer. Writing about enterprise web architecture, headless CMS, and PHP.',
  openGraph: {
    title:       'Lukmon Awoyemi',
    description: 'Senior Drupal & full-stack developer. 6+ years shipping enterprise platforms.',
    url:         'https://lukmon.dev',
    siteName:    'Lukmon Awoyemi',
    locale:      'en_GB',
    type:        'website',
  },
  twitter: {
    card:  'summary_large_image',
    title: 'Lukmon Awoyemi',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
