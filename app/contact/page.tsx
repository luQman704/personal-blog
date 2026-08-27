import { Column, Heading, Text, Row, Line } from '@once-ui-system/core'
import { ContactForm } from '@/components/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:       'Contact — Lukmon Awoyemi',
  description: 'Get in touch for senior Drupal contract roles, full-stack projects, and architecture consulting.',
}

const availability = [
  { label: 'Status',     value: 'Available from May 2026'      },
  { label: 'Preference', value: 'Remote or hybrid (UK/EU)'     },
  { label: 'Rate',       value: 'On request'                   },
  { label: 'Notice',     value: '2 weeks'                      },
  { label: 'Response',   value: 'Within 1–2 business days'     },
]

const services = [
  {
    title: 'Enterprise Drupal development',
    body: 'Custom module development, Drupal migrations (8→9→10→11), headless/decoupled architecture, performance optimisation, and complex content architecture.',
  },
  {
    title: 'Full-stack development',
    body: 'React, Next.js, Laravel, Node.js. I can own the full stack or integrate tightly with your existing frontend team.',
  },
  {
    title: 'Architecture consulting',
    body: 'Technology selection, headless CMS evaluation, Drupal upgrade planning, and performance audits for enterprise platforms.',
  },
  {
    title: 'Code review & mentoring',
    body: 'Reviewing Drupal module code, team standards, and mentoring junior developers on Drupal best practices.',
  },
]

export default function ContactPage() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12">
      {/* Header */}
      <Column gap="16">
        <Heading variant="display-strong-s">Contact</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          I&apos;m available for senior Drupal contract roles, full-stack projects, and architecture
          consulting. If you&apos;re building something serious, let&apos;s talk.
        </Text>
      </Column>

      <Line />

      {/* Availability + Form grid */}
      <Row gap="48" s={{ direction: 'column' }}>
        {/* Contact form */}
        <Column flex={2} gap="24">
          <Heading as="h2" variant="heading-strong-xl">Send a message</Heading>
          <ContactForm />
        </Column>

        {/* Sidebar */}
        <Column flex={1} gap="24">
          {/* Availability */}
          <Column gap="16" background="surface" border="neutral-alpha-weak" radius="l" padding="24">
            <Text variant="label-strong-s" onBackground="neutral-weak">Availability</Text>
            <Column gap="0">
              {availability.map((item, i) => (
                <Row
                  key={item.label}
                  horizontal="between"
                  vertical="center"
                  paddingY="12"
                  borderBottom={i < availability.length - 1 ? 'neutral-alpha-weak' : undefined}
                >
                  <Text variant="body-default-s" onBackground="neutral-weak">{item.label}</Text>
                  <Text variant="body-default-s" onBackground="neutral-strong">{item.value}</Text>
                </Row>
              ))}
            </Column>
          </Column>

          {/* Direct links */}
          <Column gap="12" background="surface" border="neutral-alpha-weak" radius="l" padding="24">
            <Text variant="label-strong-s" onBackground="neutral-weak">Direct contact</Text>
            <Text as="a" href="mailto:lukmon@lukmon.dev" variant="body-default-s" onBackground="brand-medium">
              lukmon@lukmon.dev
            </Text>
            <Text
              as="a"
              href="https://linkedin.com/in/lukmon-awoyemi"
              variant="body-default-s"
              onBackground="neutral-medium"
            >
              LinkedIn ↗
            </Text>
            <Text
              as="a"
              href="https://github.com/lukmon-awoyemi"
              variant="body-default-s"
              onBackground="neutral-medium"
            >
              GitHub ↗
            </Text>
          </Column>
        </Column>
      </Row>

      {/* Services */}
      <Column gap="24">
        <Line />
        <Heading as="h2" variant="heading-strong-xl">What I can help with</Heading>
        <Row gap="16" wrap s={{ direction: 'column' }}>
          {services.map((s, i) => (
            <Column
              key={i}
              gap="8"
              flex={1}
              background="surface"
              border="neutral-alpha-weak"
              radius="l"
              padding="24"
              minWidth={240}
            >
              <Heading as="h3" variant="heading-strong-m">{s.title}</Heading>
              <Text variant="body-default-s" onBackground="neutral-medium">{s.body}</Text>
            </Column>
          ))}
        </Row>
      </Column>
    </Column>
  )
}
