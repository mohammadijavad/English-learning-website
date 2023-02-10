import React, { useState } from 'react'
import style from './styles/ReservedModal.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import {
  showModalSetClassTimeHandler,
  setSelectTimeForClassesHandler,
  modeDatepickerHandler,
  stepModalToSelectTime,
  selectSteps,
} from '../../../../../../app/store/Teacher store/Teacher'
import HeaderModal from './components/HeaderModal'
import Step1 from './components/step1-selectClass-type/Step1'
import Footer from './components/step1-selectClass-type/Footer'
import WeekDays from '../DateTime/components/WeekDays'
function ReservedModal({ findteacher }) {
  const dispatch = useDispatch()
  const [classType, setClassType] = useState(0)
  const [countClass, setCountClass] = useState(1)
  const step = useSelector(selectSteps)
  const clearSelectTimeHandler = () => {
    dispatch(setSelectTimeForClassesHandler(false))
    dispatch(modeDatepickerHandler(false))
    dispatch(stepModalToSelectTime(0))
  }
  return (
    <div className={`${style.containerModal} `}>
      <div className={`${style.content} container position-relative`}>
        <div className="mt-4 mx-4">
          <span
            className="p-1 curoser"
            onClick={() => dispatch(showModalSetClassTimeHandler(false))}
          >
            <AiOutlineClose
              size={18}
              onClick={() => clearSelectTimeHandler()}
            />
          </span>
        </div>
        <div className="mt-3 px-4">
          <HeaderModal />
        </div>
        <div>
          {step === 1 && (
            <Step1
              setClassType={setClassType}
              setCountClass={setCountClass}
              classType={classType}
              findteacher={findteacher}
            />
          )}
          {step === 2 && (
            <WeekDays
              findteacher={findteacher}
              currentWeekDay={0}
              nextWekkCount={6}
              typeClass={false}
              step={step}
            />
          )}
        </div>
        <div className="mt-3">
          <Footer findteacher={findteacher} classType={classType} />
        </div>
      </div>
    </div>
  )
}

export default ReservedModal
