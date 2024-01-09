import { FlexboxProps, LayoutProps, TypographyProps } from 'styled-system'
import { Box } from 'reflexbox'
import { FunctionComponentElement } from 'react'
import { UikitStyleObject, UikitSpaceProps, UikitColorProps, UikitTextVariants } from './types'

type BoxSubtype = 'generic' | 'text'
export interface BaseProps extends React.RefAttributes<any> {
  as?: keyof JSX.IntrinsicElements | React.ElementType
  css?: any
}

export type SxStyleProp = UikitStyleObject

export interface SxProps {
  sx?: SxStyleProp
  __css?: SxStyleProp
}
export interface BoxKnownProps<T extends BoxSubtype = 'generic'>
  extends BaseProps,
    UikitSpaceProps,
    UikitColorProps,
    LayoutProps,
    TypographyProps,
    FlexboxProps,
    SxProps {
  variant?: T extends 'generic' ? string : UikitTextVariants
  tx?: string
}

export interface BoxProps<E extends Element = Element, T extends BoxSubtype = 'generic'>
  extends BoxKnownProps<T>,
    Omit<React.HTMLProps<E> & Omit<React.SVGProps<E>, 'crossOrigin'>, keyof BoxKnownProps<T>> {}

Box.displayName = 'Box'

export default Box as <T extends Element>(props: BoxProps<T>) => FunctionComponentElement<BoxProps<T>>
