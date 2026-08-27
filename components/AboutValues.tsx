import { Column, Row, Heading, Text } from '@once-ui-system/core'

const values = [
  {
    title: 'Clarity over cleverness',
    body:
      'The best code is the code the next developer can understand at 2am on a Friday. I optimise for readability and maintainability first, performance second.',
  },
  {
    title: 'Real constraints, real solutions',
    body:
      "Enterprise systems have weird requirements, legacy debt, and political constraints. I've learned to find the clean path within the messy reality rather than pretending it doesn't exist.",
  },
  {
    title: 'Physics intuition in software',
    body:
      'My physics background means I instinctively look for the underlying model — the invariants, the energy flows, the equilibrium states. It makes debugging faster and architecture cleaner.',
  },
  {
    title: 'Ship, then improve',
    body:
      'Perfectionism is a liability on production systems. I believe in shipping working software, instrumenting it well, and iterating based on real data rather than predicted problems.',
  },
]

export default function AboutValues() {
  return (
    <Column
      as="section"
      fillWidth
      paddingX="l"
      marginTop="104"
      gap="32"
      style={{ maxWidth: '1100px', margin: '104px auto 0' }}
    >
      <Heading variant="display-strong-xs" onBackground="neutral-strong">
        How I work
      </Heading>

      <Row fillWidth gap="20" wrap>
        {values.map((v, i) => (
          <Column
            key={i}
            background="surface"
            border="neutral-alpha-medium"
            radius="l"
            padding="32"
            gap="12"
            style={{ flex: '1 1 calc(50% - 10px)', minWidth: '280px' }}
          >
            <Heading as="h3" variant="heading-strong-m" onBackground="neutral-strong">
              {v.title}
            </Heading>
            <Text variant="body-default-s" onBackground="neutral-medium" style={{ lineHeight: 1.75 }}>
              {v.body}
            </Text>
          </Column>
        ))}
      </Row>
    </Column>
  )
}
