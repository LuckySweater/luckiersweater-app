import {
  createInverseMask,
  createSoftenMask,
  createStrengthenMask,
  MaskDefinitions,
} from '@tamagui/create-theme'
import { CreateMask } from '@tamagui/create-theme/src/createThemeTypes'
import { skipMask } from '@tamagui/create-theme/src/masks'

const createIdentityMask = (): CreateMask => ({
  name: 'identity-mask',
  mask: (template, opts) => skipMask.mask(template, opts),
})

export const masks = {
  identity: createIdentityMask(),
  soften: createSoftenMask(),
  soften2: createSoftenMask({ strength: 2 }),
  soften3: createSoftenMask({ strength: 3 }),
  strengthen: createStrengthenMask(),
  inverse: createInverseMask(),
} satisfies MaskDefinitions
