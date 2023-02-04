import React from 'react'
import { weekDays } from '../../../../../../../constants/Data'
import Day from './weekDay/Day'
function WeekDays({ findteacher, nextWekkCount, currentWeekDay }) {
  return (
    <div className="mt-4 d-flex justify-content-between align-items-start h-100">
      {weekDays.map((day, index) => (
        <Day
          key={day.type}
          index={index}
          findteacher={findteacher}
          {...day}
          currentWeekDay={currentWeekDay}
          nextWekkCount={nextWekkCount}
        />
      ))}
    </div>
  )
}

export default WeekDays
