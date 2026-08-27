import { Card, Column, Row, Tag, Text } from '@once-ui-system/core'
import type { Project } from '@/lib/projects'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card
      fillWidth
      border="neutral-alpha-weak"
      background="surface"
      radius="l"
      padding="0"
      overflow="hidden"
    >
      <Column padding="32" gap="16">
        <Row gap="8" vertical="center" horizontal="between" wrap>
          <Text variant="heading-strong-l">{project.title}</Text>
          <Row gap="8">
            <Tag
              label={project.status}
              variant={project.status === 'Live' ? 'success' : 'neutral'}
              size="s"
            />
            <Tag label={project.year} variant="neutral" size="s" />
          </Row>
        </Row>
        <Text variant="body-default-m" onBackground="neutral-weak">
          {project.description}
        </Text>
        {project.highlights.length > 0 && (
          <Column as="ul" gap="8" paddingLeft="16">
            {project.highlights.map((h, i) => (
              <Text as="li" key={i} variant="body-default-s" onBackground="neutral-medium">
                {h}
              </Text>
            ))}
          </Column>
        )}
        <Row gap="8" wrap>
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} variant="neutral" size="s" />
          ))}
        </Row>
        {(project.liveUrl || project.repoUrl) && (
          <Row gap="12" marginTop="8">
            {project.liveUrl && (
              <Text as="a" href={project.liveUrl} variant="body-default-s" onBackground="brand-medium">
                Live site →
              </Text>
            )}
            {project.repoUrl && (
              <Text as="a" href={project.repoUrl} variant="body-default-s" onBackground="neutral-medium">
                Repository →
              </Text>
            )}
          </Row>
        )}
      </Column>
    </Card>
  )
}
