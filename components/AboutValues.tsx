const values = [
  {
    title: 'Clarity over cleverness',
    body:
      'The best code is the code the next developer can understand at 2am on a Friday. I optimise for readability and maintainability first, performance second.',
  },
  {
    title: 'Real constraints, real solutions',
    body:
      'Enterprise systems have weird requirements, legacy debt, and political constraints. I\'ve learned to find the clean path within the messy reality rather than pretending it doesn\'t exist.',
  },
  {
    title: 'Physics intuition in software',
    body:
      'My physics background means I instinctively look for the underlying model — the invariants, the energy flows, the equilibrium states. It makes debugging faster and architecture cleaner.',
  },
  {
    title: 'Ship, then improve',
    body:
      'Perfectionism is a liability on production systems. I believe in shipping working software, instrumenting it well, and iterating based on real data rather than predicted problems.',
  },
]

export default function AboutValues() {
  return (
    <section className="mx-auto max-w-content px-5 md:px-10 mt-16 md:mt-20">
      <h2
        className="font-serif font-medium tracking-tight mb-10 text-2xl md:text-3xl"
        style={{ color: 'var(--ink)' }}
      >
        How I work
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {values.map((v, i) => (
          <div
            key={i}
            className="p-7 border"
            style={{
              backgroundColor: i % 2 === 0 ? 'var(--cream-dark)' : 'var(--cream)',
              borderColor: 'var(--border)',
              borderRadius: '2px',
            }}
          >
            <h3
              className="font-serif font-medium text-lg mb-3"
              style={{ color: 'var(--ink)' }}
            >
              {v.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-light)', lineHeight: '1.75' }}>
              {v.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
