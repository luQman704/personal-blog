'use client'

import { useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm]   = useState({ name: '', email: '', budget: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState('submitting')
    // TODO: wire to your API route at /api/contact
    // For now, simulate a short delay
    await new Promise((r) => setTimeout(r, 800))
    setState('success')
  }

  const inputStyle = {
    width: '100%',
    backgroundColor: 'var(--cream)',
    borderColor: 'var(--border-strong)',
    color: 'var(--ink)',
    borderRadius: '2px',
    fontFamily: 'var(--font-sans)',
    fontSize: '15px',
  }

  if (state === 'success') {
    return (
      <div
        className="border p-10 text-center"
        style={{ backgroundColor: 'var(--cream-dark)', borderColor: 'var(--border)', borderRadius: '2px' }}
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ backgroundColor: 'rgba(45,74,62,0.1)' }}
        >
          <span style={{ color: 'var(--forest)', fontSize: '20px' }}>✓</span>
        </div>
        <h3 className="font-serif font-medium text-xl mb-2" style={{ color: 'var(--ink)' }}>
          Message sent
        </h3>
        <p className="text-sm" style={{ color: 'var(--ink-muted)' }}>
          I'll get back to you within 1–2 business days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-xs tracking-widest uppercase font-medium" style={{ color: 'var(--ink-muted)' }}>
            Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="border px-4 py-3 outline-none transition-colors duration-200"
            style={inputStyle}
            onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'var(--rust)' }}
            onBlur={(e)  => { (e.target as HTMLInputElement).style.borderColor = 'var(--border-strong)' }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs tracking-widest uppercase font-medium" style={{ color: 'var(--ink-muted)' }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            className="border px-4 py-3 outline-none transition-colors duration-200"
            style={inputStyle}
            onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'var(--rust)' }}
            onBlur={(e)  => { (e.target as HTMLInputElement).style.borderColor = 'var(--border-strong)' }}
          />
        </div>
      </div>

      {/* Budget / engagement type */}
      <div className="flex flex-col gap-2">
        <label className="text-xs tracking-widest uppercase font-medium" style={{ color: 'var(--ink-muted)' }}>
          Engagement type
        </label>
        <select
          name="budget"
          value={form.budget}
          onChange={handleChange}
          className="border px-4 py-3 outline-none transition-colors duration-200"
          style={{ ...inputStyle, cursor: 'pointer' }}
          onFocus={(e) => { (e.target as HTMLSelectElement).style.borderColor = 'var(--rust)' }}
          onBlur={(e)  => { (e.target as HTMLSelectElement).style.borderColor = 'var(--border-strong)' }}
        >
          <option value="">Select one...</option>
          <option value="contract">Contract / freelance role</option>
          <option value="fulltime">Full-time position</option>
          <option value="project">Fixed-scope project</option>
          <option value="consulting">Architecture consulting</option>
          <option value="other">Something else</option>
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label className="text-xs tracking-widest uppercase font-medium" style={{ color: 'var(--ink-muted)' }}>
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about the project, timeline, and stack..."
          required
          rows={6}
          className="border px-4 py-3 outline-none transition-colors duration-200 resize-none"
          style={inputStyle}
          onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = 'var(--rust)' }}
          onBlur={(e)  => { (e.target as HTMLTextAreaElement).style.borderColor = 'var(--border-strong)' }}
        />
      </div>

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="px-8 py-3.5 text-sm font-medium transition-all duration-200 self-start disabled:opacity-60"
        style={{
          backgroundColor: 'var(--ink)',
          color: 'var(--cream)',
          borderRadius: '2px',
          border: 'none',
          cursor: state === 'submitting' ? 'not-allowed' : 'pointer',
          fontFamily: 'var(--font-sans)',
        }}
        onMouseEnter={(e) => {
          if (state !== 'submitting') (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--forest)'
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--ink)'
        }}
      >
        {state === 'submitting' ? 'Sending...' : 'Send message →'}
      </button>

    </form>
  )
}
