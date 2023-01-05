import React, { useState } from 'react'
import {
  Headerprofile,
  Useravatr,
  Usercups,
  Userinfo,
  Userclassdone,
  Userclasscancled,
  FavoriteProduct,
  FavoriteTeacher,
  Wallet,
  ChartUser,
} from './index'

import style from './style/Header.module.css'
function ProfileUser() {
  const [giftCard, setGiftCard] = useState({
    firstName: 'Jennifer',
    lastName: 'Smith',
    text: 'Free dinner for 4 guests',
    valid: true,
    instructions: 'To use your coupon, click the button below.',
  })

  return (
    <div className={`${style.ContainerProfileUser}`}>
      <Headerprofile />
      <Useravatr />
      <div className="row">
        <div className="col-12 col-lg-6">
          <Userinfo />
        </div>
        <div className="col-12 col-lg-6">
          <Usercups />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6">
          <Userclassdone />
        </div>
        <div className="col-12 col-lg-6">
          <Userclasscancled />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6">
          <FavoriteProduct />
        </div>
        <div className="col-12 col-lg-6">
          <FavoriteTeacher />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6">
          <Wallet />
        </div>
        <div className="col-12 col-lg-6">
          <ChartUser />
        </div>
      </div>
    </div>
  )
}

export default ProfileUser
