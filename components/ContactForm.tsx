'use client'

import { useState } from 'react'
import { Column, Row, Text, Heading, Button, Input, Textarea, Select } from '@once-ui-system/core'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm]   = useState({ name: '', email: '', budget: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSelectChange(value: string | string[]) {
    setForm((prev) => ({ ...prev, budget: Array.isArray(value) ? value[0] : value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState('submitting')
    // TODO: wire to your API route at /api/contact
    await new Promise((r) => setTimeout(r, 800))
    setState('success')
  }

  if (state === 'success') {
    return (
      <Column
        background="surface"
        border="neutral-alpha-medium"
        radius="l"
        padding="40"
        horizontal="center"
        vertical="center"
        gap="16"
        style={{ textAlign: 'center' }}
      >
        <Column
          horizontal="center"
          vertical="center"
          radius="full"
          style={{
            width: '48px',
            height: '48px',
            fontSize: '20px',
            background: 'var(--brand-alpha-weak)',
            color: 'var(--brand-on-background-strong)',
          }}
        >
          ✓
        </Column>
        <Heading variant="heading-strong-m" onBackground="neutral-strong">
          Message sent
        </Heading>
        <Text variant="body-default-s" onBackground="neutral-medium">
          I&apos;ll get back to you within 1–2 business days.
        </Text>
      </Column>
    )
  }

  return (
    <Column
      as="form"
      fillWidth
      gap="20"
      onSubmit={handleSubmit}
    >
      {/* Name + Email row */}
      <Row fillWidth gap="20" s={{ direction: 'column', gap: '20' }}>
        <Column flex={1}>
          <Input
            id="contact-name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            label="Name"
            required
          />
        </Column>
        <Column flex={1}>
          <Input
            id="contact-email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            label="Email"
            required
          />
        </Column>
      </Row>

      {/* Engagement type */}
      <Select
        id="contact-budget"
        value={form.budget}
        onSelect={handleSelectChange}
        label="Engagement type"
        options={[
          { label: 'Select one...', value: '' },
          { label: 'Contract / freelance role', value: 'contract' },
          { label: 'Full-time position', value: 'fulltime' },
          { label: 'Fixed-scope project', value: 'project' },
          { label: 'Architecture consulting', value: 'consulting' },
          { label: 'Something else', value: 'other' },
        ]}
      />

      {/* Message */}
      <Textarea
        id="contact-message"
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Tell me about the project, timeline, and stack..."
        label="Message"
        required
        lines={6}
      />

      <Button
        type="submit"
        variant="primary"
        size="m"
        disabled={state === 'submitting'}
        style={{ alignSelf: 'flex-start' }}
      >
        {state === 'submitting' ? 'Sending...' : 'Send message →'}
      </Button>
    </Column>
  )
}
