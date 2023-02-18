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
} from './index'
import {
  selectUser,
  getUserClassList,
  getUserTestClass,
} from '../../../app/store/User store/user'
import style from './style/Header.module.css'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
function ProfileUser() {
  const user = useSelector(selectUser)
  const classList = useSelector(getUserClassList)
  const classListTesing = useSelector(getUserTestClass)
  const userProfileData = user[0]
  return (
    <div className={`${style.ContainerProfileUser} `}>
      <Helmet>
        <meta charSet="utf-8" />
        <title> پروفایل {userProfileData.name} | بستاک</title>
      </Helmet>
      <Headerprofile />
      <Useravatr />
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <Userinfo userInformation={userProfileData} />
          </div>
          <div className="col-12 col-lg-6">
            <Usercups userInformation={userProfileData} />
          </div>
          <div className="col-12 mt-2">
            <UserClassList classList={[...classList, ...classListTesing]} />
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
