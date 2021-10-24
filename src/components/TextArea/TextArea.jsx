import React from 'react'
import styled from 'styled-components/native'
import { Text, TextInput } from 'react-native'

const StyledTextInput = styled.TextInput`
  background: white;
  margin: 16px;
  padding: 16px;
  border: 2px solid palevioletred;
  border-radius: 10px;
  width: 90%;
  height: 70%;
`

function TextArea({ placeholder, value, onChangeText }) {
  return (
    <StyledTextInput
      multiline={true}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  )
}
export default TextArea
