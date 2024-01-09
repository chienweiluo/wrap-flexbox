/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/ban-types */
import { ResponsiveStyleValue, VariantProperty, EmotionLabel, AllSystemCSSProperties } from '@styled-system/css'
import { SpaceProps, ColorProps, RequiredTheme } from 'styled-system'
import * as CSS from 'csstype'
import baseStyles from '../config/base'
import textVariants from '../config/text'
import { PaletteInterface } from './palette'

type PropsStringListOf<T> = T extends string | number
  ? []
  : {
      [K in Extract<keyof T, string>]: [K, ...PropsStringListOf<T[K]>]
    }[Extract<keyof T, string>]

type JoinPropString<T extends string[], D extends string> = T extends []
  ? never
  : T extends [infer F]
  ? F
  : T extends [infer F, ...infer R]
  ? F extends string
    ? `${F}${D}${JoinPropString<Extract<R, string[]>, D>}`
    : never
  : string

//   this converts {t : {primary}} to t.primary
type DottedPropString<T extends Record<string, any>> = JoinPropString<PropsStringListOf<T>, '.'>

export type UikitSpaces = DottedPropString<typeof baseStyles.space> | (string & {}) | number | symbol
export type UikitColors = DottedPropString<PaletteInterface> | (string & {})
export type UikitTextVariants = keyof typeof textVariants.text | (string & {})

export type UikitSpaceProps = SpaceProps<RequiredTheme, UikitSpaces>
export type UikitColorProps = ColorProps<RequiredTheme, UikitColors>

export type UikitStyleObject =
  | UikitCssProps
  | VariantProperty
  | EmotionLabel
  | UikitUseThemeFunction
  | null
  | { [key in CSS.Pseudos]?: UikitStyleObject }
  | { [key in string]?: UikitStyleObject | UikitResponsiveStyleValue<key> }

export type UikitResponsiveStyleValue<K extends string> = K extends keyof SpaceProps
  ? ResponsiveStyleValue<UikitSpaces>
  : K extends keyof ColorProps
  ? ResponsiveStyleValue<AllSystemCSSProperties[K] | UikitColors>
  : K extends keyof AllSystemCSSProperties
  ? ResponsiveStyleValue<AllSystemCSSProperties[K]>
  : ResponsiveStyleValue<string | number | UikitStyleObject>

export type UikitCssProps = {
  // @ts-ignore
  [K in keyof AllSystemCSSProperties]: UikitResponsiveStyleValue<K> | ((theme: any) => UikitResponsiveStyleValue<K>)
}

export interface UikitUseThemeFunction {
  (theme: any): UikitStyleObject
}
