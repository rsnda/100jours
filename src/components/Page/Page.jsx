import React from 'react'
import styled from 'styled-components/native'

const StyledView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`

function Page({ children }) {
  return <StyledView>{children}</StyledView>
}
export default Page
