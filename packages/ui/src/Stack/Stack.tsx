import { styled, View } from '@tamagui/core'
import { getElevation } from './getElevation'

export const Stack = styled(View, {
  flexDirection: 'column',
  variants: {
    fullscreen: {
      true: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      } as const,
    },
    elevation: {
      '...size': getElevation,
    },
    row: {
      true: {
        flexDirection: 'row',
      },
    },
    padded: {
      true: (_, { tokens }) => ({
        padding: tokens.space['$true'],
      }),
      '...size': (size, { tokens }) => ({
        padding: tokens.space[size] || size,
      }),
    },
  } as const,
})
