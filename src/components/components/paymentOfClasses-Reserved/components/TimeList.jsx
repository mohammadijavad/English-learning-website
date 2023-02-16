import React from 'react'
import style from '../style/payment.module.css'
import { selectTimeClasessSelect } from '../../../../app/store/Teacher store/Teacher'
import { useSelector } from 'react-redux'
function TimeList() {
  const selectedTimeList = useSelector(selectTimeClasessSelect)
  console.log(selectedTimeList)

  return (
    <div className="text-dark">
      {selectedTimeList.map((time, index) => (
        <div
          className={`${style.teacherInfo} border-top mt-3 text-dark`}
          key={index}
        >
          <div className="d-flex justify-content-between mt-2 fontsize14">
            <span>تاریخ برگزاری:</span>
            <span>{time.dateSelected}</span>
          </div>
          <div className="d-flex justify-content-between mt-2 fontsize14">
            <span>ساعت:</span>
            <span>{time.timeHourSelected}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TimeList
