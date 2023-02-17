import React, { useEffect } from 'react'
import TeacherCard from './components/TeacherCard'
import LoadingCom from '../../../../utils/Loading'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Teachers } from '../../../../constants/Teachers' // clear after
import noData from '../../../../assets/No data.svg'
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
  if (teachers?.length === 0) {
    content = (
      <Container>
        <img src={noData} alt="no data" />
      </Container>
    )
  }
  return <>{content}</>
}
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  & img {
    width: 50%;
    margin: 0 auto;
  }
  & a {
    color: #222;
  }
`
export default ContainerCardTeacher
