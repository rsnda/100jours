import React, { useState, useContext } from 'react'
import { View } from 'react-native'
import styled from 'styled-components'
import { Button, Page, Memory } from '../../components'
import { MemoriesContext } from '../../context/MemoriesContext'

const BottomView = styled.View`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  position: absolute;
  bottom: 5px;
`

const BottomViewButtonContainer = styled.View`
  flex: 1;
  padding: 2px;
`

function HomeScreen({ navigation }) {
  const { positiveMemories, negativeMemories } = useContext(MemoriesContext)

  return (
    <Page>
      {!!positiveMemories
        ? positiveMemories.map((memory, index) => {
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
                memory={memory.memory}
              />
            )
          })
        : null}

      <BottomView>
        <BottomViewButtonContainer>
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
        </BottomViewButtonContainer>
        <BottomViewButtonContainer>
          <Button
            onPress={() => navigation.navigate('Memory', { isPositive: 0 })}
          >
            Add a negative memory
          </Button>
        </BottomViewButtonContainer>
      </BottomView>
    </Page>
  )
}

export default HomeScreen
