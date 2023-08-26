import { createThemeBuilder } from '@tamagui/theme-builder'
import { palettes, templates } from './templates'
import { component_themes } from './component-themes'
import { masks } from './masks'

const themesBuilder = createThemeBuilder()
  .addPalettes(palettes)
  .addTemplates(templates)
  .addMasks(masks)
  .addThemes({
    light: {
      template: 'base',
      palette: 'light',
    },
    dark: {
      template: 'base',
      palette: 'dark',
    },
  })
  .addChildThemes(component_themes)
// .addChildThemes({
// subtle: {
//   mask: 'soften',
// },
// })

export const themes = themesBuilder.build()
