import * as React from 'react'
import { Button, Text, View } from 'react-native'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button
        title="Go to Memory"
        onPress={() => navigation.navigate('Memory')}
      />
    </View>
  )
}

export default HomeScreen
