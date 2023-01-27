import React, { useEffect } from 'react'
import ProfileDetal from './ProfileDetal'
import {
  getUserError,
  getUserStatus,
  fetchUser,
} from '../../../app/store/User store/user'
import { useDispatch, useSelector } from 'react-redux'
import LoadingCom from '../../../utils/Loading'
function ProfileUser() {
  let content
  const dispatch = useDispatch()
  const status = useSelector(getUserStatus)
  const error = useSelector(getUserError)
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUser())
    }
  }, [status, dispatch])
  if (status === 'loading') {
    content = <LoadingCom />
  } else if (status === 'succeeded') {
    content = <ProfileDetal />
  } else if (status === 'failed') {
    content = <p>{error}</p>
  }
  return <>{content}</>
}

export default ProfileUser
