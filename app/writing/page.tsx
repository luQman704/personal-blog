import WritingList    from '@/components/WritingList'
import SectionDivider from '@/components/SectionDivider'
import { getPosts }   from '@/lib/posts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Writing — Lukmon Awoyemi',
}

export default async function WritingPage() {
  const posts = await getPosts()

  return (
    <div style={{ paddingBottom: '80px' }}>
      <div className="mx-auto max-w-content px-5 md:px-10 pt-12 md:pt-16 pb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px" style={{ backgroundColor: 'var(--rust)' }} />
          <span
            className="text-xs tracking-widest uppercase font-medium"
            style={{ color: 'var(--rust)' }}
          >
            All articles
          </span>
        </div>
        <h1
          className="font-serif font-medium tracking-tight"
          style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--ink)' }}
        >
          Writing
        </h1>
        <p
          className="mt-4 text-base"
          style={{ color: 'var(--ink-muted)', maxWidth: '480px' }}
        >
          Enterprise Drupal, architecture decisions, full-stack patterns, and
          occasional deep dives into things that broke in production.
        </p>
      </div>

      <SectionDivider label={`${posts.length} article${posts.length !== 1 ? 's' : ''}`} />
      <WritingList posts={posts} />
    </div>
  )
}
