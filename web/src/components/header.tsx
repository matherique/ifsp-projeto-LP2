import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`

const Profile = styled.div`
  display: flex;
  align-items: center;
`

const ProfilePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ccc;
`

const ProfileName = styled.span`
  font-size: 20px;
  color: #fff;
  margin-left: 10px;
`

const ConfigMenu = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

function Header(): JSX.Element {
  return (
    <Container>
      <Profile>
        <ProfilePicture />
        <ProfileName>Matheus Henrique</ProfileName>
      </Profile>
      <ConfigMenu>COnfig</ConfigMenu>
    </Container>
  )
}

export default Header
