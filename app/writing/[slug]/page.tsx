import { notFound }        from 'next/navigation'
import PostHeader          from '@/components/PostHeader'
import NewsletterSection   from '@/components/NewsletterSection'
import { getPostBySlug, getAllSlugs } from '@/lib/posts'
import type { Metadata }   from 'next'

// ─── Next.js 16: params is a Promise ─────────────────────────────────────────
interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  return {
    title:       `${post.title} — Lukmon Awoyemi`,
    description: post.excerpt,
    openGraph: {
      title:       post.title,
      description: post.excerpt,
      type:        'article',
      publishedTime: post.date,
      ...(post.coverImageUrl && {
        images: [{ url: post.coverImageUrl, alt: post.coverImageAlt }],
      }),
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  return (
    <article className="pb-20">
      <PostHeader post={post} />

      {/* Render the body HTML from Drupal's processed field */}
      {post.body && (
        <div
          className="post-body mx-auto px-5 md:px-10"
          style={{ maxWidth: '680px' }}
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      )}

      <div className="mt-20">
        <NewsletterSection />
      </div>
    </article>
  )
}
