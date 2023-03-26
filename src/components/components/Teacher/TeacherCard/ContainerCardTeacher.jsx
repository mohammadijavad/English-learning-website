import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import TeacherCard from './components/TeacherCard'
import LoadingCom from '../../../../utils/Loading'
import styled from 'styled-components'
import noData from '../../../../assets/No data.svg'
// import { useSelector } from 'react-redux'
// import { Teachers } from '../../../../constants/Teachers' // clear after
// import { useDispatch } from 'react-redux'
// import {
//   selectAllTeacher,
//   getTeacherStatus,
//   getTeacherError,
//   fetchTeachers,
// } from '../../../../app/store/Teacher store/Teacher'
import axios from 'axios'

function ContainerCardTeacher() {
  // const dispatch = useDispatch()
  // const teachers = useSelector(selectAllTeacher)
  // const teacherStatus = useSelector(getTeacherStatus)

  let content
  // useEffect(() => {
  //   if (teacherStatus === 'idle') {
  //     dispatch(fetchTeachers())
  //   }
  // }, [teacherStatus, dispatch])
  const getTeachers = () => {
    return axios.get('http://localhost:3100/Teachers')
  }
  const { data, isLoading, refetch, isError, error } = useQuery(
    ['teachers'],
    getTeachers,
    { refetchOnWindowFocus: true },
  )

  if (isLoading) {
    content = <LoadingCom />
  } else if (data.data.length > 0) {
    content = (
      <div className="mt-3 ">
        {data?.data?.map((teacher, index) => {
          return <TeacherCard key={index} {...teacher} />
        })}
      </div>
    )
  } else if (isError) {
    content = <p>{error.message}</p>
  }
  if (!data) {
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
