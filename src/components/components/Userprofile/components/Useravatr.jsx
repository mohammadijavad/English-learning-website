import React from 'react'
import user5 from '../../../../assets/images/users/avatar-5.jpg'
import style from '../style/Header.module.css'
import Usercups from './Usercups'
function Useravatr() {
  return (
    <div className="w-100 d-flex justify-content-center align-items-start p-3">
      <div className={`d-flex  align-items-center  ${style.containerinfoUser}`}>
        <div className={`${style.roundAvatar}`}>
          <img src={user5} alt="" className="mx-2" />
        </div>
      </div>
    </div>
  )
}

export default Useravatr
