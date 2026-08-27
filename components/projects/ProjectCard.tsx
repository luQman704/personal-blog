'use client'

import { Carousel, Column, Flex, Heading, Row, SmartLink, Tag, Text } from '@once-ui-system/core'
import type { Project } from '@/lib/projects'

export function ProjectCard({ project }: { project: Project }) {
  const hasImages = project.images && project.images.length > 0

  return (
    <Column fillWidth gap="m">
      {hasImages && (
        <Carousel
          sizes="(max-width: 960px) 100vw, 960px"
          aspectRatio="16/9"
          items={project.images!.map((src) => ({
            slide: src,
            alt: project.title,
          }))}
        />
      )}

      <Flex
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
        s={{ direction: 'column' }}
      >
        {/* Title + status */}
        <Flex flex={5} direction="column" gap="8">
          <Heading as="h2" wrap="balance" variant="heading-strong-xl">
            {project.title}
          </Heading>
          <Row gap="8" wrap>
            <Tag
              label={project.status}
              variant={project.status === 'Live' ? 'success' : 'neutral'}
              size="s"
            />
            <Tag label={project.year} variant="neutral" size="s" />
            {project.tags.slice(0, 4).map((tag) => (
              <Tag key={tag} label={tag} variant="neutral" size="s" />
            ))}
          </Row>
        </Flex>

        {/* Description + links */}
        <Column flex={7} gap="16">
          <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
            {project.description}
          </Text>
          <Flex gap="24" wrap>
            {project.liveUrl && (
              <SmartLink
                suffixIcon="arrowUpRight"
                style={{ margin: '0', width: 'fit-content' }}
                href={project.liveUrl}
              >
                <Text variant="body-default-s">View project</Text>
              </SmartLink>
            )}
            {project.repoUrl && (
              <SmartLink
                suffixIcon="arrowUpRight"
                style={{ margin: '0', width: 'fit-content' }}
                href={project.repoUrl}
              >
                <Text variant="body-default-s">Repository</Text>
              </SmartLink>
            )}
          </Flex>
        </Column>
      </Flex>
    </Column>
  )
}
