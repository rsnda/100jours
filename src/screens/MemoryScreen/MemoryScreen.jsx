import React, { useState } from 'react'
import { Button, Page, TextArea } from '../../components'

function MemoryScreen({ navigation }) {
  const [memory, setMemory] = useState()
  return (
    <Page>
      <TextArea
        onChangeText={(text) => setMemory(text)}
        value={memory}
        placeholder="Type a memory here..."
      />
      <Button onPress={() => navigation.goBack()}>Add memory</Button>
    </Page>
  )
}

export default MemoryScreen
