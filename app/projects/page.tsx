import ProjectCard     from '@/components/ProjectCard'
import SectionDivider  from '@/components/SectionDivider'
import { projects }    from '@/lib/projects'
import type { Metadata } from 'next'
import metadata from "@/components/metadata";



export default function ProjectsPage() {
  const live       = projects.filter((p) => p.status === 'Live')
  const inProgress = projects.filter((p) => p.status === 'In Progress')

  return (
    <div className="pb-20">
      {/* Page header */}
      <div className="mx-auto max-w-content px-5 md:px-10 pt-12 md:pt-16 pb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px" style={{ backgroundColor: 'var(--rust)' }} />
          <span className="text-xs tracking-widest uppercase font-medium" style={{ color: 'var(--rust)' }}>
            Selected work
          </span>
        </div>
        <h1
          className="font-serif font-medium tracking-tight"
          style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--ink)' }}
        >
          Projects
        </h1>
        <p className="mt-4 text-base max-w-lg" style={{ color: 'var(--ink-muted)' }}>
          Enterprise platforms, full-stack builds, and tools I've shipped professionally
          and independently. Real clients, real constraints, real code.
        </p>
      </div>

      {/* Stats strip */}
      <div
        className="mx-auto max-w-content px-5 md:px-10 mb-14"
      >
        <div
          className="grid grid-cols-2 md:grid-cols-4 border"
          style={{ borderColor: 'var(--border)', borderRadius: '2px' }}
        >
          {[
            { value: '7+',  label: 'Years experience'     },
            { value: '12+', label: 'Enterprise projects'  },
            { value: '1',   label: 'Acquia certification' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="px-6 py-5 border-r last:border-r-0"
              style={{
                borderColor: 'var(--border)',
                borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
              }}
            >
              <p
                className="font-serif font-medium text-3xl tracking-tight mb-1"
                style={{ color: 'var(--ink)' }}
              >
                {stat.value}
              </p>
              <p className="text-xs tracking-wide uppercase" style={{ color: 'var(--ink-muted)' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Live projects */}
      <SectionDivider label={`${live.length} live projects`} />
      <section className="mx-auto max-w-content px-5 md:px-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {live.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* In progress */}
      {inProgress.length > 0 && (
        <>
          <div className="mt-16">
            <SectionDivider label="In progress" />
          </div>
          <section className="mx-auto max-w-content px-5 md:px-10 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {inProgress.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  )
}
