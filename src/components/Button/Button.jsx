import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'

const StyledButton = styled.Pressable`
  background: ${(props) => (props.positive ? 'lightgreen' : 'palevioletred')};
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 7%;
  font-size: 21px;
  margin: 16px;
  border: 2px solid
    ${(props) => (props.positive ? 'lightgreen' : 'palevioletred')};
  border-radius: 10px;
  opacity: ${(props) => (props.pressed ? 0.5 : 1)};
`

function Button({ onPress, positive, children }) {
  return (
    <StyledButton
      positive={positive}
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? 'lightgrey'
            : positive
            ? 'lightgreen'
            : 'palevioletred',
        },
      ]}
    >
      <Text>{children}</Text>
    </StyledButton>
  )
}
export default Button
