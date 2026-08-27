import type { Metadata } from 'next'
import '@once-ui-system/core/css/styles.css'
import '@once-ui-system/core/css/tokens.css'
import './globals.css'
import classNames from 'classnames'
import { fonts, style } from '@/resources/once-ui.config'
import { ThemeInit, Flex, Column } from '@once-ui-system/core'
import { Providers } from '@/components/Providers'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title:       'Lukmon Awoyemi — Developer & Writer',
  description: 'Senior Drupal & full-stack developer. Writing about enterprise web architecture, headless CMS, and PHP.',
  openGraph: {
    title:       'Lukmon Awoyemi',
    description: 'Senior Drupal & full-stack developer. 7+ years shipping enterprise platforms.',
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
    <Flex
      suppressHydrationWarning
      as="html"
      lang="en"
      fillWidth
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
      )}
    >
      <head>
        <ThemeInit
          config={{
            theme:        style.theme,
            brand:        style.brand,
            accent:       style.accent,
            neutral:      style.neutral,
            solid:        style.solid,
            'solid-style': style.solidStyle,
            border:       style.border,
            surface:      style.surface,
            transition:   style.transition,
            scaling:      style.scaling,
            'viz-style':  'categorical',
          }}
        />
      </head>
      <Providers>
        <Column as="body" background="page" fillWidth margin="0" padding="0">
          <Navbar />
          <Column as="main" fillWidth>
            {children}
          </Column>
          <Footer />
        </Column>
      </Providers>
    </Flex>
  )
}
