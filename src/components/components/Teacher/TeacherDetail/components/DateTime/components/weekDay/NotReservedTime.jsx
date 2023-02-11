import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import persianDate from 'persian-date'
import TriggerExample from '../../../../../../../../utils/Tooltip'
import style from '../../style/datepicker.module.css'
import {
  showReservedModal,
  setSelectTimeForClassesHandler,
  modeDatepickerHandler,
  selectSteps,
  selectmodeDatepicker,
} from '../../../../../../../../app/store/Teacher store/Teacher'
function NotReservedTime({
  time,
  timeCovert,
  changeTimeSelectHandler,
  indexDate,
}) {
  const dispatch = useDispatch()
  const reff = useRef()
  const stepSlectClass = useSelector(selectSteps)
  const datepickerMode = useSelector(selectmodeDatepicker)
  let mode2Modal = ''
  let minutesVar = 30
  const selectDateFirstDatePicker = (timeSelect, date) => {
    if (stepSlectClass === 0) {
      dispatch(showReservedModal(true))
    }
    // if (stepSlectClass === 2) {
    // }
    if (!datepickerMode && stepSlectClass === 2) {
      changeTimeSelectHandler(timeSelect, indexDate, true)
      // reff.current.classList.add('activeTimeTest')
      handler(date, timeSelect)
    }
  }
  const selectDate = (timeSelect, date) => {
    changeTimeSelectHandler(timeSelect, indexDate, true)
    handler(date, timeSelect)
  }

  datepickerMode ? (minutesVar = 60) : (minutesVar = 30)

  const spltTime = time.time.split(':')
  const [hour, minutes] = spltTime
  const hourrTime = new persianDate([, , , hour, minutes, ,])
    .toLocale('fa')
    .format('H:mm')
  const addOnhour = new persianDate([, , , hour, minutes, ,])
    .add('minutes', minutesVar)
    .toLocale('fa')
    .format('H:mm')
  let currentTime = addOnhour + ' - ' + hourrTime + ' '
  let selectDateUser = addOnhour + ' - ' + hourrTime + ' ' + timeCovert

  mode2Modal = currentTime
  const handler = (selectDateStr, dateOnDB) => {
    let timeSelect = { id: dateOnDB.id, time: selectDateStr, indexDate }
    dispatch(setSelectTimeForClassesHandler(timeSelect))
  }

  return (
    <TriggerExample
      timeMode1={time.time}
      timeMode2={mode2Modal}
      align="right"
      timeCovert={timeCovert}
      datepickerMode={datepickerMode}
    >
      {datepickerMode ? (
        <div
          className={`${
            style.notreserved
          } curoser position-relative p-2 px-3  ${
            time.selectedUser ? 'activeTime' : ''
          }`}
          onClick={(event) => selectDate(time, selectDateUser)}
        >
          <span className="">{time.time}</span>
        </div>
      ) : (
        <div
          ref={reff}
          className={`${
            style.notreserved
          } curoser position-relative p-2 px-3  ${
            time.selectedUser ? 'activeTimeTest' : ''
          }`}
          onClick={(event) => selectDateFirstDatePicker(time, selectDateUser)}
        >
          <span className="">{time.time}</span>
        </div>
      )}
    </TriggerExample>
  )
}

export default NotReservedTime
