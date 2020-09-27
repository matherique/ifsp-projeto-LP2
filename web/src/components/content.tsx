import React from 'react'
import styled from 'styled-components'
import { FaRegCheckCircle, FaRegCircle } from 'react-icons/fa'

const Container = styled.div``

const TodoItem = styled.div`
  width: 100%;
  padding: 15px 10px;

  &:hover {
    background-color: #1a1a1d;
    cursor: pointer;
  }
`

const Title = styled.h3`
  border-bottom: 2px solid #1a1a1a;
  padding: 5px 0;
`

const CheckCircle = styled(FaRegCheckCircle)`
  font-size: 20px;
`

const UnCheckCircle = styled(FaRegCircle)`
  font-size: 20px;
`

function Content(): JSX.Element {
  const [done, setDone] = React.useState<boolean>(false)

  function handleToggleTodo() {
    setDone(old => !old)
  }

  return (
    <Container>
      <Title>Tarefas</Title>
      <TodoItem onClick={handleToggleTodo}>
        {done ? <CheckCircle /> : <UnCheckCircle />}
      </TodoItem>
    </Container>
  )
}

export default Content
