'use client';


import Link from 'next/link'

const footerLinks = [
  { label: 'GitHub',     href: '/'      },
  { label: 'LinkedIn',   href: 'www.linkedin.com/in/lukmon-awoyemi-559659120'  },
  { label: 'Drupal.org', href: '/'             },
  { label: 'CV',         href: '/cv'                                     },
  { label: 'RSS',        href: '/feed.xml'                               },
]

export default function Footer() {
  return (
    <footer className="mt-24 border-t px-5 md:px-10 py-10 md:py-12" style={{ borderColor: 'var(--border)' }}>
      <div className="mx-auto max-w-content flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

        <span className="font-serif italic text-base" style={{ color: 'var(--ink)' }}>
          Lukmon Awoyemi
        </span>

        {/* Links — wrap on small screens */}
        <div className="flex flex-wrap justify-center gap-5 md:gap-7">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm transition-colors duration-200"
              style={{ color: 'var(--ink-muted)', textDecoration: 'none' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--ink)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--ink-muted)' }}
              {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <span className="text-xs font-mono" style={{ color: 'var(--ink-muted)' }}>
          © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}
