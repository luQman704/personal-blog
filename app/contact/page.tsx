'use client';

import ContactForm    from '@/components/ContactForm'
import SectionDivider from '@/components/SectionDivider'
import type { Metadata } from 'next'
import metadata from "@/components/metadata";



const availability = [
  { label: 'Status',       value: 'Available from May 2026'          },
  { label: 'Preference',   value: 'Remote or hybrid (UK/EU)'         },
  { label: 'Rate',         value: 'On request'                       },
  { label: 'Notice',       value: '2 weeks'                          },
  { label: 'Response',     value: 'Within 1–2 business days'         },
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
    <div className="pb-20">
      {/* Page header */}
      <div className="mx-auto max-w-content px-5 md:px-10 pt-12 md:pt-16 pb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px" style={{ backgroundColor: 'var(--rust)' }} />
          <span className="text-xs tracking-widest uppercase font-medium" style={{ color: 'var(--rust)' }}>
            Get in touch
          </span>
        </div>
        <h1
          className="font-serif font-medium tracking-tight"
          style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--ink)' }}
        >
          Hire me
        </h1>
        <p className="mt-4 text-base max-w-lg" style={{ color: 'var(--ink-muted)' }}>
          I'm available for senior Drupal contract roles, full-stack projects, and
          architecture consulting. If you're building something serious, let's talk.
        </p>
      </div>

      <SectionDivider label="Availability" />

      {/* Main grid — form + sidebar */}
      <div className="mx-auto max-w-content px-5 md:px-10 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-16">

          {/* ── Form ── */}
          <div>
            <h2 className="font-serif font-medium text-xl mb-8" style={{ color: 'var(--ink)' }}>
              Send a message
            </h2>
            <ContactForm />
          </div>

          {/* ── Sidebar ── */}
          <div className="flex flex-col gap-6">
            {/* Availability card */}
            <div
              className="border p-6"
              style={{ backgroundColor: 'var(--cream-dark)', borderColor: 'var(--border)', borderRadius: '2px' }}
            >
              <p className="text-xs tracking-widest uppercase font-medium mb-5" style={{ color: 'var(--ink-muted)' }}>
                Availability
              </p>
              {availability.map((item, i) => (
                <div
                  key={item.label}
                  className="flex justify-between py-2.5"
                  style={{ borderBottom: i < availability.length - 1 ? '1px solid var(--border)' : 'none' }}
                >
                  <span className="text-sm" style={{ color: 'var(--ink-muted)' }}>{item.label}</span>
                  <span className="text-sm font-medium text-right" style={{ color: 'var(--ink)' }}>{item.value}</span>
                </div>
              ))}
            </div>

            {/* Direct contact */}
            <div
              className="border p-6"
              style={{ backgroundColor: 'var(--cream)', borderColor: 'var(--border)', borderRadius: '2px' }}
            >
              <p className="text-xs tracking-widest uppercase font-medium mb-5" style={{ color: 'var(--ink-muted)' }}>
                Direct contact
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:lukmon@lukmon.dev"
                  className="text-sm transition-colors duration-200"
                  style={{ color: 'var(--rust)', textDecoration: 'none' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--ink)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--rust)' }}
                >
                  lukmon@lukmon.dev
                </a>
                <a
                  href="https://linkedin.com/in/lukmon-awoyemi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-200"
                  style={{ color: 'var(--ink-muted)', textDecoration: 'none' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--ink)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--ink-muted)' }}
                >
                  LinkedIn ↗
                </a>
                <a
                  href="https://github.com/lukmon-awoyemi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-200"
                  style={{ color: 'var(--ink-muted)', textDecoration: 'none' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--ink)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--ink-muted)' }}
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Services */}
      <div className="mt-20">
        <SectionDivider label="What I can help with" />
      </div>
      <section className="mx-auto max-w-content px-5 md:px-10 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-7 border"
              style={{
                backgroundColor: 'var(--cream)',
                borderColor: 'var(--border)',
                borderRadius: '2px',
              }}
            >
              <h3 className="font-serif font-medium text-lg mb-3" style={{ color: 'var(--ink)' }}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-light)', lineHeight: '1.75' }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
