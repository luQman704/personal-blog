'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Row, Column, Flex, Text, Button, Line } from '@once-ui-system/core'

const navLinks = [
  { label: 'Home',     href: '/'         },
  { label: 'Writing',  href: '/writing'  },
  { label: 'Projects', href: '/projects' },
  { label: 'About',    href: '/about'    },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Column
      as="nav"
      fillWidth
      background="surface"
      borderBottom="neutral-alpha-medium"
      position="sticky"
      zIndex={9}
      style={{ top: 0 }}
    >
      <Row
        fillWidth
        horizontal="between"
        vertical="center"
        paddingX="l"
        paddingY="16"
        style={{ maxWidth: '1100px', margin: '0 auto' }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Text
            variant="heading-default-m"
            onBackground="neutral-strong"
          >
            Lukmon{' '}
            <Text
              as="span"
              variant="heading-default-m"
              onBackground="brand-strong"
            >
              Awoyemi
            </Text>
          </Text>
        </Link>

        {/* Desktop nav */}
        <Row gap="32" vertical="center" hide={false} s={{ hide: true }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ textDecoration: 'none' }}
            >
              <Text
                variant="label-default-s"
                onBackground={pathname === link.href ? 'neutral-strong' : 'neutral-medium'}
                style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}
              >
                {link.label}
              </Text>
            </Link>
          ))}
          <Button
            href="/contact"
            variant="secondary"
            size="s"
          >
            Hire me
          </Button>
        </Row>

        {/* Mobile hamburger */}
        <Flex
          as="button"
          direction="column"
          gap="4"
          padding="8"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          hide={true}
          s={{ hide: false }}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '1px',
              backgroundColor: 'var(--neutral-on-background-strong)',
              transition: 'transform 0.2s',
              transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '1px',
              backgroundColor: 'var(--neutral-on-background-strong)',
              transition: 'opacity 0.2s',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '1px',
              backgroundColor: 'var(--neutral-on-background-strong)',
              transition: 'transform 0.2s',
              transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none',
            }}
          />
        </Flex>
      </Row>

      {/* Mobile menu */}
      {menuOpen && (
        <Column
          fillWidth
          background="surface"
          borderTop="neutral-alpha-medium"
          paddingX="l"
          paddingY="16"
          gap="16"
          hide={false}
          s={{ hide: true }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ textDecoration: 'none' }}
            >
              <Text
                variant="label-default-s"
                onBackground={pathname === link.href ? 'neutral-strong' : 'neutral-medium'}
                style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}
              >
                {link.label}
              </Text>
            </Link>
          ))}
          <Button
            href="/contact"
            variant="secondary"
            size="s"
            fillWidth
            onClick={() => setMenuOpen(false)}
          >
            Hire me
          </Button>
        </Column>
      )}
    </Column>
  )
}
