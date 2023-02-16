import React from 'react'
import style from '../../styles/ReservedModal.module.css'
import { useParams } from 'react-router-dom'
import {
  modeDatepickerHandler,
  typeClassedSelectedCountSelectTime,
  findTeacherHandler,
  getTeacher,
} from '../../../../../../../../app/store/Teacher store/Teacher'
import {
  getUserClassList,
  getUserTestClass,
} from '../../../../../../../../app/store/User store/user'
import { useDispatch, useSelector } from 'react-redux'
import { showAlertWarning } from '../../../../../../../../utils/alerts'
function ClassType({
  id,
  typeClass,
  time,
  price,
  setClassType,
  classType,
  count,
  test,
}) {
  const params = useParams()
  const { id: idteacher } = params
  const dispatch = useDispatch()
  dispatch(findTeacherHandler(idteacher))
  const AllclassListSelectedTestting = useSelector(getUserTestClass)
  const getCurrentTeacher = useSelector(getTeacher)
  const setClassInfoHandler = () => {
    console.log(count)
    const isExsitTeacher = AllclassListSelectedTestting.find(
      (teacher) => teacher.id === getCurrentTeacher.id,
    )
    console.log(isExsitTeacher, 2525)
    if (isExsitTeacher) {
      if (!test) {
        //if its false means user select teacher for testing knowlage english
        const { modeClass, nameTeacher } = isExsitTeacher
        if (modeClass === 'testing') {
          let textMessage = `  شما با استاد   ${nameTeacher}  قبلا کلاس آزمایشی رزررو کرده اید `
          showAlertWarning(textMessage)
          setClassType(0)
        } else {
          setClassType(id)
          dispatch(typeClassedSelectedCountSelectTime({ count, price }))
          dispatch(modeDatepickerHandler(test))
        }
      } else {
        // patch info teacher class before selected but change count private class with

        dispatch(typeClassedSelectedCountSelectTime({ count, price }))
        dispatch(modeDatepickerHandler(test))
        setClassType(id)
        console.log('for private before reserved')
      }
    } else {
      setClassType(id)
      dispatch(typeClassedSelectedCountSelectTime({ count, price }))
      dispatch(modeDatepickerHandler(test))
      console.log('for private not reserved')
    }
  }
  return (
    <div
      className={`w-100 border rounded p-2 mt-3 curoser ${
        style.containerStep1
      } ${id === classType ? style.active : ''}`}
      onClick={() => setClassInfoHandler()}
    >
      <div className="w-100 h-100 d-flex justify-content-between align-items-center">
        <div className="d-flex flex-column">
          <b>{typeClass}</b>
          <span className="mt-2">{time} دقیقه</span>
        </div>
        <div>
          <span>
            {price === 0 ? (
              <span className="mx-5 text-danger">رایگان</span>
            ) : (
              <div>
                <span> {price} تومان </span> / <span> یک جلسه </span>
              </div>
            )}{' '}
          </span>{' '}
        </div>
      </div>
    </div>
  )
}

export default ClassType
