import { ExpoConfig } from 'expo/config'

const environment = 'development' as 'beta' | 'production' | 'development'

const color = {
  silk: '#FCFAF7',
  tuscany: '#C94F2E',
}

const config: ExpoConfig = {
  slug: 'luckiersweater',
  scheme: 'luckiersweater',
  name: 'luckiersweater',
  icon: `./assets/${environment}-icon.png`,
  userInterfaceStyle: 'automatic',
  backgroundColor: color.silk,
  primaryColor: color.tuscany,
  owner: 'lucky-sweater',
  privacy: 'hidden',
  orientation: 'portrait',
  platforms: ['ios', 'android'],
  assetBundlePatterns: ['**/*'],
  splash: {
    backgroundColor: color.silk,
    image: './src/assets/splash.png',
    resizeMode: 'contain',
  },
  ios: {
    supportsTablet: true,
    usesAppleSignIn: true,
    config: {
      usesNonExemptEncryption: false,
    },
    infoPlist: {
      UIBackgroundModes: ['remote-notification'],
      UIViewControllerBasedStatusBarAppearance: true,
      CADisableMinimumFrameDurationOnPhone: true,
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: `./assets/adaptive/${environment}-icon.png`,
      backgroundColor: color.silk,
    },
  },
  androidNavigationBar: {
    backgroundColor: '#FFFFFF',
    barStyle: 'dark-content',
  },
  androidStatusBar: {
    translucent: true,
  },
  experiments: {
    typedRoutes: true,
  },
  plugins: ['expo-router'],
}

export default config
