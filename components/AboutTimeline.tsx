import { Column, Row, Heading, Text, Tag } from '@once-ui-system/core'

const timeline = [
  {
    period: 'Aug 2021 – present',
    role: 'Senior Drupal & Full Stack Developer',
    company: 'Softescu (Remote)',
    description:
      'Key client: World Trade Organization — TAMS, STDF, TPRQA, EIF platforms. Custom REST resource plugins, SAML/ADFS SSO, enterprise Drupal platform architecture, Config Split for multi-environment management, and Drupal 10 → 11 upgrade planning.',
    tags: ['Drupal', 'PHP', 'REST API', 'SAML', 'Pantheon', 'React'],
  },
  {
    period: 'May 2025 – Aug 2025',
    role: 'Full Stack Developer',
    company: 'Fat Beehive (Remote, UK)',
    description:
      'Drupal CMS backends for UK clients. Custom module patches, Drupal Commerce compatibility fixes for React checkout flows, Drupal version upgrades, and complex support ticket resolution across Drupal and React frontends.',
    tags: ['Drupal', 'PHP', 'React', 'Drupal Commerce'],
  },
  {
    period: 'Sep 2024 – May 2025',
    role: 'Full Stack Developer',
    company: 'Ekfrazo — Contract for MTN Nigeria (Remote)',
    description:
      'Led Drupal backend development for MTN Play (play.mtn.ng), a platform serving millions of users. Built REST and JSON:API endpoints, custom content workflow modules, and React frontend components including a custom audio player with Drupal JSON:API integration.',
    tags: ['Drupal', 'React', 'JSON:API', 'Node.js', 'PHP'],
  },
  {
    period: 'May 2024 – Dec 2024',
    role: 'Web Developer',
    company: 'Ronder Digital (Remote, Netherlands)',
    description:
      'Drupal-powered campaign and institutional websites for Dutch clients including VGN and Landschap Noord-Holland. Figma-to-Twig workflows, custom themes, content types, and Core Web Vitals optimisation.',
    tags: ['Drupal', 'Twig', 'PHP', 'Figma', 'SCSS'],
  },
  {
    period: '2026 (expected)',
    role: 'MSc Computer Science',
    company: 'University of Hertfordshire',
    description:
      'Modules include Computer Architecture, Software Engineering, Database Systems, OS & Networks Security, and a group project in core PHP/MySQL.',
    tags: ['Computer Science', 'Java', 'MySQL', 'Kali Linux'],
  },
  {
    period: '2019',
    role: 'BSc Physics (2:1)',
    company: 'Lagos State University',
    description:
      'Graduated as Best Physics Student. The analytical and modelling skills from physics directly inform how I approach software architecture and debugging.',
    tags: ['Physics', 'Best Graduate'],
  },
]

export default function AboutTimeline() {
  return (
    <Column
      as="section"
      fillWidth
      paddingX="l"
      marginTop="104"
      gap="32"
      style={{ maxWidth: '1100px', margin: '104px auto 0' }}
    >
      <Heading variant="display-strong-xs" onBackground="neutral-strong">
        Experience &amp; education
      </Heading>

      <Column fillWidth gap="0">
        {timeline.map((item, i) => (
          <Row
            key={i}
            fillWidth
            gap="24"
            paddingY="32"
            borderBottom={i < timeline.length - 1 ? 'neutral-alpha-weak' : undefined}
            s={{ direction: 'column', gap: '16' }}
          >
            {/* Left — period */}
            <Column style={{ width: '180px', flexShrink: 0 }} s={{ hide: false }}>
              <Text
                variant="label-default-s"
                onBackground="neutral-weak"
                style={{ fontFamily: 'var(--font-code)' }}
              >
                {item.period}
              </Text>
            </Column>

            {/* Right — content */}
            <Column flex={1} gap="8">
              {/* Dot indicator */}
              <Row gap="12" vertical="center">
                <span
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    border: '2px solid var(--brand-solid-strong)',
                    backgroundColor: 'var(--page-background)',
                    flexShrink: 0,
                  }}
                />
                <Heading as="h3" variant="heading-default-m" onBackground="neutral-strong">
                  {item.role}
                </Heading>
              </Row>

              <Text
                variant="body-default-s"
                onBackground="brand-medium"
                style={{ fontWeight: 500, paddingLeft: '22px' }}
              >
                {item.company}
              </Text>

              <Text
                variant="body-default-s"
                onBackground="neutral-medium"
                style={{ lineHeight: 1.7, paddingLeft: '22px' }}
              >
                {item.description}
              </Text>

              <Row gap="8" wrap style={{ paddingLeft: '22px', marginTop: '4px' }}>
                {item.tags.map((tag) => (
                  <Tag key={tag} label={tag} variant="neutral" size="s" />
                ))}
              </Row>
            </Column>
          </Row>
        ))}
      </Column>
    </Column>
  )
}
