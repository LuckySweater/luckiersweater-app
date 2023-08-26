import { useEffect } from 'react'
import { Image, Text, useColorScheme, View } from 'react-native'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { setupReactNative, styled, TamaguiProvider } from '@luckysweater/ui'
import { config } from '@luckysweater/themes'
import { SafeAreaView } from 'react-native-safe-area-context'

setupReactNative({ View, Text, Image })

SplashScreen.preventAutoHideAsync()

const Layout = () => {
  const colorScheme = useColorScheme()

  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) return null

  return (
    <TamaguiProvider
      config={config}
      defaultTheme={colorScheme}
    >
      <ThemeProvider value={colorScheme === 'light' ? DefaultTheme : DarkTheme}>
        <Container>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: {
                backgroundColor: 'transparent',
              },
            }}
          />
        </Container>
      </ThemeProvider>
    </TamaguiProvider>
  )
}

export default Layout

const ASDA = styled(Stack, {})

const Container = styled(SafeAreaView, {
  flex: 1,
  backgroundColor: '$background',
})
