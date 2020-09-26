import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

import Layout from '../components/layout'
import { Button, Input } from '../styles/components/'

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
          <Title>Entrar</Title>
          <Input placeholder="e-mail" />
          <Input placeholder="senha" />
          <Link href="/cadastrar">
            <Button>Logar</Button>
          </Link>
        </Container>
      </Layout>
    </div>
  )
}
export default Home
