import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectAllTeacher } from '../../../../app/store/Teacher store/Teacher'
import { useParams } from 'react-router-dom'
import style from './teacherDetail.module.css'
import cover1 from '../../../../assets/images/teachers/cover1.jpg'
function TeacherDetailInfo() {
  const params = useParams()
  const { id } = params
  const teachers = useSelector(selectAllTeacher)
  const findteacher = teachers.find((teacher) => teacher.id === id)
  useEffect(() => {
    console.log(findteacher, 111)
  }, [])
  return (
    <div className="container">
      <div className={style.bgCoverTeacher}>
        <img src={cover1} alt="" />
      </div>
      <div className={style.teacherPersonalInfo}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="d-md-block position-fixed"></div>
      </div>
    </div>
  )
}

export default TeacherDetailInfo
