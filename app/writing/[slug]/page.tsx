import { notFound } from 'next/navigation'
import { Column, Heading, Text, Row, Tag, Line } from '@once-ui-system/core'
import { getPostBySlug, getAllSlugs } from '@/lib/posts'
import type { Metadata } from 'next'

// Next.js 16: params is a Promise
interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs().catch(() => [])
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
    <Column maxWidth="s" gap="xl" paddingY="12">
      {/* Post header */}
      <Column gap="16">
        <Row gap="16" vertical="center" wrap>
          <Text variant="body-default-xs" onBackground="neutral-weak">{post.date}</Text>
          {post.category && (
            <Tag label={post.category} variant="brand" size="s" />
          )}
          <Text variant="body-default-xs" onBackground="neutral-weak">{post.readTime}</Text>
        </Row>
        <Heading variant="display-strong-s" wrap="balance">
          {post.title}
        </Heading>
        {post.excerpt && (
          <Text variant="body-default-l" onBackground="neutral-weak">
            {post.excerpt}
          </Text>
        )}
      </Column>

      <Line />

      {/* Post body */}
      {post.body && (
        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      )}
    </Column>
  )
}
