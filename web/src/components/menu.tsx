import React from 'react'
import styled from 'styled-components'
import { FaPlusSquare } from 'react-icons/fa'

import Tags from './tags'
import { List, ListItem } from '../styles/components'

const Container = styled.div`
  /* background-color: red; */
`

const Header = styled.div`
  border-bottom: 2px solid #1a1a1a;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const AddIcon = styled(FaPlusSquare)`
  font-size: 20px;
  margin: 0px 10px;
  cursor: pointer;
`

const Title = styled.h3`
  padding: 10px 0;
`

function Menu(): JSX.Element {
  const handleAddProjeto = React.useCallback(() => {
    console.log('apertou o bota')
  }, [])

  return (
    <Container>
      <Header>
        <Title>Projetos</Title>
        <AddIcon onClick={handleAddProjeto} />
      </Header>
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
        <ListItem>Item 4</ListItem>
        <ListItem>Item 5</ListItem>
      </List>
      <Title>Tags</Title>
      <Tags />
    </Container>
  )
}

export default Menu
