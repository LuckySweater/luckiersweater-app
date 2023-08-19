import { GetProps, styled, YStack } from 'tamagui'

export const MyCircle2 = styled(YStack, {
  name: 'MyCircle2',

  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 100_000_000,
  overflow: 'hidden',
  backgroundColor: 'blue',

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

export type MyCircle2Props = GetProps<typeof MyCircle2>
