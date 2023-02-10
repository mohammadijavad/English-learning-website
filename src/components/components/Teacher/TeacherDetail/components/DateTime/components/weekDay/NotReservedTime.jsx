import React, { useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import persianDate from 'persian-date'
import TriggerExample from '../../../../../../../../utils/Tooltip'
import style from '../../style/datepicker.module.css'
import {
  showReservedModal,
  setSelectTimeForClassesHandler,
} from '../../../../../../../../app/store/Teacher store/Teacher'
function NotReservedTime({ time, timeCovert, mode }) {
  let mode2Modal = ''
  const dispatch = useDispatch()
  const reff = useRef()
  const selectDateFirstDatePicker = () => {
    dispatch(showReservedModal(mode))
  }
  const selectDate = (timeSelect, date) => {
    if (!mode) {
      reff.current.classList.add('activeTime')
    }
    const time = timeSelect.time + ' ' + date
    // const timeSet = { id: id++, time }

    handler(date, timeSelect)
  }
  const spltTime = time.time.split(':')
  const [hour, minutes] = spltTime
  const hourrTime = new persianDate([, , , hour, minutes, ,])
    .toLocale('fa')
    .format('H:mm')
  const addOnhour = new persianDate([, , , hour, minutes, ,])
    .add('minutes', 60)
    .toLocale('fa')
    .format('H:mm')
  let currentTime = addOnhour + ' - ' + hourrTime + ' '
  let selectDateUser = addOnhour + ' - ' + hourrTime + ' ' + timeCovert
  mode2Modal = currentTime
  const handler = (selectDateStr, dateOnDB) => {
    let timeSelect = { id: dateOnDB.id, time: selectDateStr }
    dispatch(setSelectTimeForClassesHandler(timeSelect))
  }

  return (
    <TriggerExample
      timeMode1={time.time}
      timeMode2={mode2Modal}
      align="right"
      timeCovert={timeCovert}
      mode={mode}
    >
      {mode ? (
        <div
          className={`${style.notreserved} curoser position-relative p-2 px-3  `}
          onClick={(event) => selectDateFirstDatePicker()}
        >
          <span className="">{time.time}</span>
        </div>
      ) : (
        <div
          ref={reff}
          className={`${style.notreserved} curoser position-relative p-2 px-3  `}
          onClick={(event) => selectDate(time, selectDateUser)}
        >
          <span className="">{time.time}</span>
        </div>
      )}
    </TriggerExample>
  )
}

export default NotReservedTime
