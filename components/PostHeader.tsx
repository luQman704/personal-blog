'use client'

import Link from 'next/link'
import { Column, Row, Heading, Text, Line } from '@once-ui-system/core'
import type { Post } from '@/types'

interface PostHeaderProps {
  post: Post
}

export default function PostHeader({ post }: PostHeaderProps) {
  return (
    <Column
      as="header"
      fillWidth
      paddingX="l"
      paddingTop="64"
      gap="24"
      style={{ maxWidth: '680px', margin: '0 auto' }}
    >
      {/* Back + category */}
      <Row gap="16" vertical="center">
        <Link href="/writing" style={{ textDecoration: 'none' }}>
          <Text variant="body-default-s" onBackground="neutral-medium">
            ← Back to writing
          </Text>
        </Link>
        <Text variant="body-default-s" onBackground="neutral-weak">·</Text>
        <Text variant="body-default-s" onBackground="neutral-medium">{post.category}</Text>
      </Row>

      {/* Title */}
      <Heading
        as="h1"
        variant="display-strong-m"
        onBackground="neutral-strong"
      >
        {post.title}
      </Heading>

      {/* Byline */}
      <Column gap="0">
        <Line />
        <Row vertical="center" gap="16" paddingY="20" wrap>
          <Column
            horizontal="center"
            vertical="center"
            border="neutral-alpha-medium"
            radius="full"
            style={{
              width: '40px',
              height: '40px',
              flexShrink: 0,
              fontSize: '14px',
              fontStyle: 'italic',
              color: 'var(--brand-on-background-strong)',
              background: 'var(--brand-alpha-weak)',
            }}
          >
            LA
          </Column>
          <Column flex={1} gap="2">
            <Text variant="body-strong-s" onBackground="neutral-strong">
              Lukmon Awoyemi
            </Text>
            <Text variant="body-default-s" onBackground="neutral-medium">
              {post.date} · Wickford, Essex
            </Text>
          </Column>
          <Text
            variant="label-default-xs"
            onBackground="neutral-weak"
            style={{ fontFamily: 'var(--font-code)' }}
          >
            {post.readTime}
          </Text>
        </Row>
        <Line />
      </Column>
    </Column>
  )
}
