const timeline = [
  {
    period: 'Aug 2021 – present',
    role: 'Senior Drupal & Full Stack Developer',
    company: 'Softescu (Remote)',
    description:
      'Key client: World Trade Organization — TAMS, STDF, TPRQA, EIF platforms. Custom REST resource plugins, SAML/ADFS SSO, enterprise Drupal platform architecture, Config Split for multi-environment management, and Drupal 10 → 11 upgrade planning.',
    tags: ['Drupal', 'PHP', 'REST API', 'SAML', 'Pantheon', 'React'],
  },
  {
    period: 'May 2025 – Aug 2025',
    role: 'Full Stack Developer',
    company: 'Fat Beehive (Remote, UK)',
    description:
      'Drupal CMS backends for UK clients. Custom module patches, Drupal Commerce compatibility fixes for React checkout flows, Drupal version upgrades, and complex support ticket resolution across Drupal and React frontends.',
    tags: ['Drupal', 'PHP', 'React', 'Drupal Commerce'],
  },
  {
    period: 'Sep 2024 – May 2025',
    role: 'Full Stack Developer',
    company: 'Ekfrazo — Contract for MTN Nigeria (Remote)',
    description:
      'Led Drupal backend development for MTN Play (play.mtn.ng), a platform serving millions of users. Built REST and JSON:API endpoints, custom content workflow modules, and React frontend components including a custom audio player with Drupal JSON:API integration.',
    tags: ['Drupal', 'React', 'JSON:API', 'Node.js', 'PHP'],
  },
  {
    period: 'May 2024 – Dec 2024',
    role: 'Web Developer',
    company: 'Ronder Digital (Remote, Netherlands)',
    description:
      'Drupal-powered campaign and institutional websites for Dutch clients including VGN and Landschap Noord-Holland. Figma-to-Twig workflows, custom themes, content types, and Core Web Vitals optimisation.',
    tags: ['Drupal', 'Twig', 'PHP', 'Figma', 'SCSS'],
  },
  {
    period: '2026 (expected)',
    role: 'MSc Computer Science',
    company: 'University of Hertfordshire',
    description:
      'Modules include Computer Architecture, Software Engineering, Database Systems, OS & Networks Security, and a group project in core PHP/MySQL.',
    tags: ['Computer Science', 'Java', 'MySQL', 'Kali Linux'],
  },
  {
    period: '2019',
    role: 'BSc Physics (2:1)',
    company: 'Lagos State University',
    description:
      'Graduated as Best Physics Student. The analytical and modelling skills from physics directly inform how I approach software architecture and debugging.',
    tags: ['Physics', 'Best Graduate'],
  },
]

export default function AboutTimeline() {
  return (
    <section className="mx-auto max-w-content px-5 md:px-10 mt-16 md:mt-20">
      <h2
        className="font-serif font-medium tracking-tight mb-10 text-2xl md:text-3xl"
        style={{ color: 'var(--ink)' }}
      >
        Experience & education
      </h2>

      <div className="relative">
        {/* Vertical line — hidden on mobile */}
        <div
          className="absolute left-0 top-0 bottom-0 w-px hidden md:block"
          style={{ backgroundColor: 'var(--border)', left: '7px' }}
        />

        <div className="flex flex-col gap-10">
          {timeline.map((item, i) => (
            <div key={i} className="md:pl-10 relative">
              {/* Dot */}
              <div
                className="absolute hidden md:block w-3.5 h-3.5 rounded-full border-2 top-1"
                style={{
                  left: '0',
                  backgroundColor: 'var(--cream)',
                  borderColor: 'var(--rust)',
                }}
              />

              <p className="text-xs font-mono mb-1.5" style={{ color: 'var(--ink-muted)' }}>
                {item.period}
              </p>
              <h3
                className="font-serif font-medium text-lg leading-snug mb-0.5"
                style={{ color: 'var(--ink)' }}
              >
                {item.role}
              </h3>
              <p className="text-sm font-medium mb-3" style={{ color: 'var(--rust)' }}>
                {item.company}
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--ink-light)' }}>
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-0.5 border"
                    style={{
                      backgroundColor: 'var(--cream-dark)',
                      borderColor: 'var(--border)',
                      color: 'var(--ink-light)',
                      borderRadius: '2px',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
