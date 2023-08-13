import { GetProps, styled, YStack } from 'tamagui'

export const MyCircle = styled(YStack, {
  name: 'MyCircle',

  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 100_000_000,
  overflow: 'hidden',
  backgroundColor: 'blue',
  borderWidth: 1,

  variants: {
    size: {
      '...size': (size, { tokens }) => {
        return {
          width: tokens.size[size] ?? size,

          height: tokens.size[size] ?? size,
        }
      },
    },
  },
})

export type MyCircleProps = GetProps<typeof MyCircle>