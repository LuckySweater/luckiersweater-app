import React from 'react'
import { Stack, styled } from '@luckysweater/ui'

export const InventoryItemCard: React.FC = () => {
  return <Container />
}

const Container = styled(Stack, {
  width: 300,
  height: 300,
  backgroundColor: 'lightcoral',
})
