import { Geist, Geist_Mono } from 'next/font/google'

const heading = Geist({ variable: '--font-heading', subsets: ['latin'], display: 'swap' })
const body    = Geist({ variable: '--font-body',    subsets: ['latin'], display: 'swap' })
const label   = Geist({ variable: '--font-label',   subsets: ['latin'], display: 'swap' })
const code    = Geist_Mono({ variable: '--font-code', subsets: ['latin'], display: 'swap' })

export const fonts = { heading, body, label, code }

export const style = {
  theme:      'system' as const,
  neutral:    'gray',
  brand:      'emerald',
  accent:     'cyan',
  solid:      'contrast',
  solidStyle: 'flat',
  border:     'playful',
  surface:    'translucent',
  transition: 'all',
  scaling:    '100',
}

export const dataStyle = {
  variant: 'gradient',
  mode:    'categorical',
  height:  24,
  axis:  { stroke: 'var(--neutral-alpha-weak)' },
  tick:  { fill: 'var(--neutral-on-background-weak)', fontSize: 11, line: false },
}

export const effects = {
  mask:     { cursor: false, x: 50, y: 0,  radius: 100 },
  gradient: { display: false, opacity: 100, x: 50, y: 60, width: 100, height: 50, tilt: 0, colorStart: 'accent-background-strong', colorEnd: 'page-background' },
  dots:     { display: true,  opacity: 30,  size: '2' as const, color: 'brand-background-strong' },
  grid:     { display: false, opacity: 100, color: 'neutral-alpha-medium', width: '0.25rem', height: '0.25rem' },
  lines:    { display: false, opacity: 100, color: 'neutral-alpha-weak',   size: '16' as const, thickness: 1, angle: 45 },
}

export const routes: Record<string, boolean> = {
  '/':        true,
  '/about':   true,
  '/writing': true,
  '/projects':true,
  '/contact': true,
}

export const display = {
  location:      true,
  time:          true,
  themeSwitcher: true,
}

export const baseURL = 'https://lukmon.dev'
