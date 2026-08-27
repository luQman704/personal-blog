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
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'EIF — Enhanced Integrated Framework',
    description:
      'Enterprise Drupal 10 platform for the WTO\'s trade development programme. Multilingual, high-traffic, serving ministers and trade officials across 46 LDCs.',
    longDescription:
      'Full Drupal 10 rebuild including custom webform handlers, Paragraphs-based layout system, multilingual content architecture, and Search API + Solr integration.',
    tags: ['Drupal', 'PHP', 'Solr', 'Paragraphs', 'Pantheon', 'Multilingual'],
    category: 'Drupal',
    status: 'Live',
    year: '2024–present',
    liveUrl: 'https://enhancedif.org',
    images: ['/images/projects/eif.png'],
    highlights: [
      'Custom WebformHandlerBase module for grant applications',
      'Multilingual PDF generation with per-language email notifications',
      'Solr deep pagination fix — recovered 800+ missing export records',
      'Drupal 11 upgrade proposal and phased migration plan',
    ],
  },
  {
    id: '2',
    title: 'WTO TPRQA — Trade Policy Review',
    description:
      'REST API-driven Drupal platform for WTO trade policy question-and-answer workflows. SAML dual-authentication for WTO staff and external delegates.',
    longDescription:
      'Built REST API endpoints for TPR question/answer workflows, implemented dual SAML authentication with two identity providers, and developed a custom ga_analytics_tracker module replacing Google Analytics.',
    tags: ['Drupal', 'REST API', 'SAML', 'PHP', 'Jira'],
    category: 'Drupal',
    status: 'Live',
    year: '2023–present',
    images: ['/images/projects/wto-tprqa.png'],
    highlights: [
      'Dual SAML authentication — WTO staff + external delegates',
      'Custom REST API for Q&A workflow management',
      'ga_analytics_tracker module — GDPR-compliant, no third-party scripts',
      'Jira-integrated development workflow via WTOTPRQA24 project',
    ],
  },
  {
    id: '3',
    title: 'Lukmon.dev — This Blog',
    description:
      'Personal portfolio and blog. Headless Drupal backend, Next.js App Router frontend, deployed on Pantheon + Vercel.',
    longDescription:
      'Built to demonstrate headless Drupal architecture in a real-world context. Drupal manages content via JSON:API, Next.js handles rendering with ISR and static generation.',
    tags: ['Next.js', 'Drupal', 'TypeScript', 'Tailwind', 'Vercel', 'Pantheon'],
    category: 'Full Stack',
    status: 'In Progress',
    year: '2026',
    repoUrl: 'https://github.com/lukmon-awoyemi/lukmon-dev',
    images: ['/images/projects/lukmon-dev.png'],
    highlights: [
      'Headless Drupal + Next.js App Router',
      'ISR with Drupal cache tag purge webhooks',
      'MDX support for rich interactive post content',
      'Deployed on Vercel (frontend) + Pantheon (CMS)',
    ],
  },
  {
    id: '4',
    title: 'Drupal Job Crawler',
    description:
      'Mac desktop app that crawls job boards for Drupal roles, uses Claude API to draft tailored cover letters, and manages applications in a SQLite database.',
    longDescription:
      'Node.js Electron app with a browser-based dashboard, AppleScript Mac Mail integration for one-click email sending, and Claude API-powered cover letter generation based on job description analysis.',
    tags: ['Node.js', 'Electron', 'SQLite', 'Claude API', 'AppleScript'],
    category: 'Tool',
    status: 'Live',
    year: '2025',
    repoUrl: 'https://github.com/lukmon-awoyemi/drupal-job-crawler',
    highlights: [
      'Automated job board scraping (Drupal.org, Indeed, LinkedIn)',
      'Claude API cover letter generation — tailored per job description',
      'AppleScript Mac Mail integration — one click to send',
      'SQLite application tracking with status dashboard',
    ],
  },
  {
    id: '5',
    title: 'Fish Fund Grant Application',
    description:
      'Multilingual grant application system for WTO\'s Fish Subsidies Fund. React frontend, Drupal webform backend, PDF generation, and multi-language email notifications.',
    longDescription:
      'Complex multi-step grant application flow with React components embedded in Drupal via JSON:API. Handles 6 languages, server-side PDF generation, and conditional email routing per applicant country.',
    tags: ['React', 'Drupal', 'PHP', 'i18n', 'PDF', 'Webform'],
    category: 'Full Stack',
    status: 'Live',
    year: '2024',
    images: ['/images/projects/fish-fund.png'],
    highlights: [
      '6-language support using Drupal.t() internationalisation',
      'Server-side PDF generation from submitted form data',
      'Conditional email routing — applicant + reviewer + admin notifications',
      'React multi-step form embedded in Drupal via WebformHandlerBase',
    ],
  },
  {
    id: '6',
    title: 'PrestaShop Yoco Payment Migration',
    description:
      'PHP 8.2 compatibility migration and Yoco payment API integration for a South African e-commerce platform. Delivered under a fixed Upwork contract.',
    longDescription:
      'Identified and fixed PHP 8.2 deprecation breaks across a legacy PrestaShop module. Integrated Yoco\'s payment API as a new checkout option, with webhook handling for payment status updates.',
    tags: ['PHP 8.2', 'PrestaShop', 'REST API', 'Yoco', 'E-commerce'],
    category: 'Full Stack',
    status: 'Live',
    year: '2024',
    images: ['/images/projects/prestashop-yoco.png'],
    highlights: [
      'PHP 8.2 compatibility — fixed 40+ deprecation warnings and breaks',
      'Yoco payment API integration with webhook status handling',
      'Delivered on time under fixed-price Upwork contract',
      'Client: Performance Products, South Africa',
    ],
  },
]

export const projectsByCategory = {
  all:        projects,
  Drupal:     projects.filter((p) => p.category === 'Drupal'),
  'Full Stack': projects.filter((p) => p.category === 'Full Stack'),
  Tool:       projects.filter((p) => p.category === 'Tool'),
  'Open Source': projects.filter((p) => p.category === 'Open Source'),
}
