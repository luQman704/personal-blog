'use client'
import {
  DataThemeProvider,
  IconProvider,
  LayoutProvider,
  ThemeProvider,
  ToastProvider,
} from '@once-ui-system/core'
import { style, dataStyle } from '@/resources'
import { HiOutlineHome, HiOutlineBookOpen, HiOutlineSquares2X2, HiOutlineEnvelope } from 'react-icons/hi2'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'

const iconLibrary = {
  home:     HiOutlineHome,
  book:     HiOutlineBookOpen,
  grid:     HiOutlineSquares2X2,
  email:    HiOutlineEnvelope,
  github:   FaGithub,
  linkedin: FaLinkedin,
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LayoutProvider>
      <ThemeProvider
        brand={style.brand as any}
        accent={style.accent as any}
        neutral={style.neutral as any}
        solid={style.solid as any}
        solidStyle={style.solidStyle as any}
        border={style.border as any}
        surface={style.surface as any}
        transition={style.transition as any}
        scaling={style.scaling as any}
      >
        <DataThemeProvider
          variant={dataStyle.variant as any}
          mode={dataStyle.mode as any}
          height={dataStyle.height}
          axis={{ stroke: dataStyle.axis.stroke }}
          tick={{ fill: dataStyle.tick.fill, fontSize: dataStyle.tick.fontSize, line: dataStyle.tick.line }}
        >
          <ToastProvider>
            <IconProvider icons={iconLibrary}>{children}</IconProvider>
          </ToastProvider>
        </DataThemeProvider>
      </ThemeProvider>
    </LayoutProvider>
  )
}
