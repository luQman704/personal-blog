'use client'
import { Card, Column, Row, Text } from '@once-ui-system/core'
import type { Post } from '@/types'

export default function PostCard({ post }: { post: Post }) {
  return (
    <Card
      fillWidth
      href={`/writing/${post.slug}`}
      border="transparent"
      background="transparent"
      padding="4"
      radius="l-4"
    >
      <Column maxWidth={28} paddingY="24" paddingX="l" gap="12">
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
    </Card>
  )
}
