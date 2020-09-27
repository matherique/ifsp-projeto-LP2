import styled from 'styled-components'

export const Link = styled.a`
  margin: 10px 0px;
  width: 400px;
  font-size: 20px;
  text-align: center;
  padding: 10px 0px;
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

export const Button = styled.button`
  margin: 10px 0px;
  width: 400px;
  font-size: 20px;
  text-align: center;
  padding: 10px 0px;
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
