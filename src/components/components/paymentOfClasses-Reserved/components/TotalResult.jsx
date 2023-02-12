import React from 'react'
import style from '../style/payment.module.css'
import {
  stepModalToSelectTime,
  setSelectTimeForClassesHandler,
  modeDatepickerHandler,
  setCounterHandler,
  selectTotalCount,
  addToClassListStudent,
  selectTimeClasessSelect,
} from '../../../../app/store/Teacher store/Teacher'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function TotalResult({ findTeacherSelected }) {
  const totalResult = useSelector(selectTotalCount)
  const selectTimeArray = useSelector(selectTimeClasessSelect)
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const mode = 'POST'
  const payClassHandler = () => {
    const { photoTeacher, id, nameTeacher } = findTeacherSelected
    const finalDataPushToUserProfile = {
      idTeacher: id,
      nameTeacher,
      photoTeacher,
      selectTimeArray,
    }
    dispatch(addToClassListStudent({ mode, finalDataPushToUserProfile }))
    dispatch(stepModalToSelectTime(0))
    dispatch(setSelectTimeForClassesHandler(false))
    dispatch(modeDatepickerHandler(false))
    dispatch(setCounterHandler(0))
    setTimeout(() => {
      navigator('/profile')
    }, 2000)
  }
  return (
    <div className={`mt-4 ${style.teacherInfo}`}>
      <div className="border-top mb-2">
        <div className="d-flex align-items-center justify-content-between mt-4">
          <h4>مبلغ صورت حساب:</h4>
          <h4>{totalResult} تومان</h4>
        </div>
      </div>
      <div className="border-top">
        <div className="d-flex align-items-center justify-content-between mt-4">
          <h4>مبلغ صورت حساب:</h4>
          <h4 className="fontfamilyNumber">{totalResult} تومان</h4>
        </div>
      </div>
      <div className=" w-100   d-flex justify-content-center mt-4">
        <button
          className="btn w-100 p-2 rounded shadow shadow-sm shadow-info bg-info text-white "
          onClick={() => payClassHandler()}
        >
          پرداخت هزینه
        </button>
      </div>
    </div>
  )
}

export default TotalResult
