'use client';

import Link from 'next/link'
import type { Post } from '@/types'

interface PostCardProps {
  post: Post
  index: number
}

export default function PostCard({ post, index }: PostCardProps) {

  console.log(post);
  return (
    <Link
      href={`/writing/${post.slug}`}
      className="block p-8 transition-colors duration-200 no-underline"
      style={{ backgroundColor: 'var(--cream)', textDecoration: 'none' }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--cream-dark)'
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--cream)'
      }}
    >
      {/* Number */}
      <p
        className="font-mono text-xs tracking-wide mb-5"
        style={{ color: 'var(--border-strong)' }}
      >
        0{index + 1}
      </p>

      {/* Title */}
      <h3
        className="font-serif font-medium leading-snug tracking-tight mb-3"
        style={{ fontSize: '19px', color: 'var(--ink)' }}
      >
        {post.title}
      </h3>

      {/* Excerpt */}
      <p
        className="text-sm leading-relaxed mb-6"
        style={{ color: 'var(--ink-muted)', lineHeight: '1.65' }}
      >
        {post.excerpt}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span
          className="text-xs font-medium tracking-wide uppercase px-2.5 py-1 rounded-sm"
          style={{
            color: 'var(--forest)',
            backgroundColor: 'rgba(45,74,62,0.1)',
            borderRadius: '2px',
          }}
        >
          {post.category}
        </span>
        <span
          className="text-xs font-mono"
          style={{ color: 'var(--ink-muted)' }}
        >
          {post.date}
        </span>
      </div>
    </Link>
  )
}
