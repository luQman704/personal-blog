'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { Post } from '@/types'

interface WritingListProps {
  posts: Post[]
}

export default function WritingList({ posts }: WritingListProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="mx-auto max-w-content px-5 md:px-10 mt-8 animate-fade-up delay-200">
      <div className="border-t" style={{ borderColor: 'var(--border)' }}>
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/writing/${post.slug}`}
            className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-5 border-b transition-all duration-200"
            style={{
              borderColor: 'var(--border)',
              textDecoration: 'none',
              paddingLeft: hoveredId === post.id ? '8px' : '0',
            }}
            onMouseEnter={() => setHoveredId(post.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Title + tag */}
            <div className="flex flex-wrap items-center gap-3 flex-1">
              <span className="font-serif text-base" style={{ color: 'var(--ink)' }}>
                {post.title}
              </span>
              {post.tags?.[0] && (
                <span
                  className="text-xs font-medium tracking-wide uppercase px-2 py-0.5"
                  style={{ color: 'var(--rust)', backgroundColor: 'var(--rust-light)', borderRadius: '2px' }}
                >
                  {post.tags[0]}
                </span>
              )}
            </div>

            {/* Date — right on desktop, left-aligned below title on mobile */}
            <span
              className="text-xs font-mono sm:whitespace-nowrap"
              style={{ color: 'var(--ink-muted)' }}
            >
              {post.date} · {post.readTime}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
