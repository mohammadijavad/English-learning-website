import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllTeacher } from '../../../../app/store/Teacher store/Teacher'
import { useParams } from 'react-router-dom'
import persianDate from 'persian-date'
import Cover from './components/Cover'
import PersonalInfo from './components/PersonalInfo'
import Description from './components/Description'
import VedioIntro from './components/VedioIntro'
import ContainerDatepicker from './components/DateTime/ContainerDatepicker'
function TeacherDetailInfo() {
  const params = useParams()
  const { id } = params
  const teachers = useSelector(selectAllTeacher)
  const findteacher = teachers.find((teacher) => teacher.id === id)
  const {
    photoTeacher,
    nameTeacher,
    discriptionTeacher,
    discriptionTeacherEnglish,
  } = findteacher

  return (
    <div className="container" style={{ height: '200vh' }}>
      <Cover />
      <div className="row justify-content-between">
        <div className="col-12 col-md-7 d-flex flex-column">
          <PersonalInfo photoTeacher={photoTeacher} nameTeacher={nameTeacher} />
          <Description
            discriptionTeacher={discriptionTeacher}
            discriptionTeacherEnglish={discriptionTeacherEnglish}
          />

          <hr className="mt-1" />
          {/* date time for book Classes with your favorite teacher */}
          <div className="w-100">
            <ContainerDatepicker />
          </div>
        </div>
        <VedioIntro findteacher={findteacher} />
      </div>
    </div>
  )
}

export default TeacherDetailInfo