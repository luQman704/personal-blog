'use client'

import { useState } from 'react'
import { Column, Row, Input, Textarea, Button, Text } from '@once-ui-system/core'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({ name: '', email: '', budget: '', message: '' })

  function handleInputChange(value: string, field: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState('submitting')
    // TODO: wire to API route at /api/contact
    await new Promise((r) => setTimeout(r, 800))
    setState('success')
  }

  if (state === 'success') {
    return (
      <Column
        gap="16"
        background="surface"
        border="neutral-alpha-weak"
        radius="l"
        padding="40"
        horizontal="center"
        align="center"
      >
        <Text variant="heading-strong-l">Message sent</Text>
        <Text variant="body-default-m" onBackground="neutral-weak">
          I&apos;ll get back to you within 1–2 business days.
        </Text>
      </Column>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <Column gap="24">
        <Row gap="16" s={{ direction: 'column' }}>
          <Column flex={1}>
            <Input
              id="name"
              label="Name"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => handleInputChange(e.target.value, 'name')}
              required
            />
          </Column>
          <Column flex={1}>
            <Input
              id="email"
              label="Email"
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) => handleInputChange(e.target.value, 'email')}
              required
            />
          </Column>
        </Row>

        <Textarea
          id="message"
          label="Message"
          placeholder="Tell me about the project, timeline, and stack..."
          value={form.message}
          onChange={(e) => handleInputChange(e.target.value, 'message')}
          lines={6}
          required
        />

        <Row>
          <Button
            type="submit"
            variant="primary"
            size="m"
            loading={state === 'submitting'}
            disabled={state === 'submitting'}
            arrowIcon
          >
            Send message
          </Button>
        </Row>
      </Column>
    </form>
  )
}

// Keep default export for backwards compatibility
export default ContactForm
