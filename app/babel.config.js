process.env.TAMAGUI_TARGET = 'native'

module.exports = function (api) {
  api.cache(true)

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'transform-inline-environment-variables',
        // NOTE: include is optional, you can leave this part out
        {
          include: ['TAMAGUI_TARGET'],
        },
      ],
      // Can be enabled later on. Right now is causing some weird behavior
      // [
      //   '@tamagui/babel-plugin',
      //   {
      //     exclude: /node_modules/,
      //     components: ['@luckysweater/ui', 'tamagui'],
      //     config: './tamagui.config.ts',
      //     logTimings: true,
      //   },
      // ],
      'react-native-reanimated/plugin',
      'expo-router/babel',
    ],
  }
}
