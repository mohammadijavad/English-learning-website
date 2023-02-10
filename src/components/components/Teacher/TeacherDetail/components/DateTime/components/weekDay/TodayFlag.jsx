import React from 'react'
import style from '../../style/datepicker.module.css'
function TodayFlag({ weekName, todayDate, isCurrentDate }) {
  return (
    <div className=" border-4 border-top border-info mx-1 text-center d-flex justify-content-center align-items-center flex-column">
      <span className="mt-2">{weekName}</span>
      <span>{todayDate}</span>
      {isCurrentDate && <span className={style.currentDateBolet}>امروز</span>}
    </div>
  )
}

export default TodayFlag
