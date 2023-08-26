import { ThemeDefinitions } from '@tamagui/theme-builder'
import { masks } from './masks'

type Masks = typeof masks

export const component_themes = {
  Button: {
    mask: 'strengthen',
  },
} satisfies ThemeDefinitions<keyof Masks>
