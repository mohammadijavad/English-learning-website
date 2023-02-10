import React from 'react'
import Tooltip from '../../../../../../../../utils/Tooltip'
import style from '../../style/datepicker.module.css'
function ReservedTime({ time }) {
  return (
    <Tooltip text={' زمان توسط شخص دیگری رزرو شده است '} align="top">
      <div className={`${style.bookedTime}`}>
        <span className="p-2 px-3 mx-1">{time.time}</span>
      </div>
    </Tooltip>
  )
}

export default ReservedTime
