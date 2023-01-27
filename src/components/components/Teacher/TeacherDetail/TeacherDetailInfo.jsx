import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectAllTeacher } from '../../../../app/store/Teacher store/Teacher'
import { useParams } from 'react-router-dom'
function TeacherDetailInfo() {
  const params = useParams()
  const { id } = params
  const teachers = useSelector(selectAllTeacher)
  const findteacher = teachers.find((teacher) => teacher.id === id)
  useEffect(() => {
    console.log(findteacher, 111)
  }, [])
  return <div>TeacherDetailInfo</div>
}

export default TeacherDetailInfo
