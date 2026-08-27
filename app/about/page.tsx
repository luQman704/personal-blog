import { Column, Row, Heading, Text, Tag, Line, RevealFx } from '@once-ui-system/core'
import { about } from '@/resources'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:       about.title,
  description: about.description,
}

export default function AboutPage() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12">
      {/* Page header */}
      <RevealFx translateY="4" fillWidth>
        <Column gap="16">
          <Heading variant="display-strong-s">{about.label}</Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            {about.description}
          </Text>
        </Column>
      </RevealFx>

      {/* Introduction */}
      {about.intro.display && (
        <RevealFx translateY="4" delay={0.1} fillWidth>
          <Column gap="16">
            <Heading as="h2" variant="heading-strong-xl">
              {about.intro.title}
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-medium">
              {about.intro.description}
            </Text>
          </Column>
        </RevealFx>
      )}

      {/* Work experience */}
      {about.work.display && (
        <RevealFx translateY="4" delay={0.15} fillWidth>
          <Column gap="32">
            <Row fillWidth>
              <Line />
            </Row>
            <Heading as="h2" variant="heading-strong-xl">
              {about.work.title}
            </Heading>
            <Column gap="40">
              {about.work.experiences.map((experience, index) => (
                <Column key={index} gap="12">
                  <Row horizontal="between" vertical="center" wrap gap="8">
                    <Heading as="h3" variant="heading-strong-l">
                      {experience.company}
                    </Heading>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {experience.timeframe}
                    </Text>
                  </Row>
                  <Text variant="body-default-m" onBackground="brand-weak">
                    {experience.role}
                  </Text>
                  <Column as="ul" gap="8" paddingLeft="16">
                    {experience.achievements.map((achievement, i) => (
                      <Text
                        as="li"
                        key={i}
                        variant="body-default-s"
                        onBackground="neutral-medium"
                      >
                        {achievement}
                      </Text>
                    ))}
                  </Column>
                </Column>
              ))}
            </Column>
          </Column>
        </RevealFx>
      )}

      {/* Education */}
      {about.studies.display && (
        <RevealFx translateY="4" delay={0.2} fillWidth>
          <Column gap="32">
            <Row fillWidth>
              <Line />
            </Row>
            <Heading as="h2" variant="heading-strong-xl">
              {about.studies.title}
            </Heading>
            <Column gap="24">
              {about.studies.institutions.map((institution, index) => (
                <Column key={index} gap="8">
                  <Heading as="h3" variant="heading-strong-l">
                    {institution.name}
                  </Heading>
                  <Text variant="body-default-m" onBackground="neutral-medium">
                    {institution.description}
                  </Text>
                </Column>
              ))}
            </Column>
          </Column>
        </RevealFx>
      )}

      {/* Technical skills */}
      {about.technical.display && (
        <RevealFx translateY="4" delay={0.25} fillWidth>
          <Column gap="32">
            <Row fillWidth>
              <Line />
            </Row>
            <Heading as="h2" variant="heading-strong-xl">
              {about.technical.title}
            </Heading>
            <Column gap="32">
              {about.technical.skills.map((skill, index) => (
                <Column key={index} gap="12">
                  <Heading as="h3" variant="heading-strong-l">
                    {skill.title}
                  </Heading>
                  <Text variant="body-default-m" onBackground="neutral-medium">
                    {skill.description}
                  </Text>
                  {skill.tags.length > 0 && (
                    <Row gap="8" wrap>
                      {skill.tags.map((tag) => (
                        <Tag key={tag.name} label={tag.name} variant="neutral" size="s" />
                      ))}
                    </Row>
                  )}
                </Column>
              ))}
            </Column>
          </Column>
        </RevealFx>
      )}
    </Column>
  )
}
