import { Column, Heading, Text } from '@once-ui-system/core'
import { writing } from '@/resources'
import { Posts } from '@/components/blog/Posts'
import { getPosts } from '@/lib/posts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:       writing.title,
  description: writing.description,
}

export default async function WritingPage() {
  const posts = await getPosts().catch(() => [])
  return (
    <Column maxWidth="m" gap="l" paddingY="12">
      <Column gap="8">
        <Heading variant="display-strong-s">{writing.label}</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          {writing.description}
        </Text>
      </Column>
      <Posts posts={posts} columns="1" />
    </Column>
  )
}
