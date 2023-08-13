import { useRouter } from 'expo-router'
import { Button, H1, Paragraph, YStack } from '@luckysweater/ui/src'
import { MyStack } from '../components/MyStack'
import { MyCircle } from '@luckysweater/ui'

export default function Home() {
  const router = useRouter()

  return (
    <MyStack>
      <YStack
        space="$4"
        maxWidth={600}
      >
        <H1 textAlign="center">Welcome to Tamagui.</H1>
        <Paragraph textAlign="center">
          Here&apos;s a basic starter to show navigating from one screen to
          another.
        </Paragraph>

        <MyCircle size="$10" />
      </YStack>

      <Button onPress={() => router.push('/users/anthony')}>
        Go to user page
      </Button>
    </MyStack>
  )
}
