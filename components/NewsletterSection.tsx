'use client'

import { useState } from 'react'

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
    <section className="mx-auto max-w-col px-5 md:px-10 mt-16 md:mt-20 text-center">
      <h3
        className="font-serif font-medium tracking-tight mb-3 text-2xl md:text-[28px]"
        style={{ color: 'var(--ink)' }}
      >
          Newsletter coming soon!
      </h3>
      <p className="text-base mb-7" style={{ color: 'var(--ink-muted)' }}>
        Enterprise Drupal, architecture, and the things I wish someone had told me.
        Once or twice a month.
      </p>

      {submitted ? (
        <p className="text-sm font-medium" style={{ color: 'var(--forest)' }}>
          ✓ You're in. Talk soon.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          /* stacks vertically on mobile, row on sm+ */
          className="flex flex-col sm:flex-row mx-auto gap-2 sm:gap-0"
          style={{ maxWidth: '440px' }}
        >
          <input
            type="email"
            value={email}
            disabled
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 border px-4 py-3 text-base outline-none transition-colors duration-200"
            style={{
              backgroundColor: 'var(--cream)',
              borderColor: 'var(--border-strong)',
              color: 'var(--ink)',
              /* on mobile: full border + full radius; on sm: remove right border + right radius */
              borderRadius: '2px',
              fontFamily: 'var(--font-sans)',
            }}
            onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'var(--rust)' }}
            onBlur={(e)  => { (e.target as HTMLInputElement).style.borderColor = 'var(--border-strong)' }}
          />
          <button
              disabled
            type="submit"
            className="px-6 py-3 text-sm font-medium transition-colors duration-200 cursor-pointer border-none"
            style={{
              backgroundColor: 'var(--rust)',
              color: 'var(--cream)',
              borderRadius: '2px',
              fontFamily: 'var(--font-sans)',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--ink)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--rust)' }}
          >
            Subscribe
          </button>
        </form>
      )}
    </section>
  )
}
