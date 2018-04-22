import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  background-color: rebeccapurple;
  padding: 10px;
  height: 80px;
`

const Tail = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`

const Anchor = styled.a`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
`

const H1 = styled.h1`
  margin: 0;
`

const Header = ({ siteTitle }) => (
  <Container>
    <Link
      to="/"
      style={{
        color: 'white',
        textDecoration: 'none',
      }}
    >
      <H1>Home</H1>
    </Link>
    <Tail>
      <Anchor href="#lol">
        <H1>React</H1>
      </Anchor>
    </Tail>
  </Container>
)

export default Header
