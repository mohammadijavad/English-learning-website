import React from 'react'

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
  Dictionary,
} from './index'
import {
  selectUser,
  getUserClassList,
  getUserTestClass,
} from '../../../app/store/User store/user'
import style from './style/Header.module.css'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'

function ProfileUser({ userINfo, userClassList, userClassListTest }) {
  return (
    <div className={`${style.ContainerProfileUser} `}>
      <Helmet>
        <title> پروفایل {userINfo?.name} | بستاک</title>
      </Helmet>
      <Headerprofile />
      <Useravatr userProfileData={userINfo} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <Userinfo userInformation={userINfo} />
          </div>
          <div className="col-12 col-lg-6">
            <Usercups userAchive={userINfo.userAchive} />
          </div>
          <div className="col-12 mt-2">
            <UserClassList
              classList={[...userClassList, ...userClassListTest]}
            />
          </div>
          <div className="col-12 ">
            <Userclassdone classList={[]} />
          </div>
          <div className="col-12 ">
            <Userclasscancled classList={[]} />
          </div>
          <div className="col-12 col-lg-3">
            <FavoriteProduct />
          </div>
          <div className="col-12 col-lg-3">
            <FavoriteTeacher />
          </div>
          <div className="col-12 col-lg-3">
            <FavoriteWord />
          </div>
          <div className="col-12 col-lg-3">
            <Dictionary />
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
