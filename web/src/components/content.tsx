import React from 'react'
import styled from 'styled-components'
import { FaRegCheckCircle, FaRegCircle } from 'react-icons/fa'

import { Title } from '../styles/components'

const Container = styled.div``

interface TODOProps {
  done?: boolean
}

const TodoItem = styled.div<TODOProps>`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  text-decoration: ${props => (props.done ? 'line-through' : 'none')};
  opacity: ${props => (props.done ? '0.4' : '1')};

  &:hover {
    background-color: #1a1a1d;
    cursor: pointer;
  }
`

const CheckCircle = styled(FaRegCheckCircle)`
  font-size: 20px;
  margin-right: 10px;
`

const UnCheckCircle = styled(FaRegCircle)`
  font-size: 20px;
  margin-right: 10px;
`

interface TODO {
  id: number
  title: string
  date: string
  done: boolean
}

const todoList: TODO[] = [
  { id: 1, title: 'todo 1', date: new Date().toUTCString(), done: false },
  { id: 2, title: 'todo 2', date: new Date().toUTCString(), done: false },
  { id: 3, title: 'todo 3', date: new Date().toUTCString(), done: false },
  { id: 4, title: 'todo 4', date: new Date().toUTCString(), done: false }
]

function Content(): JSX.Element {
  const [todos, setTodos] = React.useState<TODO[]>(todoList)

  function handleToggleTodo(id: number) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) todo.done = !todo.done
        return todo
      })
    )
  }

  return (
    <Container>
      <Title>Tarefas</Title>
      {todos
        .filter(todo => !todo.done)
        .map(todo => (
          <TodoItem key={todo.id} onClick={() => handleToggleTodo(todo.id)}>
            {todo.done ? <CheckCircle /> : <UnCheckCircle />}
            {todo.title}
          </TodoItem>
        ))}
      {todos
        .filter(todo => todo.done)
        .map(todo => (
          <TodoItem
            done={todo.done}
            key={todo.id}
            onClick={() => handleToggleTodo(todo.id)}
          >
            {todo.done ? <CheckCircle /> : <UnCheckCircle />}
            {todo.title}
          </TodoItem>
        ))}
    </Container>
  )
}

export default Content
