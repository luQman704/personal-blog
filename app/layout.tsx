import '@once-ui-system/core/css/styles.css'
import '@once-ui-system/core/css/tokens.css'
import './globals.css'
import classNames from 'classnames'
import { Background, Column, Flex, RevealFx } from '@once-ui-system/core'
import { fonts, style, effects } from '@/resources'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Providers } from '@/components/Providers'
import type { Metadata } from 'next'

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex
      as="html"
      lang="en"
      suppressHydrationWarning
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable
      )}
    >
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var theme = localStorage.getItem('theme');
                if (!theme) {
                  theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }
                document.documentElement.setAttribute('data-theme', theme);
              } catch(e) {}
            })();
          `,
        }}
      />
      <Providers>
        <Column as="body" background="page" fillWidth minHeight="100vh" horizontal="center">
          <RevealFx fill position="absolute" style={{ zIndex: 0 }}>
            <Background
              fill
              gradient={effects.gradient as any}
              dots={effects.dots as any}
              grid={effects.grid as any}
              lines={effects.lines as any}
            />
          </RevealFx>
          <Header />
          <Flex
            as="main"
            zIndex={0}
            fillWidth
            paddingX="l"
            paddingTop="104"
            paddingBottom="l"
            horizontal="center"
            flex={1}
          >
            {children}
          </Flex>
          <Footer />
        </Column>
      </Providers>
    </Flex>
  )
}
