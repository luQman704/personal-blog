import PostCard from './PostCard'
import type { Post } from '@/types'

interface PostsGridProps {
  posts: Post[]
}

export default function PostsGrid({ posts }: PostsGridProps) {
  return (
    <section className="mx-auto max-w-content px-5 md:px-10 mt-12 animate-fade-up delay-200">
      {/* 1 col on mobile → 2 on sm → 3 on lg */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden border"
        style={{ gap: '1px', backgroundColor: 'var(--border)', borderColor: 'var(--border)', borderRadius: '2px' }}
      >
        {posts.map((post, i) => (
          <PostCard key={post.id} post={post} index={i} />
        ))}
      </div>
    </section>
  )
}
