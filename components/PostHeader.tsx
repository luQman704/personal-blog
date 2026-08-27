'use client';


import Link from 'next/link'
import type { Post } from '@/types'

interface PostHeaderProps {
  post: Post
}

export default function PostHeader({ post }: PostHeaderProps) {
  return (
    <header className="mx-auto max-w-col px-5 md:px-10 pt-12 md:pt-16">
      {/* Back + category */}
      <div className="flex items-center gap-4 mb-7" style={{ color: 'var(--ink-muted)' }}>
        <Link
          href="/writing"
          className="flex items-center gap-1.5 text-sm transition-colors duration-200"
          style={{ color: 'var(--ink-muted)', textDecoration: 'none' }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--ink)' }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--ink-muted)' }}
        >
          ← Back to writing
        </Link>
        <span className="w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--ink-muted)' }} />
        <span className="text-sm">{post.category}</span>
      </div>

      {/* Title */}
      <h1
        className="font-serif font-medium leading-tight tracking-tight mb-6"
        style={{ fontSize: 'clamp(26px, 4vw, 44px)', color: 'var(--ink)' }}
      >
        {post.title}
      </h1>

      {/* Byline — stack on very small, row on sm+ */}
      <div
        className="flex flex-col sm:flex-row sm:items-center gap-4 py-5 border-t border-b mb-10 md:mb-12"
        style={{ borderColor: 'var(--border)' }}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-serif italic text-base flex-shrink-0"
          style={{ backgroundColor: 'var(--forest)', color: 'var(--cream)' }}
        >
          LA
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium" style={{ color: 'var(--ink)' }}>Lukmon Awoyemi</p>
          <p className="text-sm" style={{ color: 'var(--ink-muted)' }}>{post.date} · Wickford, Essex</p>
        </div>
        <span className="text-xs font-mono self-start sm:self-auto" style={{ color: 'var(--ink-muted)' }}>
          {post.readTime}
        </span>
      </div>
    </header>
  )
}
