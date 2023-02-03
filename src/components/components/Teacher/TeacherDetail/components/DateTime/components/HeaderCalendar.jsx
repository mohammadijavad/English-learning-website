import React, { useState, useEffect } from 'react'
import persianDate from 'persian-date'
import style from '../style/datepicker.module.css'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
function HeaderCalendar() {
  const dateCount = new persianDate()
    .add('days', 6)
    .toCalendar('persian')
    .format(' DD MMMM YYYY ')
  useEffect(() => {
    // console.log(dateCount)
  }, [])
  const [getNextWeek, setGetNextWeel] = useState(false)
  return (
    <div className="d-flex align-items-center justify-content-between">
      {getNextWeek ? (
        <div className="d-flex align-items-center curoser">
          <BsChevronRight size={12} className="mx-1" />
          <small>هفته قبل</small>
        </div>
      ) : (
        <div></div>
      )}
      <div className="d-flex justify-content-center align-content-center">
        <span>{new persianDate().toLocale('fa').format(' DD MMMM')}</span>
        <b className={`${style.seprator} mx-1`}>__</b>
        <span>{dateCount}</span>
      </div>
      <div className="d-flex align-items-center">
        <small className="size curoser">هفته بعد</small>
        <BsChevronLeft size={12} className="mx-1" />
      </div>
    </div>
  )
}

export default HeaderCalendar
