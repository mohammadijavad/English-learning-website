import React, { useEffect } from 'react'
import HeaderModal from '../components/components/Teacher/TeacherDetail/components/reserved-modal/components/HeaderModal'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectAllTeacher,
  selectTimeClasessSelect,
} from '../app/store/Teacher store/Teacher'
import { useParams } from 'react-router-dom'
function SaveClass() {
  const params = useParams()
  const allTeachers = useSelector(selectAllTeacher)
  const allTimeSelected = useSelector(selectTimeClasessSelect)
  const { id } = params
  const teachers = useSelector(selectAllTeacher)
  const findteacher = teachers.find((teacher) => teacher.id === id)
  const {
    photoTeacher,
    nameTeacher,
    discriptionTeacher,
    discriptionTeacherEnglish,
    comments,
  } = findteacher
  useEffect(() => {
    console.log(allTimeSelected)
  }, [])
  return (
    <div className="container mt-4">
      <HeaderModal step={3} />
    </div>
  )
}

export default SaveClass
