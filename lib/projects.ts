export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  category: 'Drupal' | 'Full Stack' | 'Open Source' | 'Tool'
  status: 'Live' | 'In Progress' | 'Archived'
  year: string
  liveUrl?: string
  repoUrl?: string
  highlights: string[]
  /** Paths relative to /public — shown in the card carousel */
  images?: string[]
  /** Show on homepage featured section */
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'vgn',
    title: 'VGN — Vereniging Gehandicaptenzorg Nederland',
    description:
      'Drupal-powered institutional website for VGN, the Dutch national association for disability care providers. Custom theme, content types, and accessible front-end components.',
    longDescription:
      'Built for Ronder Digital. Developed custom Drupal theme components via Figma-to-Twig workflow, structured content types for policy publications, and optimised Core Web Vitals across the platform.',
    tags: ['Drupal', 'Twig', 'PHP', 'Figma', 'WCAG 2.1', 'Netherlands'],
    category: 'Drupal',
    status: 'Live',
    year: '2024',
    liveUrl: 'https://www.vgn.nl/',
    images: ['/images/projects/vgn.png'],
    featured: true,
    highlights: [
      'Figma-to-Twig pixel-perfect theming for accessibility-first audience',
      'Custom content types for policy and sector publications',
      'WCAG 2.1 AA compliance across all template components',
      'Core Web Vitals optimisation via caching and asset pipeline',
    ],
  },
  {
    id: 'landschap',
    title: 'Landschap Noord-Holland',
    description:
      'Nature conservation organisation website. Drupal CMS with custom theming, nature reserve content architecture, and event/activity listings.',
    longDescription:
      'Developed for Ronder Digital. Translated a rich Figma design system into Drupal Twig templates, built structured content for nature reserves and recreational routes, and tuned front-end performance.',
    tags: ['Drupal', 'Twig', 'PHP', 'Figma', 'Netherlands'],
    category: 'Drupal',
    status: 'Live',
    year: '2024',
    liveUrl: 'https://www.landschapnoordholland.nl/',
    images: ['/images/projects/landschap.png'],
    featured: true,
    highlights: [
      'Rich Figma design system translated to Drupal Twig templates',
      'Structured content types for nature reserves and walking routes',
      'Event and activity listing with Views-based filtering',
      'Frontend performance optimisation — improved LCP and CLS scores',
    ],
  },
  {
    id: 'milo',
    title: 'Wij Zijn Milo',
    description:
      'Drupal website for Milo, a Dutch communication aid organisation. Campaign-style design, custom theme, and accessible content architecture for AAC users.',
    longDescription:
      'Built for Ronder Digital. Developed an accessible, vibrant Drupal theme from Figma, with a focus on readability and usability for users with communication support needs.',
    tags: ['Drupal', 'Twig', 'PHP', 'Accessibility', 'Netherlands'],
    category: 'Drupal',
    status: 'Live',
    year: '2024',
    liveUrl: 'https://www.wijzijnmilo.nl/',
    images: ['/images/projects/milo.png'],
    featured: true,
    highlights: [
      'Accessible, high-contrast Drupal theme for AAC support users',
      'Campaign landing pages with flexible Paragraphs-based layout',
      'WCAG 2.1 AA compliance throughout',
      'Figma-to-Drupal Twig workflow with designer collaboration',
    ],
  },
  {
    id: 'mtn-play',
    title: 'MTN Play Nigeria',
    description:
      'Digital entertainment platform for MTN Nigeria serving millions of users. Headless Drupal backend with REST and JSON:API endpoints consumed by a React frontend.',
    longDescription:
      'Worked via Ekfrazo. Led Drupal backend development — custom modules for content workflow, user permissions, and API response shaping. Built React components including a custom audio player with playback state management.',
    tags: ['Drupal', 'React', 'JSON:API', 'REST API', 'PHP', 'Nigeria'],
    category: 'Full Stack',
    status: 'Live',
    year: '2024–2025',
    liveUrl: 'https://play.mtn.ng/',
    images: ['/images/projects/mtn-play.png'],
    highlights: [
      'Custom Drupal modules for content workflow and permission shaping',
      'React audio player with full playback state management',
      'JSON:API endpoint design aligned with frontend consumption contracts',
      'Production releases across millions of active users',
    ],
  },
  {
    id: 'wto-tams',
    title: 'WTO TAMS — Technical Assistance Management',
    description:
      'Enterprise Drupal platform for the WTO\'s Technical Assistance Management System. SAML SSO, custom REST API, and Drupal 10→11 upgrade planning across multiple workstreams.',
    longDescription:
      'Architected and maintained TAMS alongside STDF, TPRQA, and EIF workstreams. Built custom REST resource plugins, implemented SAML/ADFS SSO via samlauth, and planned the Drupal 10→11 upgrade path.',
    tags: ['Drupal', 'REST API', 'SAML', 'PHP', 'Pantheon', 'Config Split'],
    category: 'Drupal',
    status: 'Live',
    year: '2021–present',
    liveUrl: 'https://tams.wto.org/',
    images: ['/images/projects/wto-tprqa.png'],
    highlights: [
      'SAML/ADFS SSO — migrated legacy Drupal 7 SimpleSAMLphp to Pantheon',
      'Custom REST resource plugins with deadline calculation logic (DL1/DL2/DL3)',
      'Drupal 10→11 upgrade: module compatibility audit, Jira epics, migration path',
      'Config Split for multi-environment configuration management',
    ],
  },
  {
    id: 'fish-fund',
    title: 'WTO Fish Fund Grant Application',
    description:
      'Multilingual grant application system for the WTO Fish Subsidies Fund. Custom Drupal webform handler, PDF generation, and multi-language email notifications.',
    longDescription:
      'Built fishfund_contact_handler (WebformHandlerBase) to resolve persistent email failures, restored reliable multilingual confirmations, and led YAML/Twig/PO translation workflow across 6 languages.',
    tags: ['Drupal', 'PHP', 'Webform', 'i18n', 'PDF', 'Twig'],
    category: 'Drupal',
    status: 'Live',
    year: '2023–2024',
    liveUrl: 'https://www.standardsfacility.org/',
    images: ['/images/projects/fish-fund.png'],
    highlights: [
      'Custom fishfund_contact_handler module (WebformHandlerBase)',
      'Restored multilingual email confirmations across 6 languages',
      'YAML updates, Twig customisation, and PO file translation workflow',
      'Server-side PDF generation from submitted webform data',
    ],
  },
  {
    id: 'lukmon-dev',
    title: 'Lukmon.dev — This Site',
    description:
      'Personal portfolio and blog. Headless Drupal backend, Next.js 16 App Router frontend, Once UI design system, deployed on Pantheon + Vercel.',
    longDescription:
      'Built to demonstrate headless Drupal architecture. Drupal manages content via JSON:API; Next.js handles rendering with ISR. Styled with Once UI.',
    tags: ['Next.js', 'Drupal', 'TypeScript', 'Once UI', 'Vercel', 'Pantheon'],
    category: 'Full Stack',
    status: 'In Progress',
    year: '2026',
    liveUrl: 'https://lukmon.dev',
    images: ['/images/projects/lukmon-dev.png'],
    highlights: [
      'Headless Drupal + Next.js App Router with ISR',
      'Once UI design system — magic-portfolio architecture',
      'Drupal JSON:API with cache tag purge webhooks',
      'Deployed on Vercel (frontend) + Pantheon (CMS)',
    ],
  },
  {
    id: 'job-crawler',
    title: 'Drupal Job Crawler',
    description:
      'Mac desktop app that crawls job boards for Drupal roles, uses Claude API to draft tailored cover letters, and manages applications in a SQLite database.',
    longDescription:
      'Node.js Electron app with a browser-based dashboard, AppleScript Mac Mail integration for one-click email sending, and Claude API-powered cover letter generation.',
    tags: ['Node.js', 'Electron', 'SQLite', 'Claude API', 'AppleScript'],
    category: 'Tool',
    status: 'In Progress',
    year: '2025',
    highlights: [
      'Automated job board scraping (Drupal.org, Indeed, LinkedIn)',
      'Claude API cover letter generation — tailored per job description',
      'AppleScript Mac Mail integration — one click to send',
      'SQLite application tracking with status dashboard',
    ],
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export const projectsByCategory = {
  all:           projects,
  Drupal:        projects.filter((p) => p.category === 'Drupal'),
  'Full Stack':  projects.filter((p) => p.category === 'Full Stack'),
  Tool:          projects.filter((p) => p.category === 'Tool'),
  'Open Source': projects.filter((p) => p.category === 'Open Source'),
}
