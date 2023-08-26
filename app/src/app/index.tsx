import React from 'react'
import { router } from 'expo-router'
import { Button, Circle, H1, Paragraph, Stack } from '@luckysweater/ui'
import { InventoryItemCard } from '@luckysweater/components'

const Home: React.FC = () => {
  return (
    <Stack
      padded
      space="$large"
    >
      <H1 textAlign="center">Welcome to Tamagui.</H1>
      <Paragraph textAlign="center">
        Here&apos;s a basic starter to show navigating from one screen to
        another!
      </Paragraph>

      <Stack row>
        <Circle size="$10" />
        <Circle />
      </Stack>

      <InventoryItemCard />

      <Button
        size="$medium"
        round
        onPress={() => router.push('/users/anthony')}
      >
        <Button.Text>Go to user page</Button.Text>
      </Button>
    </Stack>
  )
}

export default Home
