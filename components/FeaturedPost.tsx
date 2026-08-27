import Link from 'next/link'
import type { Post } from '@/types'

interface FeaturedPostProps {
  post: Post
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <section className="mx-auto max-w-content px-5 md:px-10 mt-12 animate-fade-up delay-100">
      <Link
        href={`/writing/${post.slug}`}
        className="block border overflow-hidden transition-shadow duration-300 hover:shadow-xl"
        style={{ borderColor: 'var(--border-strong)', borderRadius: '2px', textDecoration: 'none' }}
      >
        {/* stacks vertically on mobile, side by side on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* ── Image / code panel ── */}
          <div
            className="relative flex items-end p-8 min-h-[220px] md:min-h-[340px] overflow-hidden"
            style={{ background: 'var(--forest)' }}
          >
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, var(--forest) 0%, #1a2e26 50%, #0d1a15 100%)' }}
            />
            {/* code overlay */}
            <div
              className="absolute inset-0 overflow-hidden font-mono text-white leading-loose hidden sm:block"
              style={{ opacity: 0.07, fontSize: '11px', padding: '20px', wordBreak: 'break-all' }}
            >
              {`$query = \\Drupal::entityQuery('node')
  ->condition('type','article')
  ->condition('status', 1)
  ->range(0, $limit)
  ->accessCheck(FALSE)
  ->execute();

$storage = \\Drupal::entityTypeManager()
  ->getStorage('node');
$nodes = $storage->loadMultiple($nids);`}
            </div>
            <span
              className="relative z-10 inline-block text-xs font-medium tracking-widest uppercase px-3 py-1.5"
              style={{ backgroundColor: 'var(--gold)', color: 'var(--ink)', borderRadius: '2px' }}
            >
              Featured post
            </span>
          </div>

          {/* ── Content panel ── */}
          <div
            className="flex flex-col justify-between p-8 md:p-11"
            style={{ backgroundColor: 'var(--cream)' }}
          >
            <div>
              <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: 'var(--rust)' }}>
                {post.category}
              </p>
              <h2
                className="font-serif font-medium leading-snug tracking-tight mb-4 text-2xl md:text-[28px]"
                style={{ color: 'var(--ink)' }}
              >
                {post.title}
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--ink-light)' }}>
                {post.excerpt}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3 text-sm mb-5" style={{ color: 'var(--ink-muted)' }}>
                <span>Lukmon Awoyemi</span>
                <span className="w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--ink-muted)' }} />
                <span>{post.readTime}</span>
                <span className="w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--ink-muted)' }} />
                <span>{post.date}</span>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--rust)' }}>
                Read article →
              </span>
            </div>
          </div>

        </div>
      </Link>
    </section>
  )
}
