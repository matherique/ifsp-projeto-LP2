import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import Layout from '../components/layout'
import { Input, Button } from '../styles/components'

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

function Cadastrar(): JSX.Element {
  const [nome, setNome] = React.useState<string>('')
  const [email, setEmail] = React.useState<string>('')
  const [senha, setSenha] = React.useState<string>('')

  function handleCadastrar() {
    const dados = { nome, email, senha }
    console.log(dados)
  }

  return (
    <div>
      <Head>
        <title>Bem-vindo TODOAPP</title>
      </Head>
      <Layout>
        <Container>
          <Title>Inscrever-se</Title>
          <Input
            placeholder="Nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
          <Input
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            placeholder="Senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />
          <Button onClick={handleCadastrar}>Cadastrar</Button>
        </Container>
      </Layout>
    </div>
  )
}

export default Cadastrar
