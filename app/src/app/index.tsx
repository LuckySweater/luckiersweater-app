import { useRouter } from 'expo-router'
import { Button, Circle, H1, Paragraph, Stack } from '@luckysweater/ui'
import { InventoryItemCard } from '@luckysweater/components'

export default function Home() {
  const router = useRouter()

  return (
    <Stack>
      <Stack
        space="$4"
        maxWidth={600}
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
      </Stack>

      <Button onPress={() => router.push('/users/anthony')}>
        <Button.Text>Go to user page</Button.Text>
      </Button>
    </Stack>
  )
}
