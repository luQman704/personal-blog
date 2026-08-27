'use client'

import Link from 'next/link'
import { Row, Column, Text, Line } from '@once-ui-system/core'

const footerLinks = [
  { label: 'GitHub',     href: '/'                                                  },
  { label: 'LinkedIn',   href: 'https://www.linkedin.com/in/lukmon-awoyemi-559659120' },
  { label: 'Drupal.org', href: '/'                                                  },
  { label: 'CV',         href: '/cv'                                                },
  { label: 'RSS',        href: '/feed.xml'                                          },
]

export default function Footer() {
  return (
    <Column as="footer" fillWidth borderTop="neutral-alpha-medium" marginTop="104">
      <Row
        fillWidth
        horizontal="between"
        vertical="center"
        paddingX="l"
        paddingY="32"
        gap="24"
        style={{ maxWidth: '1100px', margin: '0 auto' }}
        s={{ direction: 'column' }}
      >
        <Text variant="body-default-m" onBackground="neutral-strong" style={{ fontStyle: 'italic' }}>
          Lukmon Awoyemi
        </Text>

        <Row gap="24" wrap>
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{ textDecoration: 'none' }}
              {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <Text variant="body-default-s" onBackground="neutral-medium">
                {link.label}
              </Text>
            </Link>
          ))}
        </Row>

        <Text variant="label-default-xs" onBackground="neutral-weak" style={{ fontFamily: 'var(--font-code)' }}>
          © {new Date().getFullYear()}
        </Text>
      </Row>
    </Column>
  )
}
