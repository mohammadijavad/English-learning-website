import React, { useEffect } from 'react'
import ProfileDetal from './ProfileDetal'
import axios from 'axios'
import {
  getUserError,
  getUserStatus,
  fetchUser,
  fetchClassListTesting,
  fetchClassList,
} from '../../../app/store/User store/user'
import { useDispatch, useSelector } from 'react-redux'
import LoadingCom from '../../../utils/Loading'
import { useQuery } from 'react-query'
function ProfileUser() {
  let content
  const dispatch = useDispatch()
  const status = useSelector(getUserStatus)
  // const error = useSelector(getUserError)
  useEffect(() => {
    dispatch(fetchUser())
    dispatch(fetchClassListTesting())
    dispatch(fetchClassList())
  }, [])
  const getUser = () => {
    return axios.get('http://localhost:3100/user')
  }
  const { data, isLoading, isError, refetch, error } = useQuery([
    'user-data',
    getUser,
  ])

  if (status === 'loading') {
    content = <LoadingCom />
  }
  if (status === 'succeeded') {
    content = <ProfileDetal />
  }
  if (isError) {
    content = <p>{error.message}</p>
  }
  return <>{content}</>
}

export default ProfileUser
