import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import Layout from '../components/layout'

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Title = styled.h1`
  margin-bottom: 20px;
`

function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Bem-vindo TODOAPP</title>
      </Head>
      <Layout>
        <Container>
          <Title>Inscrever-se</Title>
        </Container>
      </Layout>
    </div>
  )
}

export default Home
