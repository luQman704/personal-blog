'use client';

import Link from 'next/link'

const stackTags = [
  { label: 'Drupal',    highlight: true  },
  { label: 'Next.js',   highlight: true  },
  { label: 'React',     highlight: false },
  { label: 'PHP 8',     highlight: false },
  { label: 'TypeScript',highlight: false },
  { label: 'Node.js',   highlight: false },
  { label: 'MySQL',     highlight: false },
  { label: 'Solr',      highlight: false },
  { label: 'Pantheon',  highlight: false },
  { label: 'DDEV',      highlight: false },
]

const stats = [
  { label: 'Based in',      value: 'Wickford, Essex, UK' },
  { label: 'Experience',    value: '7+ years'            },
  { label: 'Certification', value: 'Acquia D10'          },
  { label: 'MSc',           value: "Hertfordshire '26"   },
]

export default function HeroSection() {
  return (
    <section className="mx-auto max-w-content px-5 md:px-10 pt-12 md:pt-20 pb-10 md:pb-16 animate-fade-up">
      {/* one col on mobile, two on large screens */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-20">

        {/* ── Left ── */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ backgroundColor: 'var(--rust)' }} />
            <span className="text-xs tracking-widest uppercase font-medium" style={{ color: 'var(--rust)' }}>
              Acquia Certified · Drupal
            </span>
          </div>

          <h1
            className="font-serif font-medium leading-none tracking-tight mb-6"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)', color: 'var(--ink)' }}
          >
            Building{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--rust)' }}>real things</em>
            {' '}for the enterprise web
          </h1>

          <p
            className="text-base md:text-lg leading-relaxed mb-9 max-w-xl"
            style={{ color: 'var(--ink-light)' }}
          >
            Senior Drupal &amp; full-stack developer with 7+ years shipping production
            systems for the WTO, MTN, and global NGOs. I write about architecture,
            headless CMS, and the things I've learned the hard way.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              href="/writing"
              className="inline-block px-6 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-px"
              style={{ backgroundColor: 'var(--ink)', color: 'var(--cream)', borderRadius: '2px' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--forest)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--ink)' }}
            >
              Read latest post →
            </Link>
            <Link
              href="/projects"
              className="text-sm transition-colors duration-200"
              style={{ color: 'var(--ink-muted)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--ink)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--ink-muted)' }}
            >
              View projects →
            </Link>
          </div>
        </div>

        {/* ── Right sidebar — only visible on large screens ── */}
        <div className="hidden lg:block pt-2">
          <div
            className="border p-7 mb-5"
            style={{ backgroundColor: 'var(--cream-dark)', borderColor: 'var(--border)', borderRadius: '2px' }}
          >
            <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: 'var(--ink-muted)' }}>
              Current stack
            </p>
            <div className="flex flex-wrap gap-2">
              {stackTags.map((tag) => (
                <span
                  key={tag.label}
                  className="text-xs font-mono px-2.5 py-1 border"
                  style={{
                    borderRadius: '2px',
                    ...(tag.highlight
                      ? { backgroundColor: 'var(--rust-light)', borderColor: 'var(--rust)', color: 'var(--rust)' }
                      : { backgroundColor: 'var(--cream)', borderColor: 'var(--border-strong)', color: 'var(--ink-light)' }),
                  }}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          <div
            className="border p-7"
            style={{ backgroundColor: 'var(--cream-dark)', borderColor: 'var(--border)', borderRadius: '2px' }}
          >
            <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: 'var(--ink-muted)' }}>
              Quick facts
            </p>
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex justify-between py-2"
                style={{ borderBottom: i < stats.length - 1 ? '1px solid var(--border)' : 'none' }}
              >
                <span className="text-sm" style={{ color: 'var(--ink-muted)' }}>{stat.label}</span>
                <span className="text-sm font-medium" style={{ color: 'var(--ink)' }}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
