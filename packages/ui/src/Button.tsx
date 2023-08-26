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

  pressStyle: {
    backgroundColor: '$backgroundPress',
  },

  variants: {
    size: {
      '...size': (size, { tokens }) => {
        return {
          height: tokens.size[size],
          borderRadius: tokens.radius[size],

          // note the getSpace and getSize helpers will let you shift down/up token sizes
          // whereas with gap we just multiply by 0.2
          // this is a stylistic choice, and depends on your design system values
          gap: tokens.space[size].val * 0.2,

          paddingHorizontal: getSpace(size, {
            shift: -1,
          }),
        }
      },
    },
  } as const,

  defaultVariants: {
    size: '$medium',
  },
})

type ButtonProps = GetProps<typeof ButtonFrame>

export const ButtonText = styled(Text, {
  name: 'ButtonText',
  context: ButtonContext,
  color: '$color',
  userSelect: 'none',

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
