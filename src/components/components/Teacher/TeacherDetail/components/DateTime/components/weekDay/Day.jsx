import React from 'react'
import style from '../../style/datepicker.module.css'
import TriggerExample from '../../../../../../../../utils/Tooltip'
function Day({ type, text, findteacher }) {
  const { timeClassForBook } = findteacher
  const { id, times } = timeClassForBook[0]
  const { alltime, bookedTime } = times[0]
  return (
    <div style={{ flex: 1, justifyContent: 'center' }}>
      <div className=" border-4 border-top border-info mx-1 text-center d-flex justify-content-center align-items-center flex-column">
        <span className="mt-2">{text}</span>
        <span></span>
      </div>
      <div className="mt-3 w-100 d-flex justify-content-center align-items-center flex-column">
        {alltime?.map((time) =>
          time.isBooked ? (
            <TriggerExample text={time.time} align="right">
              <div
                className={`${style.notreserved} curoser position-relative p-2`}
              >
                <span className="p-1">{time.time}</span>
              </div>
            </TriggerExample>
          ) : (
            <TriggerExample
              text={' زمان توسط شخص دیگری رزرو شده است '}
              align="top"
            >
              <div className={`${style.bookedTime} p-1`}>
                <span className="p-1">{time.time}</span>
              </div>
            </TriggerExample>
          ),
        )}
      </div>
    </div>
  )
}

export default Day
