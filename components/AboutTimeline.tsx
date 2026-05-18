const timeline = [
  {
    period: '2024 – present',
    role: 'Senior Drupal Developer',
    company: 'Ronder Digital / Softescu',
    description:
      'Leading Drupal 10 development across WTO enterprise platforms — EIF, STDF, TPRQA, Fish Fund, and TAMS. Custom module development, SAML authentication, REST APIs, and Drupal 11 upgrade planning.',
    tags: ['Drupal 10', 'PHP', 'REST API', 'SAML', 'Pantheon'],
  },
  {
    period: '2023 – 2024',
    role: 'Full Stack Developer',
    company: 'Proxify / Upwork (Freelance)',
    description:
      'Contract engagements including a specialty chemicals distributor platform and a South African e-commerce PrestaShop migration to PHP 8.2 with Yoco payment integration.',
    tags: ['PHP 8.2', 'PrestaShop', 'React', 'Laravel'],
  },
  {
    period: '2021 – 2023',
    role: 'Drupal Developer',
    company: 'Solutions Processors Inc., Miami',
    description:
      'Drupal 8/9 development for US-based clients. Custom theme development, module development, CMS migrations, and performance optimisation.',
    tags: ['Drupal 9', 'PHP', 'JavaScript', 'MySQL'],
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
    role: 'BSc Physics',
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
