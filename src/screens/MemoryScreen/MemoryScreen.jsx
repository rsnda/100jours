import React, { useState, useContext } from 'react'
import { Button, Page, TextArea } from '../../components'
import { MemoriesContext } from '../../context/MemoriesContext'

function MemoryScreen({ route, navigation }) {
  const { memories, addNewMemory, updateMemory } = useContext(MemoriesContext)
  const { index, isPositive } = route?.params
  const startMemory = index !== undefined ? memories[index].memory : ''
  const [memoryText, setMemoryText] = useState(startMemory)

  console.log('memories : ', memories)
  const onButtonPress = () => {
    if (index === undefined) {
      addNewMemory(memoryText, isPositive)
    } else {
      updateMemory(memoryText, index + 1) // db id start a 1 not 0
    }

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
