import PostCard from './PostCard'
import { Column, Row } from '@once-ui-system/core'
import type { Post } from '@/types'

interface PostsGridProps {
  posts: Post[]
}

export default function PostsGrid({ posts }: PostsGridProps) {
  return (
    <Column
      as="section"
      fillWidth
      paddingX="l"
      marginTop="48"
      style={{ maxWidth: '1100px', margin: '48px auto 0' }}
    >
      <Row fillWidth gap="16" wrap>
        {posts.map((post, i) => (
          <Column key={post.id} style={{ flex: '1 1 calc(33.333% - 11px)', minWidth: '280px' }}>
            <PostCard post={post} index={i} />
          </Column>
        ))}
      </Row>
    </Column>
  )
}
