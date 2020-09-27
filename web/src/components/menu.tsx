import React from 'react'
import styled from 'styled-components'
import { FaPlusSquare } from 'react-icons/fa'

const Container = styled.div`
  /* background-color: red; */
`

const MenuItem = styled.li`
  padding: 10px 0px;

  &:before {
    content: '·';
    font-weight: 700;
    margin: 0px 10px;
  }
  &:hover {
    background-color: #1a1a1d;
    cursor: pointer;
  }
`

const MenuContent = styled.ul`
  list-style: none;
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
`

export const Title = styled.h3`
  padding: 10px 0;
`

function Menu(): JSX.Element {
  return (
    <Container>
      <Header>
        <Title>Projetos</Title>
        <AddIcon />
      </Header>
      <MenuContent>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
        <MenuItem>Item 4</MenuItem>
        <MenuItem>Item 5</MenuItem>
      </MenuContent>
    </Container>
  )
}

export default Menu
