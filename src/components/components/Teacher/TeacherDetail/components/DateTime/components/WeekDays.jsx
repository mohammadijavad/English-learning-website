import React, { useEffect } from 'react'
// import { weekDays } from '../../../../../../../constants/Data'
import Day from './weekDay/Day'
import persianDate from 'persian-date'
function WeekDays({ findteacher }) {
  const dayofmonth = new persianDate().date() //Date of Month
  const year = new persianDate().year() //year
  const dayofweek = new persianDate().day() //day of Week
  const month = new persianDate().month() //month

  const weekDays = [...Array(7).keys()]
  useEffect(() => {
    console.log(year, month, dayofmonth, dayofweek)
  }, [])
  // const w = new persianDate([1396, 6, 17]).format('dddd') // "جمعه"
  // new persianDate().toLocale('fa').format(' DD MMMM')
  return (
    <div className="mt-4 d-flex justify-content-between align-items-start">
      {weekDays.map((day) => (
        <Day key={day.type} findteacher={findteacher} {...day} />
      ))}
    </div>
  )
}

export default WeekDays
