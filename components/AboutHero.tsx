import { Row, Column, Heading, Text, Line } from '@once-ui-system/core'

export default function AboutHero() {
  return (
    <Column
      as="section"
      fillWidth
      paddingX="l"
      paddingTop="64"
      paddingBottom="40"
      style={{ maxWidth: '1100px', margin: '0 auto' }}
    >
      <Row fillWidth gap="64" vertical="start" s={{ direction: 'column', gap: '32' }}>

        {/* Left — bio text */}
        <Column flex={1} gap="24">
          {/* Eyebrow */}
          <Row gap="12" vertical="center">
            <Line style={{ width: '32px' }} />
            <Text
              variant="label-default-s"
              onBackground="brand-medium"
              style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              About me
            </Text>
          </Row>

          <Heading
            as="h1"
            variant="display-strong-m"
            onBackground="neutral-strong"
          >
            Developer, writer,{' '}
            <Text
              as="em"
              variant="display-strong-m"
              onBackground="brand-strong"
              style={{ fontStyle: 'italic' }}
            >
              problem solver
            </Text>
          </Heading>

          <Column gap="16" style={{ maxWidth: '580px' }}>
            <Text variant="body-default-m" onBackground="neutral-medium" style={{ lineHeight: 1.75 }}>
              I&apos;m Lukmon Awoyemi — a Senior Drupal and full-stack developer based in Wickford,
              Essex. I&apos;ve spent seven years building enterprise platforms for organisations
              that can&apos;t afford downtime: the World Trade Organization, MTN Nigeria, and
              international NGOs operating in 46 least-developed countries.
            </Text>
            <Text variant="body-default-m" onBackground="neutral-medium" style={{ lineHeight: 1.75 }}>
              My background is in Physics — I graduated as Best Physics Student from Lagos State
              University — and I still approach software the same way I approached circuits
              and waves: find the underlying model, understand the constraints, then find
              the cleanest path through.
            </Text>
            <Text variant="body-default-m" onBackground="neutral-medium" style={{ lineHeight: 1.75 }}>
              I&apos;m currently completing an MSc in Computer Science at the University of
              Hertfordshire (graduating August 2026), building this blog as a headless
              Drupal + Next.js project, and available for senior contract and full-time roles.
            </Text>
          </Column>
        </Column>

        {/* Avatar */}
        <Row horizontal="end" s={{ horizontal: 'start' }}>
          <Column
            background="surface"
            border="neutral-alpha-medium"
            radius="l"
            horizontal="center"
            vertical="center"
            style={{
              width: '160px',
              height: '160px',
              fontSize: '48px',
              fontStyle: 'italic',
              color: 'var(--brand-on-background-strong)',
              flexShrink: 0,
            }}
          >
            LA
          </Column>
        </Row>

      </Row>
    </Column>
  )
}
