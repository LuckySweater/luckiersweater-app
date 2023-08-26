import React from 'react'
import { Stack, styled } from '@luckysweater/ui'

export const InventoryItemCard: React.FC = () => {
  return <Container />
}

const Container = styled(Stack, {
  width: '$10',
  height: '$',
  backgroundColor: 'lightcoral',
  borderRadius: 20,
})
