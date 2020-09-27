import React from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

function SideMenu(): JSX.Element {
  const [date, setDate] = React.useState<Date>(new Date())

  function handleDateChange(date: Date | Date[]) {
    if (typeof date === 'object') {
      setDate(date[0])
    } else {
      setDate(date)
    }
  }

  return (
    <Container>
      <DatePicker inline={true} selected={date} onChange={handleDateChange} />
    </Container>
  )
}

export default SideMenu
