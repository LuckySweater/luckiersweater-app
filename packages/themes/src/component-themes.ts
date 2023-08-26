import { ThemeDefinitions } from '@tamagui/theme-builder'
import { masks } from './masks'

type Masks = typeof masks

export const component_themes = {
  Button: {
    mask: 'identity',
    override: {
      background: 6,
      backgroundPress: 5,
      color: 0,
    },
    overrideStrategy: 'swap',
  },
} satisfies ThemeDefinitions<keyof Masks>
