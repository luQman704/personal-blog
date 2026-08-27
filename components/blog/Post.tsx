'use client'
import { Column, Media, Row, SmartLink, Text } from '@once-ui-system/core'
import type { Post } from '@/types'

export default function PostCard({ post }: { post: Post }) {
  return (
    <SmartLink href={`/writing/${post.slug}`} unstyled fillWidth>
      <Column fillWidth gap="0" radius="l" overflow="hidden" border="neutral-alpha-weak">
        {post.coverImageUrl && (
          <Media
            src={post.coverImageUrl}
            alt={post.coverImageAlt ?? post.title}
            aspectRatio="16/9"
            sizes="(max-width: 768px) 100vw, 600px"
            objectFit="cover"
            fillWidth
          />
        )}
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
