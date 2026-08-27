'use client'

import Link from 'next/link'
import { Row, Column, Text, Heading, Button, Tag, Line } from '@once-ui-system/core'

const stackTags = [
  { label: 'Drupal',     highlight: true  },
  { label: 'Next.js',    highlight: true  },
  { label: 'React',      highlight: false },
  { label: 'PHP 8',      highlight: false },
  { label: 'TypeScript', highlight: false },
  { label: 'Node.js',    highlight: false },
  { label: 'MySQL',      highlight: false },
  { label: 'Solr',       highlight: false },
  { label: 'Pantheon',   highlight: false },
  { label: 'DDEV',       highlight: false },
]

const stats = [
  { label: 'Based in',      value: 'Wickford, Essex, UK' },
  { label: 'Experience',    value: '7+ years'            },
  { label: 'Certification', value: 'Acquia D10'          },
  { label: 'MSc',           value: "Hertfordshire '26"   },
]

export default function HeroSection() {
  return (
    <Column
      as="section"
      fillWidth
      paddingX="l"
      paddingTop="80"
      paddingBottom="64"
      style={{ maxWidth: '1100px', margin: '0 auto' }}
    >
      <Row fillWidth gap="80" s={{ direction: 'column', gap: '40' }}>

        {/* Left column */}
        <Column flex={1} gap="32">
          {/* Eyebrow */}
          <Row gap="12" vertical="center">
            <Line style={{ width: '32px' }} />
            <Text variant="label-default-s" onBackground="brand-medium" style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Acquia Certified · Drupal
            </Text>
          </Row>

          {/* Hero heading */}
          <Heading
            as="h1"
            variant="display-strong-l"
            onBackground="neutral-strong"
            style={{ lineHeight: 1 }}
          >
            Building{' '}
            <Text
              as="em"
              variant="display-strong-l"
              onBackground="brand-strong"
              style={{ fontStyle: 'italic' }}
            >
              real things
            </Text>
            {' '}for the enterprise web
          </Heading>

          <Text
            variant="body-default-l"
            onBackground="neutral-medium"
            style={{ maxWidth: '560px', lineHeight: 1.7 }}
          >
            Senior Drupal &amp; full-stack developer with 7+ years shipping production
            systems for the WTO, MTN, and global NGOs. I write about architecture,
            headless CMS, and the things I&apos;ve learned the hard way.
          </Text>

          <Row gap="24" vertical="center" wrap>
            <Button href="/writing" variant="primary" size="m">
              Read latest post →
            </Button>
            <Button href="/projects" variant="ghost" size="m">
              View projects →
            </Button>
          </Row>
        </Column>

        {/* Right sidebar */}
        <Column gap="16" style={{ width: '320px', flexShrink: 0 }} s={{ hide: true }}>
          {/* Stack panel */}
          <Column
            background="surface"
            border="neutral-alpha-medium"
            radius="l"
            padding="24"
            gap="16"
          >
            <Text
              variant="label-default-s"
              onBackground="neutral-weak"
              style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              Current stack
            </Text>
            <Row gap="8" wrap>
              {stackTags.map((tag) => (
                <Tag
                  key={tag.label}
                  label={tag.label}
                  variant={tag.highlight ? 'brand' : 'neutral'}
                />
              ))}
            </Row>
          </Column>

          {/* Quick facts panel */}
          <Column
            background="surface"
            border="neutral-alpha-medium"
            radius="l"
            padding="24"
            gap="0"
          >
            <Text
              variant="label-default-s"
              onBackground="neutral-weak"
              style={{ letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}
            >
              Quick facts
            </Text>
            {stats.map((stat, i) => (
              <Row
                key={stat.label}
                fillWidth
                horizontal="between"
                vertical="center"
                paddingY="12"
                borderBottom={i < stats.length - 1 ? 'neutral-alpha-weak' : undefined}
              >
                <Text variant="body-default-s" onBackground="neutral-medium">
                  {stat.label}
                </Text>
                <Text variant="body-strong-s" onBackground="neutral-strong">
                  {stat.value}
                </Text>
              </Row>
            ))}
          </Column>
        </Column>

      </Row>
    </Column>
  )
}
