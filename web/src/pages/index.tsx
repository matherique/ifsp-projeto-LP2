import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
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

const Button = styled.a`
  margin: 10px 0px;
  width: 400px;
  font-size: 20px;
  text-align: center;
  padding: 15px 0px;
  border-radius: 7px;
  transition: 0.2s all;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};

  &:hover {
    cursor: pointer;
    background-color: #0b0925;
    border: 1px solid #0b0925;
  }
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
          <Title>Bem vindo ao TODOAPP</Title>
          <Link href="/login">
            <Button>Login</Button>
          </Link>
          <Link href="/cadastrar">
            <Button>Cadastrar</Button>
          </Link>
        </Container>
      </Layout>
    </div>
  )
}
export default Home
