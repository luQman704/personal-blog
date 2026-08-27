import Link from 'next/link'
import { Row, Column, Heading, Text, Tag } from '@once-ui-system/core'
import type { Post } from '@/types'

interface FeaturedPostProps {
  post: Post
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <Column
      as="section"
      fillWidth
      paddingX="l"
      marginTop="48"
      style={{ maxWidth: '1100px', margin: '48px auto 0' }}
    >
      <Link
        href={`/writing/${post.slug}`}
        style={{ textDecoration: 'none', display: 'block' }}
      >
        <Row
          fillWidth
          background="surface"
          border="neutral-alpha-medium"
          radius="l"
          overflow="hidden"
          style={{ transition: 'box-shadow 0.2s' }}
          s={{ direction: 'column' }}
        >
          {/* Image / code panel */}
          <Column
            flex={1}
            vertical="end"
            padding="32"
            style={{
              minHeight: '280px',
              background: 'linear-gradient(135deg, var(--brand-alpha-strong) 0%, var(--accent-alpha-strong) 100%)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Decorative code overlay */}
            <pre
              style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.07,
                fontSize: '11px',
                padding: '20px',
                wordBreak: 'break-all',
                overflow: 'hidden',
                color: 'var(--neutral-on-background-strong)',
                fontFamily: 'var(--font-code)',
                lineHeight: 1.6,
                margin: 0,
              }}
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
            </pre>
            <Tag
              label="Featured post"
              variant="brand"
              style={{ position: 'relative', zIndex: 1 }}
            />
          </Column>

          {/* Content panel */}
          <Column flex={1} padding="40" gap="24" vertical="between">
            <Column gap="12">
              <Text
                variant="label-default-s"
                onBackground="brand-medium"
                style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}
              >
                {post.category}
              </Text>
              <Heading as="h2" variant="display-strong-xs" onBackground="neutral-strong">
                {post.title}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-medium" style={{ lineHeight: 1.7 }}>
                {post.excerpt}
              </Text>
            </Column>

            <Column gap="12">
              <Row gap="12" vertical="center" wrap>
                <Text variant="body-default-s" onBackground="neutral-medium">Lukmon Awoyemi</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">·</Text>
                <Text variant="body-default-s" onBackground="neutral-medium">{post.readTime}</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">·</Text>
                <Text variant="body-default-s" onBackground="neutral-medium">{post.date}</Text>
              </Row>
              <Text variant="label-default-s" onBackground="brand-strong">
                Read article →
              </Text>
            </Column>
          </Column>
        </Row>
      </Link>
    </Column>
  )
}
