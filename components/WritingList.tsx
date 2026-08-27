'use client'

import Link from 'next/link'
import { Column, Row, Text, Tag, Line } from '@once-ui-system/core'
import type { Post } from '@/types'

interface WritingListProps {
  posts: Post[]
}

export default function WritingList({ posts }: WritingListProps) {
  return (
    <Column
      as="section"
      fillWidth
      paddingX="l"
      marginTop="32"
      style={{ maxWidth: '1100px', margin: '32px auto 0' }}
    >
      <Line />
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/writing/${post.slug}`}
          style={{ textDecoration: 'none', display: 'block' }}
        >
          <Row
            fillWidth
            horizontal="between"
            vertical="center"
            paddingY="20"
            borderBottom="neutral-alpha-weak"
            gap="16"
            wrap
            style={{ transition: 'padding-left 0.2s' }}
          >
            {/* Title + tag */}
            <Row gap="12" vertical="center" flex={1} wrap>
              <Text variant="body-default-m" onBackground="neutral-strong">
                {post.title}
              </Text>
              {post.tags?.[0] && (
                <Tag label={post.tags[0]} variant="brand" size="s" />
              )}
            </Row>

            {/* Date + read time */}
            <Text
              variant="label-default-xs"
              onBackground="neutral-weak"
              style={{ fontFamily: 'var(--font-code)', whiteSpace: 'nowrap' }}
            >
              {post.date} · {post.readTime}
            </Text>
          </Row>
        </Link>
      ))}
    </Column>
  )
}
