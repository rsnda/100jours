import React from 'react'
import styled from 'styled-components/native'

const StyledView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`

const StyledScroll = styled.ScrollView`
  flex: 1;
  width: 100%;
  height: 100%;
`

function Page({ children }) {
  return <StyledView>{children}</StyledView>
}
export default Page
