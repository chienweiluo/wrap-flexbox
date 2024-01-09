import React, { forwardRef } from 'react'
import { FlexboxProps as SystemFlexboxProps } from 'styled-system'
import Box, { BoxProps } from './Box'

export interface FlexboxProps extends BoxProps, SystemFlexboxProps {}


const Flex = forwardRef<HTMLDivElement, BoxProps>((props: BoxProps, ref) => {
  return (
    <Box
      ref={ref}
      {...(props as any)}
      __css={{
        display: 'flex',
        ...(props.__css || {}),
      }}
    />
  )
})

Flex.displayName = 'Flex'

export default Flex
