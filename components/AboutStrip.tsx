'use client';


import Link from 'next/link'

export default function AboutStrip() {
  return (
    <section className="mx-auto max-w-content px-5 md:px-10 mt-16 md:mt-20 animate-fade-up delay-300">
      <div
        className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 lg:gap-16 items-center px-8 md:px-16 py-10 md:py-14"
        style={{ backgroundColor: 'var(--forest)', borderRadius: '2px' }}
      >
        {/* Left */}
        <div>
          <h2
            className="font-serif font-medium leading-tight tracking-tight mb-5 text-3xl md:text-[34px]"
            style={{ color: 'var(--cream)' }}
          >
            Enterprise Drupal,{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>done properly</em>
          </h2>
          <p className="text-base leading-relaxed" style={{ color: 'rgba(247,244,238,0.7)' }}>
            I've spent seven years building platforms that serve ministers, diplomats and
            international trade organisations. I know what breaks at scale, what Drupal
            can and can't do, and how to ship without drama. Available for senior
            contract and full-time roles.
          </p>
        </div>

        {/* Right — full width on mobile, fixed width on lg */}
        <div className="flex flex-row lg:flex-col gap-3">
          <Link
            href="/cv"
            className="flex-1 lg:flex-none block text-center text-sm font-medium py-3 px-6 transition-colors duration-200"
            style={{ backgroundColor: 'var(--cream)', color: 'var(--forest)', borderRadius: '2px', textDecoration: 'none' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--gold)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--cream)' }}
          >
            View my CV →
          </Link>
          <Link
            href="/projects"
            className="flex-1 lg:flex-none block text-center text-sm py-3 px-6 border transition-colors duration-200"
            style={{ color: 'var(--cream)', borderColor: 'rgba(247,244,238,0.3)', borderRadius: '2px', textDecoration: 'none' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--cream)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(247,244,238,0.3)' }}
          >
            See projects
          </Link>
        </div>
      </div>
    </section>
  )
}
