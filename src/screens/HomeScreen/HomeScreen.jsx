import React, { useState, useContext } from 'react'
import { Button, Page, Memory } from '../../components'
import { MemoriesContext } from '../../context/MemoriesContext'

function HomeScreen({ navigation }) {
  const { memories } = useContext(MemoriesContext)
  const [positiveMemories, setPositiveMemories] = useState([])
  const [negativeMemories, setNegativeMemories] = useState([])

  return (
    <Page>
      {!!memories
        ? memories.map((memory, index) => {
            return (
              <Memory
                key={index}
                positive
                onPress={() =>
                  navigation.navigate('Memory', {
                    index,
                    isPositive: 1,
                  })
                }
                memory={memory.memory}
              />
            )
          })
        : null}

      <Button
        positive
        onPress={() =>
          navigation.navigate('Memory', {
            isPositive: 1,
          })
        }
      >
        Add a positive memory
      </Button>

      {negativeMemories
        ? negativeMemories.map((memory, index) => {
            return (
              <Memory
                key={index}
                onPress={() =>
                  navigation.navigate('Memory', {
                    index,
                  })
                }
                memory={memory}
              />
            )
          })
        : null}

      <Button onPress={() => navigation.navigate('Memory', { isPositive: 0 })}>
        Add a negative memory
      </Button>
    </Page>
  )
}

export default HomeScreen
