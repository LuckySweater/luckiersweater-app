import { config } from '@luckysweater/themes'

export type Conf = typeof config

declare module '@luckysweater/ui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default config
