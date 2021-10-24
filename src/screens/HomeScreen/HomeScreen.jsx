import * as React from 'react'
import { Text } from 'react-native'
import { Button, Page } from '../../components'

function HomeScreen({ navigation }) {
  return (
    <Page>
      <Text>Home!</Text>
      <Button positive onPress={() => navigation.navigate('Memory')}>
        Go to Memory
      </Button>
    </Page>
  )
}

export default HomeScreen
