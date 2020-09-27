import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

import Layout from '../components/layout'
import { Button, Input } from '../styles/components/'
import { useRouter } from 'next/dist/client/router'

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

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

function Login(): JSX.Element {
  const [email, setEmail] = React.useState<string>('')
  const [senha, setSenha] = React.useState<string>('')
  const router = useRouter()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    router.push('/dashboard')
  }

  return (
    <div>
      <Head>
        <title>Bem-vindo TODOAPP</title>
      </Head>
      <Layout>
        <Container>
          <Title>Entrar</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              type="mail"
              placeholder="e-mail"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="senha"
              required
              value={senha}
              onChange={e => setSenha(e.target.value)}
            />
            <Button type="submit">Logar</Button>
          </Form>
        </Container>
      </Layout>
    </div>
  )
}
export default Login
