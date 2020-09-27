import React from 'react'
import styled from 'styled-components'

import Menu from '../components/menu'
import Content from '../components/main'
import SideMenu from '../components/sidemenu'
import Header from '../components/header'

const Main = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr 250px;
`

const Container = styled.div`
  margin: 0 auto;
  width: 80vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

function Dashboard(): JSX.Element {
  return (
    <Container>
      <Header />
      <Main>
        <Menu />
        <Content />
        <SideMenu />
      </Main>
    </Container>
  )
}

export default Dashboard
