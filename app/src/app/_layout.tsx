import { useEffect } from 'react'
import { Image, Text, useColorScheme, View } from 'react-native'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import {
  getTokens,
  setupReactNative,
  styled,
  TamaguiProvider,
} from '@luckysweater/ui'
import { config } from '@luckysweater/themes'
import { SafeAreaView } from 'react-native-safe-area-context'

setupReactNative({ View, Text, Image })

SplashScreen.preventAutoHideAsync()

export const unstable_settings = {
  initialRouteName: 'index',
}

const AppLayout = () => {
  const color_scheme = useColorScheme()

  const [loaded, error] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync()
  }, [loaded, error])

  if (!loaded) return null

  return (
    <TamaguiProvider
      config={config}
      defaultTheme={color_scheme}
    >
      <ThemeProvider
        value={color_scheme === 'light' ? DefaultTheme : DarkTheme}
      >
        <Container>
          <Stack
            screenOptions={{
              headerShown: false,
              // statusBarStyle: color_scheme === 'light' ? 'dark' : 'light',
              contentStyle: {
                backgroundColor:
                  color_scheme === 'light'
                    ? getTokens().color.$silk.val
                    : getTokens().color.$black.val,
              },
            }}
          />
        </Container>
      </ThemeProvider>
    </TamaguiProvider>
  )
}

export default AppLayout

const Container = styled(SafeAreaView, {
  flex: 1,
  backgroundColor: '$background',
})
