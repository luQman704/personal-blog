import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F7F4EE',
          dark: '#EDE8DE',
        },
        ink: {
          DEFAULT: '#1A1814',
          light: '#4A4640',
          muted: '#8A857D',
        },
        rust: {
          DEFAULT: '#B85C38',
          light: '#F0E8E2',
        },
        forest: {
          DEFAULT: '#2D4A3E',
        },
        gold: {
          DEFAULT: '#C9963A',
        },
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans:  ['DM Sans', 'sans-serif'],
        mono:  ['DM Mono', 'monospace'],
      },
      maxWidth: {
        content: '1100px',
        col:     '680px',
      },
      borderColor: {
        subtle: 'rgba(26,24,20,0.12)',
        strong: 'rgba(26,24,20,0.25)',
      },
    },
  },
  plugins: [],
}

export default config
