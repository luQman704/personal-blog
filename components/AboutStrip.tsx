'use client'

import { Row, Column, Heading, Text, Button } from '@once-ui-system/core'

export default function AboutStrip() {
  return (
    <Column
      as="section"
      fillWidth
      paddingX="l"
      marginTop="104"
      style={{ maxWidth: '1100px', margin: '104px auto 0' }}
    >
      <Row
        fillWidth
        background="surface"
        border="neutral-alpha-medium"
        radius="l"
        padding="48"
        gap="64"
        vertical="center"
        s={{ direction: 'column', gap: '32', padding: '32' }}
        style={{ background: 'var(--brand-alpha-weak)' }}
      >
        {/* Left */}
        <Column flex={1} gap="16">
          <Heading
            as="h2"
            variant="display-strong-s"
            onBackground="neutral-strong"
          >
            Enterprise Drupal,{' '}
            <Text
              as="em"
              variant="display-strong-s"
              onBackground="accent-strong"
              style={{ fontStyle: 'italic' }}
            >
              done properly
            </Text>
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-medium" style={{ lineHeight: 1.7 }}>
            I&apos;ve spent seven years building platforms that serve ministers, diplomats and
            international trade organisations. I know what breaks at scale, what Drupal
            can and can&apos;t do, and how to ship without drama. Available for senior
            contract and full-time roles.
          </Text>
        </Column>

        {/* Right */}
        <Column gap="12" style={{ flexShrink: 0, minWidth: '200px' }}>
          <Button href="/cv" variant="primary" size="m" fillWidth>
            View my CV →
          </Button>
          <Button href="/projects" variant="secondary" size="m" fillWidth>
            See projects
          </Button>
        </Column>
      </Row>
    </Column>
  )
}
