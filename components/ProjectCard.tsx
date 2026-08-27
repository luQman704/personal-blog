'use client'

import { Column, Row, Heading, Text, Tag, Line, Button } from '@once-ui-system/core'
import type { Project } from '@/lib/projects'

interface ProjectCardProps {
  project: Project
}

const statusVariant: Record<Project['status'], 'success' | 'warning' | 'neutral'> = {
  'Live':        'success',
  'In Progress': 'warning',
  'Archived':    'neutral',
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const variant = statusVariant[project.status]

  return (
    <Column
      background="surface"
      border="neutral-alpha-medium"
      radius="l"
      padding="24"
      gap="16"
      fillWidth
      style={{ height: '100%' }}
    >
      {/* Top row — year + status */}
      <Row fillWidth horizontal="between" vertical="center">
        <Text
          variant="label-default-xs"
          onBackground="neutral-weak"
          style={{ fontFamily: 'var(--font-code)' }}
        >
          {project.year}
        </Text>
        <Tag label={project.status} variant={variant} size="s" />
      </Row>

      {/* Title */}
      <Heading as="h3" variant="heading-strong-m" onBackground="neutral-strong">
        {project.title}
      </Heading>

      {/* Description */}
      <Text
        variant="body-default-s"
        onBackground="neutral-medium"
        style={{ lineHeight: 1.7, flex: 1 }}
      >
        {project.description}
      </Text>

      {/* Highlights */}
      <Column gap="8">
        {project.highlights.map((h, i) => (
          <Row key={i} gap="8" vertical="start">
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--brand-solid-strong)',
                flexShrink: 0,
                marginTop: '7px',
              }}
            />
            <Text variant="body-default-s" onBackground="neutral-medium">
              {h}
            </Text>
          </Row>
        ))}
      </Column>

      {/* Tags */}
      <Row gap="8" wrap>
        {project.tags.map((tag) => (
          <Tag key={tag} label={tag} variant="neutral" size="s" />
        ))}
      </Row>

      {/* Links */}
      {project.liveUrl && (
        <>
          <Line />
          <Button
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            size="s"
          >
            View live →
          </Button>
        </>
      )}
    </Column>
  )
}
