import { cloneElement, useContext } from 'react'
import { getSize, getSpace } from '@tamagui/get-token'
import {
  createStyledContext,
  GetProps,
  SizeTokens,
  Stack,
  styled,
  Text,
  useTheme,
  withStaticProperties,
} from '@tamagui/core'

export const ButtonContext = createStyledContext({
  size: '$medium' as SizeTokens,
})

export const ButtonFrame = styled(Stack, {
  name: 'Button',
  context: ButtonContext,
  backgroundColor: '$background',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',

  pressStyle: {
    backgroundColor: '$backgroundPress',
  },

  variants: {
    size: {
      '...size': (size, { tokens }) => {
        return {
          height: tokens.size[size],
          borderRadius: tokens.radius[size],
          paddingHorizontal: getSpace(size, { shift: -1 }),
        }
      },
    },
    round: {
      true: (_, { tokens, props }) => {
        const height = tokens.size[(props as any).size].val

        return {
          borderRadius: height / 2,
        }
      },
      false: {
        borderRadius: 0,
      },
    },
  } as const,

  defaultVariants: {
    size: '$medium',
  },
})

type ButtonProps = GetProps<typeof ButtonFrame>

export const ButtonText = styled(Text, {
  name: 'Button',
  context: ButtonContext,
  color: '$color',
  userSelect: 'none',
  textAlign: 'center',

  variants: {
    size: {
      '...fontSize': (name, { font }) => ({
        fontSize: font?.size[name],
      }),
    },
  } as const,
})

const ButtonIcon = (props: { children: any }) => {
  const { size } = useContext(ButtonContext.context)
  const theme = useTheme()

  const smaller = getSize(size, { shift: -2 })

  return cloneElement(props.children, {
    size: smaller.val * 0.5,
    color: theme.color.get(),
  })
}

export const Button = withStaticProperties(ButtonFrame, {
  Props: ButtonContext.Provider,
  Text: ButtonText,
  Icon: ButtonIcon,
})
