import {
  createIdentityMask,
  createInverseMask,
  createSoftenMask,
  createStrengthenMask,
  MaskDefinitions,
} from '@tamagui/create-theme'

export const masks = {
  identity: createIdentityMask(),
  soften: createSoftenMask(),
  soften2: createSoftenMask({ strength: 2 }),
  soften3: createSoftenMask({ strength: 3 }),
  strengthen: createStrengthenMask(),
  inverse: createInverseMask(),
} satisfies MaskDefinitions
