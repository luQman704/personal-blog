'use client'

import { useState } from 'react'
import { Column, Row, Heading, Text, Button, Input } from '@once-ui-system/core'

export default function NewsletterSection() {
  const [email, setEmail]         = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    // TODO: wire to ConvertKit / Mailchimp / your own API route
    setSubmitted(true)
  }

  return (
    <Column
      as="section"
      fillWidth
      paddingX="l"
      marginTop="104"
      horizontal="center"
      gap="24"
      style={{ maxWidth: '680px', margin: '104px auto 0', textAlign: 'center' }}
    >
      <Column gap="8" horizontal="center">
        <Heading variant="display-strong-xs" onBackground="neutral-strong">
          Newsletter coming soon!
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-medium">
          Enterprise Drupal, architecture, and the things I wish someone had told me.
          Once or twice a month.
        </Text>
      </Column>

      {submitted ? (
        <Text variant="body-strong-s" onBackground="brand-strong">
          ✓ You&apos;re in. Talk soon.
        </Text>
      ) : (
        <Row
          as="form"
          gap="8"
          vertical="center"
          style={{ width: '100%', maxWidth: '440px', margin: '0 auto' }}
          s={{ direction: 'column' }}
          onSubmit={handleSubmit}
        >
          <Input
            id="newsletter-email"
            type="email"
            value={email}
            disabled
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            label="Email"
            style={{ flex: 1 }}
          />
          <Button
            type="submit"
            variant="primary"
            size="m"
            disabled
          >
            Subscribe
          </Button>
        </Row>
      )}
    </Column>
  )
}
