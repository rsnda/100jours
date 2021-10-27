import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'

const MemoryBox = styled.Pressable`
  background: ${(props) => (props.positive ? 'lightgreen' : 'palevioletred')};

  width: 90%;
  height: auto;
  min-height: 7%;
  font-size: 21px;
  margin: 4px;
  padding: 10px;
  border: 2px solid
    ${(props) => (props.positive ? 'lightgreen' : 'palevioletred')};
  border-radius: 10px;
`

function Memory({ onPress, positive, memory }) {
  return (
    <MemoryBox
      positive={positive}
      onPress={onPress}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
      ]}
    >
      <Text>{memory}</Text>
    </MemoryBox>
  )
}
export default Memory
