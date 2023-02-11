import React from 'react'
import CardTeacher from './components/TeacherCard'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectAllTeacher,
  selectTimeClasessSelect,
} from '../../../app/store/Teacher store/Teacher'
import { useParams } from 'react-router-dom'
import TimeList from './components/TimeList'
import TotalResult from './components/TotalResult'
function Payment() {
  const params = useParams()
  const { id } = params
  const allTeachers = useSelector(selectAllTeacher)
  const findTeacherSelected = allTeachers.find((teacher) => teacher.id === id)
  return (
    <div>
      <CardTeacher findTeacherSelected={findTeacherSelected} />
      <TimeList />
      <TotalResult />
    </div>
  )
}

export default Payment
