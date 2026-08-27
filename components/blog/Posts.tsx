import { Grid } from '@once-ui-system/core'
import PostCard from './Post'
import type { Post } from '@/types'

interface PostsProps {
  posts: Post[]
  columns?: '1' | '2' | '3'
  range?: [number, number?]
}

export function Posts({ posts, columns = '1', range }: PostsProps) {
  const sorted = [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((p) => p.title)
  const displayed = range ? sorted.slice(range[0] - 1, range[1] ?? sorted.length) : sorted
  if (!displayed.length) return null
  return (
    <Grid
      columns={columns as any}
      s={{ columns: 1 }}
      fillWidth
      marginBottom="40"
      gap="16"
    >
      {displayed.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </Grid>
  )
}
