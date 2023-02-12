import React, { useRef, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import persianDate from 'persian-date'
import TriggerExample from '../../../../../../../../utils/Tooltip'
import style from '../../style/datepicker.module.css'
import 'react-toastify/dist/ReactToastify.css'
import {
  showReservedModal,
  setSelectTimeForClassesHandler,
  counterSelectTime,
  countSelectedClassType,
  selectSteps,
  selectmodeDatepicker,
} from '../../../../../../../../app/store/Teacher store/Teacher'
import { contextapp } from '../../../../../../../../contexts/ContextProv'
function NotReservedTime({
  time,
  timeCovert,
  changeTimeSelectHandler,
  indexDate,
}) {
  const { showAlertHandler } = useContext(contextapp)
  const dispatch = useDispatch()
  const reff = useRef()
  const stepSlectClass = useSelector(selectSteps)
  const datepickerMode = useSelector(selectmodeDatepicker)
  const counterSelectTimeUser = useSelector(counterSelectTime)
  const allCountUserAllowToSelect = useSelector(countSelectedClassType)
  let mode2Modal = ''
  let minutesVar = 30

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
  let selectDateUser = addOnhour + '- ' + hourrTime + '  ' + timeCovert
  let timeHourSelected = hourrTime + '- ' + addOnhour
  let dateSelected = timeCovert
  mode2Modal = currentTime

  const selectDateFirstDatePicker = (timeSelect, date) => {
    if (stepSlectClass === 0) {
      dispatch(showReservedModal(true))
    }
    if (!datepickerMode && stepSlectClass === 2) {
      selectDate(timeSelect, date)
    }
  }
  const selectDate = (timeSelect, date) => {
    let timeSelected = {
      id: timeSelect.id,
      time: date,
      indexDate,
      timeHourSelected,
      dateSelected,
      teacher: [],
    }
    if (counterSelectTimeUser === allCountUserAllowToSelect) {
      showAlertHandler('بیشتر از تعداد جلسات نمی توانید انتخاب کنید')
    } else {
      changeTimeSelectHandler(timeSelect, indexDate, true)
      dispatch(setSelectTimeForClassesHandler(timeSelected))
    }
  }

  return (
    <>
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
            } curoser position-relative p-2 px-3   ${
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
    </>
  )
}

export default NotReservedTime
