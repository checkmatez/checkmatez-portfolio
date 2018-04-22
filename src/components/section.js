import React, { Children } from 'react'
import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  flex-flow: column nowrap;
  background-color: ${p => (p.odd ? 'white' : '#f0f3f5')};
`

const TitleText = styled.h1`
  border-bottom: 2px solid red;
`

const Section = ({ title, odd, children }) => (
  <Container odd={odd}>
    <TitleText>{title}</TitleText>
    {children}
  </Container>
)

export default Section
