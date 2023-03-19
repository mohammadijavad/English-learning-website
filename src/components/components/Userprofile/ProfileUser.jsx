import React, { useEffect } from 'react'
import ProfileDetal from './ProfileDetal'
import axios from 'axios'
import {
  getUserStatus,
  fetchClassListTesting,
  fetchClassList,
} from '../../../app/store/User store/user'
import { useDispatch, useSelector } from 'react-redux'
import LoadingCom from '../../../utils/Loading'
import { useQuery, useQueries } from 'react-query'
function ProfileUser() {
  let content
  const dispatch = useDispatch()
  const status = useSelector(getUserStatus)
  // const error = useSelector(getUserError)
  useEffect(() => {
    dispatch(fetchClassListTesting())
    dispatch(fetchClassList())
  }, [])
  const getUser = () => {
    return axios.get('http://localhost:3100/user')
  }
  const { data, isLoading, isError, error } = useQuery(['user-data'], getUser, {
    onSuccess() {
      console.log(data.data)
    },
  })
  const [getUserData, getUserClassList, getUserTestClass] = useQueries([
    {
      queryKey: 'userInfo',
      queryFn: () => axios.get('http://localhost:3100/user'),
    },
    {
      queryKey: 'userClassList',
      queryFn: () => axios.get('http://localhost:3100/userClassesList'),
    },
    {
      queryKey: 'userClassListTest',
      queryFn: () => axios.get(' http://localhost:3100/userClassesListTesting'),
    },
  ])

  if (getUserData.isLoading || getUserClassList.isLoading) {
    content = <LoadingCom />
  }
  if (data && !isLoading) {
    content = (
      <ProfileDetal
        userINfo={getUserData.data.data}
        userClassList={getUserClassList.data.data}
        userClassListTest={getUserTestClass.data.data}
      />
    )
  }
  if (isError) {
    content = <p>{error.message}</p>
  }
  return <>{content}</>
}

export default ProfileUser
