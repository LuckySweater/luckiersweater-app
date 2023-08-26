import { GetProps, Stack, styled } from '@tamagui/core'

export const Circle = styled(Stack, {
  name: 'Circle',

  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 100_000_000,
  overflow: 'hidden',
  backgroundColor: '$mules',

  variants: {
    size: {
      '...size': (size, { tokens }) => {
        return {
          width: tokens.size[size] ?? size,
          height: tokens.size[size] ?? size,
        }
      },
    },
  } as const,

  defaultVariants: {
    size: '$large',
  },
})

export type CircleProps = GetProps<typeof Circle>
