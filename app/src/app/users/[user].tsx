import { ArrowLeft } from '@tamagui/lucide-icons'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Button, H3, H6, XStack } from '@luckysweater/ui'

import DialogDemo from '../../components/DialogDemo'
import { MyStack } from '../../components/MyStack'
import SelectDemo from '../../components/SelectDemo'
import SpinnerDemo from '../../components/SpinnerDemo'
import SwitchDemo from '../../components/SwitchDemo'

export default function User() {
  const router = useRouter()
  const params = useLocalSearchParams()

  return (
    <MyStack justifyContent="flex-start">
      <XStack
        alignItems="center"
        space="$2"
      >
        <Button
          icon={ArrowLeft}
          onPress={router.back}
        />
        <H3>{params.user}&apos;s user page</H3>
      </XStack>

      <H6>Some Tamagui components in action.</H6>

      <DialogDemo />
      <SelectDemo />
      <SpinnerDemo />
      <SwitchDemo />
    </MyStack>
  )
}