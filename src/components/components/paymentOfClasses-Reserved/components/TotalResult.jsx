import React, { useEffect } from 'react'
import style from '../style/payment.module.css'
import {
  stepModalToSelectTime,
  setSelectTimeForClassesHandler,
  modeDatepickerHandler,
  setCounterHandler,
  selectTotalCount,
  addToClassListStudent,
  selectTimeClasessSelect,
  selectmodeDatepicker,
  findTeacherHandler,
  getTeacher,
  counterSelectTime,
  countSelectedClassType,
} from '../../../../app/store/Teacher store/Teacher'
import { getUserClassList } from '../../../../app/store/User store/user'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
function TotalResult({ findTeacherSelected }) {
  const params = useParams()
  let mode = 'POST'
  const { id: idteacher } = params
  const dispatch = useDispatch()
  dispatch(findTeacherHandler(idteacher))
  const AllclassListSelected = useSelector(getUserClassList)
  const getCurrentTeacher = useSelector(getTeacher)
  const totalResult = useSelector(selectTotalCount)
  const selectTimeArray = useSelector(selectTimeClasessSelect)
  const modeClass = useSelector(selectmodeDatepicker)
  const selectedClassUserChoice = useSelector(counterSelectTime)
  const selectAnotherTime = useSelector(countSelectedClassType)
  const { photoTeacher, id, nameTeacher } = findTeacherSelected
  const calcClassCounter = selectAnotherTime - selectedClassUserChoice
  const finalDataPushToUserProfile = {
    id: id,
    nameTeacher,
    photoTeacher,
    selectTimeArray,
    modeClass,
    selectedAnotherTime: calcClassCounter,
  }
  const isExsitTeacher = AllclassListSelected.find(
    (teacher) => teacher.id === getCurrentTeacher.id,
  )
  if (isExsitTeacher && isExsitTeacher.modeClass === 'private') {
    mode = 'patch'
  } else {
    mode = 'post'
  }
  // console.log(mode)
  const setClassInfoHandler = () => {
    dispatch(addToClassListStudent({ mode, finalDataPushToUserProfile }))
    // dispatch(stepModalToSelectTime(0))
    // dispatch(setSelectTimeForClassesHandler(false))
    // dispatch(modeDatepickerHandler(false))
    // dispatch(setCounterHandler(0))
  }
  console.log(mode, 111111)
  // const navigator = useNavigate()

  const payClassHandler = () => {
    // dispatch(addToClassListStudent({ mode, finalDataPushToUserProfile }))
    // dispatch(stepModalToSelectTime(0))
    // dispatch(setSelectTimeForClassesHandler(false))
    // dispatch(modeDatepickerHandler(false))
    // dispatch(setCounterHandler(0))
    // setTimeout(() => {
    //   navigator('/profile')
    // }, 2000)
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
          onClick={() => setClassInfoHandler()}
        >
          پرداخت هزینه
        </button>
      </div>
    </div>
  )
}

export default TotalResult
