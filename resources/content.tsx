import { Row, Text } from '@once-ui-system/core'

export const person = {
  firstName: 'Lukmon',
  lastName:  'Awoyemi',
  name:      'Lukmon Awoyemi',
  role:      'Senior Drupal & Full Stack Developer',
  avatar:    '/images/avatar.jpg',
  email:     'lukmon@lukmon.dev',
  location:  'Europe/London',
  languages: ['English'],
  locale:    'en',
}

export const social = [
  { name: 'GitHub',     icon: 'github',   link: 'https://github.com/lukmon-awoyemi',                   essential: true  },
  { name: 'LinkedIn',   icon: 'linkedin', link: 'https://www.linkedin.com/in/lukmon-awoyemi-559659120', essential: true  },
  { name: 'Email',      icon: 'email',    link: 'mailto:lukmon@lukmon.dev',                             essential: true  },
]

export const home = {
  path:        '/',
  image:       '/images/og/home.jpg',
  label:       'Home',
  title:       'Lukmon Awoyemi — Developer & Writer',
  description: 'Senior Drupal & full-stack developer with 7+ years shipping enterprise platforms for the WTO, MTN, and global NGOs.',
  headline:    <>Building <em>real things</em> for the enterprise web</>,
  featured:    { display: false, title: '', href: '/' },
  subline: (
    <>
      Senior Drupal &amp; full-stack developer with <strong>7+ years</strong> shipping
      production systems for the WTO, MTN, and global NGOs. I write about architecture,
      headless CMS, and the things I&apos;ve learned the hard way.
    </>
  ),
}

export const about = {
  path:        '/about',
  label:       'About',
  title:       'About — Lukmon Awoyemi',
  description: 'Senior Drupal & full-stack developer, Acquia Certified. Physics graduate, MSc Computer Science. Based in Wickford, Essex.',
  tableOfContent: { display: true,  subItems: false },
  avatar:         { display: true },
  calendar:       { display: false, link: '' },
  intro: {
    display: true,
    title: 'Introduction',
    description: (
      <>
        I&apos;m a Senior Drupal and full-stack developer based in Wickford, Essex, with seven years
        building enterprise platforms for organisations that can&apos;t afford downtime: the World Trade
        Organization, MTN Nigeria, and international NGOs operating across 46 least-developed countries.
        My background in Physics — I graduated as Best Physics Student from Lagos State University —
        shapes how I approach software: find the underlying model, understand the constraints, find
        the cleanest path through.
      </>
    ),
  },
  work: {
    display: true,
    title: 'Work Experience',
    experiences: [
      {
        company:   'Softescu',
        timeframe: 'Aug 2021 – Present',
        role:      'Senior Drupal & Full Stack Developer',
        achievements: [
          <>Key client: World Trade Organization — TAMS, STDF, TPRQA, EIF platforms.</>,
          <>Built custom REST resource plugins with complex deadline calculation logic for TPRQA submission workflows.</>,
          <>Implemented SAML/ADFS SSO via samlauth, including migrating a legacy Drupal 7 SimpleSAMLphp implementation to Pantheon.</>,
          <>Led multilingual webform development for STDF Fish Fund across 6 languages.</>,
          <>Planned Drupal 10 → 11 upgrade for TAMS: module compatibility audits, Jira epics, and phased migration path.</>,
          <>Debugged critical Solr search issues on Pantheon — restored site-wide search and recovered 800+ missing export records.</>,
        ],
        images: [],
      },
      {
        company:   'Fat Beehive',
        timeframe: 'May 2025 – Aug 2025',
        role:      'Full Stack Developer',
        achievements: [
          <>Drupal CMS backends for multiple UK client projects, custom module patches, and Drupal Commerce compatibility fixes.</>,
          <>Engineered custom patches for the Drupal Commerce module to ensure compatibility with React-driven checkout flows.</>,
          <>Performed Drupal version upgrades maintaining stable API contracts consumed by React frontends.</>,
        ],
        images: [],
      },
      {
        company:   'Ekfrazo — Contract for MTN Nigeria',
        timeframe: 'Sep 2024 – May 2025',
        role:      'Full Stack Developer',
        achievements: [
          <>Led Drupal backend development for MTN Play (play.mtn.ng), serving millions of users.</>,
          <>Built REST and JSON:API endpoints and custom content workflow modules.</>,
          <>Built React frontend components including a custom audio player integrated with Drupal JSON:API.</>,
        ],
        images: [],
      },
      {
        company:   'Ronder Digital',
        timeframe: 'May 2024 – Dec 2024',
        role:      'Web Developer',
        achievements: [
          <>Drupal-powered campaign and institutional websites for Dutch clients including VGN and Landschap Noord-Holland.</>,
          <>Figma-to-Twig workflows, custom themes, and Core Web Vitals optimisation.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: 'Education',
    institutions: [
      {
        name:        'University of Hertfordshire',
        description: <>MSc Computer Science (in progress, expected Aug 2026). Modules: Computer Architecture, Software Engineering, Database Systems, OS &amp; Networks Security.</>,
      },
      {
        name:        'Lagos State University',
        description: <>BSc Physics (2:1) — Best Graduating Physics Student, 2019. Analytical and modelling foundations that directly inform software architecture and debugging.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: 'Technical Skills',
    skills: [
      {
        title:       'Drupal (9/10/11)',
        description: <>Custom module development, Plugin API, Form API, Services &amp; DI, Twig theming, Views, Webforms, Workflows, Multisite, Multilingual, Config Split.</>,
        tags: [{ name: 'Drupal' }, { name: 'PHP 8' }, { name: 'Twig' }, { name: 'Drush' }],
        images: [],
      },
      {
        title:       'Integrations & APIs',
        description: <>REST API, JSON:API, SAML/ADFS SSO, Search API + Solr, Migrate API, Third-party API integrations.</>,
        tags: [{ name: 'REST API' }, { name: 'JSON:API' }, { name: 'SAML' }, { name: 'Solr' }],
        images: [],
      },
      {
        title:       'Frontend',
        description: <>React 18/19, Next.js, TypeScript, JavaScript ES6+, Tailwind CSS, WCAG 2.1 A/AA accessibility compliance.</>,
        tags: [{ name: 'React' }, { name: 'Next.js' }, { name: 'TypeScript' }],
        images: [],
      },
      {
        title:       'Platforms & DevOps',
        description: <>Pantheon, Acquia Cloud, Docker, Git/GitHub, CI/CD Pipelines, Lando, DDEV, Linux CLI, Composer.</>,
        tags: [{ name: 'Pantheon' }, { name: 'DDEV' }, { name: 'Docker' }],
        images: [],
      },
    ],
  },
}

export const writing = {
  path:        '/writing',
  label:       'Writing',
  title:       'Writing — Lukmon Awoyemi',
  description: 'Drupal architecture, PHP, headless CMS, and enterprise web development.',
}

export const projectsPage = {
  path:        '/projects',
  label:       'Projects',
  title:       'Projects — Lukmon Awoyemi',
  description: 'Enterprise Drupal platforms, full-stack apps, and open-source tools.',
}

export const newsletter = {
  display:     false,
  title:       <>Subscribe to Lukmon&apos;s newsletter</>,
  description: <>Infrequent writing on Drupal, headless CMS, and enterprise web architecture.</>,
}
