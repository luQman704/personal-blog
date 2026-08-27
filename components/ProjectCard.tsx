'use client';

import type { Project } from '@/lib/projects'

interface ProjectCardProps {
  project: Project
}

const statusColor: Record<Project['status'], { bg: string; color: string }> = {
  'Live':        { bg: 'rgba(45,74,62,0.1)',   color: 'var(--forest)' },
  'In Progress': { bg: 'rgba(201,150,58,0.12)', color: 'var(--gold)'   },
  'Archived':    { bg: 'rgba(26,24,20,0.07)',   color: 'var(--ink-muted)' },
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const status = statusColor[project.status]

  console.log(project);

  return (
    <div
      className="flex flex-col border p-7 transition-shadow duration-300 hover:shadow-lg"
      style={{ backgroundColor: 'var(--cream)', borderColor: 'var(--border)', borderRadius: '2px' }}
    >
      {/* Top row — year + status */}
      <div className="flex items-center justify-between mb-5">
        <span className="text-xs font-mono" style={{ color: 'var(--ink-muted)' }}>
          {project.year}
        </span>
        <span
          className="text-xs font-medium tracking-wide uppercase px-2.5 py-1"
          style={{ backgroundColor: status.bg, color: status.color, borderRadius: '2px' }}
        >
          {project.status}
        </span>
      </div>

      {/* Title */}
      <h3
        className="font-serif font-medium leading-snug tracking-tight mb-3 text-lg"
        style={{ color: 'var(--ink)' }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed mb-6 flex-1"
        style={{ color: 'var(--ink-light)', lineHeight: '1.7' }}
      >
        {project.description}
      </p>

      {/* Highlights */}
      <ul className="mb-6 flex flex-col gap-2">
        {project.highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--ink-muted)' }}>
            <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--rust)' }} />
            {h}
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-2 py-0.5 border"
            style={{
              backgroundColor: 'var(--cream-dark)',
              borderColor: 'var(--border)',
              color: 'var(--ink-light)',
              borderRadius: '2px',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 pt-5 border-t" style={{ borderColor: 'var(--border)' }}>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors duration-200"
            style={{ color: 'var(--rust)', textDecoration: 'none' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--ink)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--rust)' }}
          >
            View live →
          </a>
        )}
       {/* {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors duration-200"
            style={{ color: 'var(--ink-muted)', textDecoration: 'none' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--ink)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--ink-muted)' }}
          >
            GitHub ↗
          </a>
        )}*/}
      </div>
    </div>
  )
}
