interface SectionDividerProps {
  label: string
}

export default function SectionDivider({ label }: SectionDividerProps) {
  return (
    <div
      className="mx-auto flex items-center gap-5 px-10"
      style={{ maxWidth: '1100px' }}
    >
      <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
      <span
        className="text-xs tracking-widest uppercase font-medium whitespace-nowrap"
        style={{ color: 'var(--ink-muted)' }}
      >
        {label}
      </span>
      <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
    </div>
  )
}
