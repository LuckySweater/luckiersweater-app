import { ArrowLeft } from '@tamagui/lucide-icons'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Button, H3, H6, Stack } from '@luckysweater/ui'

export default function User() {
  const router = useRouter()
  const params = useLocalSearchParams()

  return (
    <Stack
      bg="red"
      justifyContent="flex-start"
    >
      <Stack
        row
        alignItems="center"
        space="$2"
      >
        <Button onPress={router.back}>
          <Button.Icon>
            <ArrowLeft />
          </Button.Icon>

          <Button.Text>Back</Button.Text>
        </Button>

        <H3>{params.user}&apos;s user page</H3>
      </Stack>

      <H6>Some Tamagui components in action.</H6>

      {/*<DialogDemo />*/}
      {/*<SelectDemo />*/}
      {/*<SpinnerDemo />*/}
      {/*<SwitchDemo />*/}
    </Stack>
  )
}
