import React from 'react'
import styled from 'styled-components'

const Container = styled.main`
  width: 100vw;
  height: 100vh;
`

const Layout: React.FC = ({ children }) => {
  return <Container>{children}</Container>
}

export default Layout
