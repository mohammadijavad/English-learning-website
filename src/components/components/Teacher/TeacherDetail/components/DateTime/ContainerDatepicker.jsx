import React, { useState } from 'react'
import HeaderCalendar from './components/HeaderCalendar'
import WeekDays from './components/WeekDays'
import persianDate from 'persian-date'
function ContainerDatepicker({ findteacher }) {
  const [nextWekkCount, setNextWekkCount] = useState(6)
  const [currentWeekDay, setCureentWeekDay] = useState(0)
  const { timeClassForBook } = findteacher
  const { times } = timeClassForBook[0]
  let dateCount = new persianDate()
    .add('days', nextWekkCount)
    .toCalendar('persian')
    .format(' DD MMMM YYYY ')
  const goNextWeekHandler = () => {
    setNextWekkCount(12 + 1)
    setCureentWeekDay(6 + 1)
  }
  const backCureentWeekHandler = () => {
    setNextWekkCount(6)
    setCureentWeekDay(0)
  }

  return (
    <>
      <HeaderCalendar
        goNextWeekHandler={goNextWeekHandler}
        backCureentWeekHandler={backCureentWeekHandler}
        currentWeekDay={currentWeekDay}
        dateCount={dateCount}
      />
      <WeekDays
        times={times}
        currentWeekDay={currentWeekDay}
        nextWekkCount={nextWekkCount}
        findteacher={findteacher}
      />
    </>
  )
}

export default ContainerDatepicker
