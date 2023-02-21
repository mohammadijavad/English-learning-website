import React from 'react'
import user5 from '../../../../assets/images/users/avatar-5.jpg'
import style from '../style/Header.module.css'

function Useravatr({ userProfileData }) {
  return (
    <div
      className={`w-100 d-flex justify-content-center align-items-start ${style.containerAvatarUser}`}
    >
      <div className={`d-flex  align-items-center  ${style.containerinfoUser}`}>
        <div className={`${style.roundAvatar}`}>
          <img
            src={userProfileData.userPhoto}
            alt=""
            width={200}
            height={200}
            className="mx-2"
          />
        </div>
      </div>
    </div>
  )
}

export default Useravatr
