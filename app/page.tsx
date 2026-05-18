import HeroSection        from '@/components/HeroSection'
import SectionDivider     from '@/components/SectionDivider'
import FeaturedPost       from '@/components/FeaturedPost'
import PostsGrid          from '@/components/PostsGrid'
import WritingList        from '@/components/WritingList'
import AboutStrip         from '@/components/AboutStrip'
import NewsletterSection  from '@/components/NewsletterSection'
import { getFeaturedPost, getNonFeaturedPosts } from '@/lib/posts'

export default async function HomePage() {
  const [featured, rest] = await Promise.all([
    getFeaturedPost(),
    getNonFeaturedPosts(),
  ])

  const gridPosts = rest.slice(0, 4)
  const listPosts = rest.slice(3)

  return (
    <>
      <HeroSection />

      <SectionDivider label="Featured writing" />
      {featured && <FeaturedPost post={featured} />}

      {gridPosts.length > 0 && <PostsGrid posts={gridPosts} />}

      {listPosts.length > 0 && (
        <>
          <div style={{ marginTop: '72px' }}>
            <SectionDivider label="All writing" />
          </div>
          <WritingList posts={listPosts} />
        </>
      )}

      <AboutStrip />
      <NewsletterSection />
    </>
  )
}
