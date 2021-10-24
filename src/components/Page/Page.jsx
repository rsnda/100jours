import React from 'react'
import styled from 'styled-components/native'

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

function Page({ children }) {
  return <StyledView>{children}</StyledView>
}
export default Page
