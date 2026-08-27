'use client'
import { Column, Media, Row, SmartLink, Text } from '@once-ui-system/core'
import type { Post } from '@/types'

const CATEGORY_FALLBACKS: Record<string, string> = {
  drupal:    '/images/writing/drupal-code.jpg',
  tutorial:  '/images/writing/tutorial.jpg',
  devops:    '/images/writing/devops.jpg',
  career:    '/images/writing/career.jpg',
  headless:  '/images/writing/headless-arch.jpg',
}

function getFallback(category: string): string {
  const key = category.toLowerCase()
  for (const [k, v] of Object.entries(CATEGORY_FALLBACKS)) {
    if (key.includes(k)) return v
  }
  // default fallback
  return '/images/writing/drupal-code.jpg'
}

export default function PostCard({ post }: { post: Post }) {
  const imageSrc = post.coverImageUrl || getFallback(post.category)

  return (
    <SmartLink href={`/writing/${post.slug}`} unstyled fillWidth>
      <Column fillWidth gap="0" radius="l" overflow="hidden" border="neutral-alpha-weak">
        <Media
          src={imageSrc}
          alt={post.coverImageAlt ?? post.title}
          aspectRatio="16/9"
          sizes="(max-width: 768px) 100vw, 600px"
          objectFit="cover"
          fillWidth
        />
        <Column paddingX="24" paddingY="20" gap="12">
          <Row gap="16" vertical="center" wrap>
            <Text variant="body-default-xs" onBackground="neutral-weak">{post.date}</Text>
            <Text variant="label-strong-s" onBackground="brand-weak">{post.category}</Text>
            <Text variant="body-default-xs" onBackground="neutral-weak">{post.readTime}</Text>
          </Row>
          <Text variant="heading-strong-l" wrap="balance">{post.title}</Text>
          {post.excerpt && (
            <Text variant="body-default-m" onBackground="neutral-weak">{post.excerpt}</Text>
          )}
        </Column>
      </Column>
    </SmartLink>
  )
}
