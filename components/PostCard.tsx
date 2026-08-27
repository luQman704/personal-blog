'use client'

import Link from 'next/link'
import { Column, Row, Text, Heading, Tag } from '@once-ui-system/core'
import type { Post } from '@/types'

interface PostCardProps {
  post: Post
  index: number
}

export default function PostCard({ post, index }: PostCardProps) {
  return (
    <Link
      href={`/writing/${post.slug}`}
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <Column
        background="surface"
        border="neutral-alpha-medium"
        radius="l"
        padding="32"
        gap="16"
        fillWidth
        style={{ height: '100%', transition: 'box-shadow 0.2s', cursor: 'pointer' }}
      >
        {/* Number */}
        <Text
          variant="label-default-xs"
          onBackground="neutral-weak"
          style={{ fontFamily: 'var(--font-code)' }}
        >
          0{index + 1}
        </Text>

        {/* Title */}
        <Heading as="h3" variant="heading-default-m" onBackground="neutral-strong">
          {post.title}
        </Heading>

        {/* Excerpt */}
        <Text variant="body-default-s" onBackground="neutral-medium" style={{ lineHeight: 1.65, flex: 1 }}>
          {post.excerpt}
        </Text>

        {/* Footer */}
        <Row fillWidth horizontal="between" vertical="center">
          <Tag label={post.category} variant="brand" size="s" />
          <Text
            variant="label-default-xs"
            onBackground="neutral-weak"
            style={{ fontFamily: 'var(--font-code)' }}
          >
            {post.date}
          </Text>
        </Row>
      </Column>
    </Link>
  )
}
