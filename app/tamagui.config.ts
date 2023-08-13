import { config } from '@luckysweater/config'

export type Conf = typeof config

declare module '@luckysweater/ui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default config
