import { Column, Heading, Text } from '@once-ui-system/core'
import { projectsPage } from '@/resources'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { projects } from '@/lib/projects'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:       projectsPage.title,
  description: projectsPage.description,
}

export default function ProjectsPage() {
  return (
    <Column maxWidth="m" gap="l" paddingY="12">
      <Column gap="8">
        <Heading variant="display-strong-s">{projectsPage.label}</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          {projectsPage.description}
        </Text>
      </Column>
      <Column gap="24">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Column>
    </Column>
  )
}
