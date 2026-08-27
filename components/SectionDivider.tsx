import { Row, Text, Line } from '@once-ui-system/core'

interface SectionDividerProps {
  label: string
}

export default function SectionDivider({ label }: SectionDividerProps) {
  return (
    <Row
      fillWidth
      vertical="center"
      gap="20"
      paddingX="l"
      style={{ maxWidth: '1100px', margin: '0 auto' }}
    >
      <Line flex={1} />
      <Text
        variant="label-default-xs"
        onBackground="neutral-weak"
        style={{ letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}
      >
        {label}
      </Text>
      <Line flex={1} />
    </Row>
  )
}
