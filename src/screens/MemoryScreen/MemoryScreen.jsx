import React, { useState } from 'react'
import { Button, Page, TextArea } from '../../components'

function MemoryScreen({ route, navigation }) {
  const { index, memories, setMemories, isPositive } = route.params
  const startMemory = index !== undefined ? memories[index] : ''
  const [memoryText, setMemoryText] = useState(startMemory)

  const onButtonPress = () => {
    let newMemories = []
    if (index !== undefined) {
      if (!!memoryText) {
        memories.splice(index, 1, memoryText)
      } else {
        memories.splice(index, 1)
      }
      newMemories = [...memories]
    } else {
      newMemories =
        memoryText !== '' ? [...memories, memoryText] : [...memories]
    }

    setMemories(newMemories)
    navigation.goBack()
  }

  return (
    <Page>
      <TextArea
        positive={isPositive}
        onChangeText={(text) => {
          setMemoryText(text)
        }}
        value={memoryText}
        placeholder="Type a memory here..."
      />
      <Button positive={isPositive} onPress={onButtonPress}>
        Add memory
      </Button>
    </Page>
  )
}

export default MemoryScreen
