"use client";
import {
  LayoutProvider,
  ThemeProvider,
  ToastProvider,
} from "@once-ui-system/core";
import type {
  Theme,
  Schemes,
  NeutralColor,
  SolidType,
  SolidStyle,
  BorderStyle,
  SurfaceStyle,
  TransitionStyle,
  ScalingSize,
} from "@once-ui-system/core";
import { style } from "@/resources/once-ui.config";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LayoutProvider>
      <ThemeProvider
        theme={style.theme as Theme}
        brand={style.brand as Schemes}
        accent={style.accent as Schemes}
        neutral={style.neutral as NeutralColor}
        solid={style.solid as SolidType}
        solidStyle={style.solidStyle as SolidStyle}
        border={style.border as BorderStyle}
        surface={style.surface as SurfaceStyle}
        transition={style.transition as TransitionStyle}
        scaling={style.scaling as ScalingSize}
      >
        <ToastProvider>
          {children}
        </ToastProvider>
      </ThemeProvider>
    </LayoutProvider>
  );
}
