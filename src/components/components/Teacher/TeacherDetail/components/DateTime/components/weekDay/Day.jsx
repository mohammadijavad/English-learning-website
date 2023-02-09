import React, { useRef } from 'react'
import style from '../../style/datepicker.module.css'
import TriggerExample from '../../../../../../../../utils/Tooltip'
import persianDate from 'persian-date'
import { showReservedModal } from '../../../../../../../../app/store/Teacher store/Teacher'
import { useDispatch } from 'react-redux'
function Day({
  type,
  text,
  findteacher,
  index,
  nextWekkCount,
  currentWeekDay,
  mode,
}) {
  const { timeClassForBook } = findteacher
  const { times } = timeClassForBook[0]
  let { alltime } = times[index]
  const reff = useRef()
  const monthName = new persianDate().format('MMMM') //day of Week
  const month = new persianDate().month() //month
  const dayofmonth = new persianDate().date() //Date of Month
  const year = new persianDate().year() //year
  const dispatch = useDispatch()
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

  const selectDate = (event) => {
    dispatch(showReservedModal(mode))
    if (!mode) {
      reff.current.classList.add('activeTime')
    }
  }
  const isCurrentDate = currentDate === dayofmonth
  return (
    <div
      className={`${
        isCurrentDate ? style.activeCureentDate : ''
      } h-100 rounded`}
      style={{ flex: 1, justifyContent: 'center', height: '500px' }}
    >
      <div className=" border-4 border-top border-info mx-1 text-center d-flex justify-content-center align-items-center flex-column">
        <span className="mt-2">{weekName}</span>
        <span>{todayDate}</span>
        {isCurrentDate && <span className={style.currentDateBolet}>امروز</span>}
      </div>
      <div className="mt-3 w-100 d-flex justify-content-center align-items-center flex-column">
        {alltime?.map((time, index) =>
          time.isBooked ? (
            <TriggerExample
              text={' زمان توسط شخص دیگری رزرو شده است '}
              align="top"
            >
              <div className={`${style.bookedTime}`}>
                <span className="p-2 px-3 mx-1">{time.time}</span>
              </div>
            </TriggerExample>
          ) : (
            <TriggerExample
              key={index}
              text={time.time}
              align="right"
              timeCovert={weekName + ' ' + todayDate + '  ' + monthName}
              weekName={weekName}
              todayDate={todayDate}
              monthName={monthName}
            >
              <div
                ref={reff}
                className={`${style.notreserved} curoser position-relative p-2 px-3  `}
                onClick={(event) => selectDate(event)}
              >
                <span className="">{time.time}</span>
              </div>
            </TriggerExample>
          ),
        )}
      </div>
    </div>
  )
}

export default Day
