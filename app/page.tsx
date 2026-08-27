import { Column, Heading, Text, Button, Row, Line, RevealFx } from '@once-ui-system/core'
import { home, about, routes } from '@/resources'
import { Posts } from '@/components/blog/Posts'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { getPosts } from '@/lib/posts'
import { projects } from '@/lib/projects'

export default async function Home() {
  const posts = await getPosts().catch(() => [])
  const featuredProjects = projects.slice(0, 2)

  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      {/* Hero */}
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center">
            <Button
              id="about"
              data-border="rounded"
              href="/about"
              variant="secondary"
              size="m"
              arrowIcon
            >
              {about.label}
            </Button>
          </RevealFx>
        </Column>
      </Column>

      {/* Latest writing */}
      {routes['/writing'] && posts.length > 0 && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: 'column' }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest writing
              </Heading>
            </Row>
            <Row flex={3} paddingX="20">
              <Posts posts={posts} range={[1, 2]} columns="2" />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}

      {/* Featured projects */}
      {routes['/projects'] && (
        <Column fillWidth gap="xl" paddingX="l">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Column>
      )}
    </Column>
  )
}
