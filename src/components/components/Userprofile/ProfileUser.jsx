import React from 'react'
import Headerprofile from './components/Headerprofile'
import Useravatr from './components/Useravatr'
import style from './style/Header.module.css'
function ProfileUser() {
  return (
    <div className={`${style.ContainerProfileUser}`}>
      <Headerprofile />
      <Useravatr />
    </div>
  )
}

export default ProfileUser
