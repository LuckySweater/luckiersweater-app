import {
  getVariableValue,
  isAndroid,
  isVariable,
  SizeTokens,
  SizeVariantSpreadFunction,
  StackProps,
  VariantSpreadExtras,
} from '@tamagui/core'

export const getElevation: SizeVariantSpreadFunction<StackProps> = (
  size,
  extras,
) => {
  if (!size) return

  const { tokens } = extras
  const token = tokens.size[size]
  const sizeNum = (isVariable(token) ? +token.val : size) as number

  return getSizedElevation(sizeNum, extras)
}

export const getSizedElevation = (
  val: SizeTokens | number | boolean,
  { theme, tokens }: VariantSpreadExtras<any>,
) => {
  let num = 0

  if (val === true) {
    const val = getVariableValue(tokens.size['true'])
    if (typeof val === 'number') {
      num = val
    } else {
      num = 10
    }
  } else {
    num = +val
  }

  const height = Math.round(num / 4 + 1)
  const shadowRadius = Math.round(num / 2 + 2)

  return {
    shadowColor: theme.shadow,
    shadowRadius,
    shadowOffset: { height, width: 0 },
    ...(isAndroid
      ? {
          elevationAndroid: 2 * height,
        }
      : {}),
  }
}
