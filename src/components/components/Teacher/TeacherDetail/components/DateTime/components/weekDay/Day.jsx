import React, { useState } from 'react'
import style from '../../style/datepicker.module.css'
import persianDate from 'persian-date'
import ReservedTime from './ReservedTime'
import NotReservedTime from './NotReservedTime'
import TodayFlag from './TodayFlag'
function Day({ findteacher, index, currentWeekDay, mode, step }) {
  const { timeClassForBook } = findteacher
  const { times } = timeClassForBook[0]
  let { alltime } = times[index]
  const monthName = new persianDate().format('MMMM') //day of Week
  const month = new persianDate().month() //month
  const dayofmonth = new persianDate().date() //Date of Month
  const year = new persianDate().year() //year
  const weekName = new persianDate([
    year,
    month,
    dayofmonth + index + currentWeekDay,
  ]).format('dddd')
  const todayDate = new persianDate([
    year,
    month,
    dayofmonth + index + currentWeekDay,
  ]).format('D')
  const currentDate = new persianDate([
    year,
    month,
    dayofmonth + index + currentWeekDay,
  ]).date()

  // this time for set final time class in modal time
  // ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond']

  const timeCovert = weekName + ' ' + todayDate + '  ' + monthName
  //find current date show flag today (red flag)
  const isCurrentDate = currentDate === dayofmonth
  return (
    <div
      className={`${
        isCurrentDate ? style.activeCureentDate : ''
      } h-100 rounded`}
      style={{ flex: 1, justifyContent: 'center', height: '500px' }}
    >
      <TodayFlag
        weekName={weekName}
        todayDate={todayDate}
        isCurrentDate={isCurrentDate}
      />
      <div className="mt-3 w-100 d-flex justify-content-center align-items-center flex-column">
        {alltime?.map((time, index) =>
          time.isBooked ? (
            <ReservedTime time={time} key={index} />
          ) : (
            <NotReservedTime
              key={index}
              time={time}
              timeCovert={timeCovert}
              mode={mode}
              step={step}
            />
          ),
        )}
      </div>
    </div>
  )
}

export default Day
