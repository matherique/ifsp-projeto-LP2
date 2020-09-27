import React from 'react'
import styled from 'styled-components'

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

function Menu(): JSX.Element {
  return (
    <Container>
      <h3>Projetos</h3>
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
