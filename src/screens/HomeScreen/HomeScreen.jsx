import React, { useState } from 'react'
import { Button, Page, Memory } from '../../components'

function HomeScreen({ navigation }) {
  const [positiveMemories, setPositiveMemories] = useState([])
  const [negativeMemories, setNegativeMemories] = useState([])
  return (
    <Page>
      {positiveMemories.map((memory, index) => {
        return (
          <Memory
            key={index}
            positive
            onPress={() =>
              navigation.navigate('Memory', {
                index,
                memories: positiveMemories,
                setMemories: setPositiveMemories,
                isPositive: true,
              })
            }
            memory={memory}
          />
        )
      })}

      <Button
        positive
        onPress={() =>
          navigation.navigate('Memory', {
            memories: positiveMemories,
            setMemories: setPositiveMemories,
            isPositive: true,
          })
        }
      >
        Add a positive memory
      </Button>

      {negativeMemories.map((memory, index) => {
        return (
          <Memory
            key={index}
            onPress={() =>
              navigation.navigate('Memory', {
                index,
                memories: negativeMemories,
                setMemories: setNegativeMemories,
              })
            }
            memory={memory}
          />
        )
      })}

      <Button
        onPress={() =>
          navigation.navigate('Memory', {
            memories: negativeMemories,
            setMemories: setNegativeMemories,
          })
        }
      >
        Add a negative memory
      </Button>
    </Page>
  )
}

export default HomeScreen
