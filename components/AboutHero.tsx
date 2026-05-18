export default function AboutHero() {
  return (
    <section className="mx-auto max-w-content px-5 md:px-10 pt-12 md:pt-16 pb-10">
      {/* two col on md+, stacked on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-10 md:gap-16 items-start">

        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ backgroundColor: 'var(--rust)' }} />
            <span className="text-xs tracking-widest uppercase font-medium" style={{ color: 'var(--rust)' }}>
              About me
            </span>
          </div>

          <h1
            className="font-serif font-medium leading-tight tracking-tight mb-6"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--ink)' }}
          >
            Developer, writer,{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--rust)' }}>problem solver</em>
          </h1>

          <div className="flex flex-col gap-5 text-base leading-relaxed" style={{ color: 'var(--ink-light)', maxWidth: '580px' }}>
            <p>
              I'm Lukmon Awoyemi — a Senior Drupal and full-stack developer based in Wickford,
              Essex. I've spent six years building enterprise platforms for organisations
              that can't afford downtime: the World Trade Organization, MTN Nigeria, and
              international NGOs operating in 46 least-developed countries.
            </p>
            <p>
              My background is in Physics — I graduated first in my class from Lagos State
              University — and I still approach software the same way I approached circuits
              and waves: find the underlying model, understand the constraints, then find
              the cleanest path through.
            </p>
            <p>
              I'm currently completing an MSc in Computer Science at the University of
              Hertfordshire (graduating September 2026), building this blog as a headless
              Drupal + Next.js project, and available for senior contract and full-time roles.
            </p>
          </div>
        </div>

        {/* Avatar / initials */}
        <div className="flex md:justify-end">
          <div
            className="w-40 h-40 md:w-48 md:h-48 rounded-sm flex items-center justify-center font-serif italic"
            style={{
              backgroundColor: 'var(--forest)',
              color: 'var(--cream)',
              fontSize: '48px',
              borderRadius: '4px',
            }}
          >
            LA
          </div>
        </div>

      </div>
    </section>
  )
}
