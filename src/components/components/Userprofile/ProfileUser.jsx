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
  UserClassList,
  FavoriteWord,
} from './index'

import style from './style/Header.module.css'
function ProfileUser() {
  return (
    <div className={`${style.ContainerProfileUser}`}>
      <Headerprofile />
      <Useravatr />
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <Userinfo />
          </div>
          <div className="col-12 col-lg-6">
            <Usercups />
          </div>
          <div className="col-12 mt-2">
            <UserClassList />
          </div>
          <div className="col-12 ">
            <Userclassdone />
          </div>
          <div className="col-12 ">
            <Userclasscancled />
          </div>
          <div className="col-12 col-lg-4">
            <FavoriteProduct />
          </div>
          <div className="col-12 col-lg-4">
            <FavoriteTeacher />
          </div>
          <div className="col-12 col-lg-4">
            <FavoriteWord />
          </div>
          <div className="col-12 col-lg-6">
            <Wallet />
          </div>
          <div className="col-12 col-lg-6 mt-3">
            <ChartUser />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileUser
