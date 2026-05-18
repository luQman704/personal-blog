'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { label: 'Home',     href: '/'         },
  { label: 'Writing',  href: '/writing'  },
  { label: 'Projects', href: '/projects' },
  { label: 'About',    href: '/about'    },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{ backgroundColor: 'var(--cream)', borderColor: 'var(--border)' }}
    >
      <div className="mx-auto max-w-content flex h-16 items-center justify-between px-5 md:px-10">

        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-lg font-medium tracking-tight"
          style={{ color: 'var(--ink)' }}
        >
          Lukmon <span style={{ color: 'var(--rust)' }}>Awoyemi</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs tracking-widest uppercase transition-colors duration-200"
                style={{ color: pathname === link.href ? 'var(--ink)' : 'var(--ink-muted)' }}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="text-sm font-medium border px-4 py-2 transition-all duration-200"
              style={{ color: 'var(--rust)', borderColor: 'var(--rust)', borderRadius: '2px' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.backgroundColor = 'var(--rust)'
                el.style.color = 'var(--cream)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.backgroundColor = 'transparent'
                el.style.color = 'var(--rust)'
              }}
            >
              Hire me
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-px transition-all duration-200"
            style={{
              backgroundColor: 'var(--ink)',
              transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none',
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-200"
            style={{
              backgroundColor: 'var(--ink)',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-200"
            style={{
              backgroundColor: 'var(--ink)',
              transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-5 py-4 flex flex-col gap-4"
          style={{ backgroundColor: 'var(--cream)', borderColor: 'var(--border)' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase"
              style={{ color: pathname === link.href ? 'var(--ink)' : 'var(--ink-muted)' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium border px-4 py-2 text-center mt-1"
            style={{ color: 'var(--rust)', borderColor: 'var(--rust)', borderRadius: '2px' }}
          >
            Hire me
          </Link>
        </div>
      )}
    </nav>
  )
}
