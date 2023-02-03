import React from 'react'
import HeaderCalendar from './components/HeaderCalendar'
import WeekDays from './components/WeekDays'

function ContainerDatepicker({ findteacher }) {
  return (
    <>
      <HeaderCalendar />
      <WeekDays findteacher={findteacher} />
    </>
  )
}

export default ContainerDatepicker
