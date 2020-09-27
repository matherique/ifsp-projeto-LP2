import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: green;
`

function Content(): JSX.Element {
  return <Container>Lista te tarefas atual</Container>
}

export default Content
