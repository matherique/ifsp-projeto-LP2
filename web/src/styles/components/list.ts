import styled from 'styled-components'

export const List = styled.ul`
  list-style: none;
`
export const ListItem = styled.li`
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
