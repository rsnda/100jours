import * as React from 'react'
import { Button, Text, View } from 'react-native'

function MemoryScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Memory !</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
}

export default MemoryScreen
