import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'

import { FaCogs } from 'react-icons/fa'

dayjs.locale('pt-br')

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

const CurrentData = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

function Header(): JSX.Element {
  const [date, setDate] = React.useState<Date>(new Date())

  return (
    <Container>
      <Profile>
        <ProfilePicture />
        <ProfileName>Matheus Henrique</ProfileName>
      </Profile>
      <CurrentData>{dayjs().format("dddd, DD [de] MMMM [de] YYYY")}</CurrentData>
      <ConfigMenu>
        <FaCogs />
      </ConfigMenu>
    </Container>
  )
}

export default Header
