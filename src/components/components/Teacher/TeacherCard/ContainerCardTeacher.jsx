import React, { useEffect } from 'react'
import TeacherCard from './components/TeacherCard'
import LoadingCom from '../../../../utils/Loading'
import { useSelector } from 'react-redux'
import { Teachers } from '../../../../constants/Teachers' // clear after

import { useDispatch } from 'react-redux'
import {
  selectAllTeacher,
  getTeacherStatus,
  getTeacherError,
  fetchTeachers,
} from '../../../../app/store/Teacher store/Teacher'

function ContainerCardTeacher() {
  const dispatch = useDispatch()
  const teachers = useSelector(selectAllTeacher)
  const teacherStatus = useSelector(getTeacherStatus)
  const error = useSelector(getTeacherError)
  let content
  useEffect(() => {
    if (teacherStatus === 'idle') {
      dispatch(fetchTeachers())
    }
  }, [teacherStatus, dispatch])

  if (teacherStatus === 'loading') {
    content = <LoadingCom />
  } else if (teacherStatus === 'succeeded') {
    content = (
      <div className="mt-3 ">
        {teachers?.map((teacher, index) => {
          return <TeacherCard key={index} {...teacher} />
        })}
      </div>
    )
  } else if (teacherStatus === 'failed') {
    content = <p>{error}</p>
  }
  return <>{content}</>
}

export default ContainerCardTeacher
