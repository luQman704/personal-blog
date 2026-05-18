import AboutHero      from '@/components/AboutHero'
import AboutTimeline  from '@/components/AboutTimeline'
import AboutValues    from '@/components/AboutValues'
import SectionDivider from '@/components/SectionDivider'
import NewsletterSection from '@/components/NewsletterSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Lukmon Awoyemi',
  description: 'Senior Drupal developer, Physics graduate, MSc Computer Science. Based in Wickford, Essex.',
}

export default function AboutPage() {
  return (
    <div className="pb-20">
      <AboutHero />
      <SectionDivider label="Career & education" />
      <AboutTimeline />
      <div className="mt-16">
        <SectionDivider label="How I work" />
      </div>
      <AboutValues />
      <div className="mt-16">
        <NewsletterSection />
      </div>
    </div>
  )
}
