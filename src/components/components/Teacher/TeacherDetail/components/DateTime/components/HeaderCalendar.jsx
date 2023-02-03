import React, { useState, useEffect } from 'react'
import persianDate from 'persian-date'
import style from '../style/datepicker.module.css'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
function HeaderCalendar({
  nextWekkCount,
  currentWeekDay,
  goNextWeekHandler,
  backCureentWeekHandler,
  dateCount,
}) {
  return (
    <div className="d-flex align-items-center justify-content-between">
      {currentWeekDay > 0 ? (
        <div
          className="d-flex align-items-center curoser"
          onClick={() => backCureentWeekHandler()}
        >
          <BsChevronRight size={12} className="mx-1" />
          <small>هفته قبل</small>
        </div>
      ) : (
        <div className="px-4"></div>
      )}
      <div className="d-flex justify-content-center align-content-center">
        <span>
          {new persianDate()
            .add('days', currentWeekDay)
            .toLocale('fa')
            .format(' DD MMMM')}
        </span>
        <b className={`${style.seprator} mx-1`}>__</b>
        <span>{dateCount}</span>
      </div>
      <div
        className="d-flex align-items-center"
        onClick={() => goNextWeekHandler()}
      >
        <small className="size curoser">هفته بعد</small>
        <BsChevronLeft size={12} className="mx-1" />
      </div>
    </div>
  )
}

export default HeaderCalendar
