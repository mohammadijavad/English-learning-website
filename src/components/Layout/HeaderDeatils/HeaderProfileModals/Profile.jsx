import React, { useState, useContext } from 'react'
import { contextapp } from '../../../../contexts/ContextProv'
import {
  BsPersonCircle,
  BsChatLeftText,
  BsCalendar2Check,
  BsLifePreserver,
  BsWallet2,
  BsFileLock,
  BsBoxArrowRight,
} from 'react-icons/bs'
import { AiOutlineSetting } from 'react-icons/ai'
import { selectUser } from '../../../../app/store/User store/user'
import { useAuth } from '../../../../contexts/AuthContext'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function Profile({ index }) {
  const { showmodal, showModalHandler } = useContext(contextapp)
  const userInformation = useSelector(selectUser)
  const value = useAuth()
  const logout = () => {
    value.logout()
    showModalHandler(false)
  }
  return (
    <>
      <div
        className={`profileUserContent mx-3  d-flex align-items-center justify-content-between curoser ${
          showmodal === index ? 'activem ' : 'unactivem'
        }`}
        onClick={() => showModalHandler(index === showmodal ? false : index)}
      >
        <img
          src={userInformation.userPhoto}
          width="30px"
          height="30px"
          className="rounded-circle curoser mx-2"
          alt={userInformation.nmae}
        />
        <div className="d-lg-flex justify-content-between flex-column align-items-center px-2 d-none">
          <p className="m-0">{userInformation.name}</p>
          <span>{userInformation.position}</span>
        </div>
      </div>

      <div
        className={` containerProfileSettings  containerModal position-absolute  shadow-sm  `}
      >
        <div className="mt-1 containerProfileLink">
          <div className="px-2">
            <span className="fontSize text-gray fontSizesm">
              {' '}
              خوش آمدید <b>{userInformation.name}</b>
            </span>
          </div>
          <div className="mt-2 ">
            <div
              className="mt-2 d-flex align-items-center p-1 px-2 flagName curoser"
              onClick={() => {
                showModalHandler(false)
              }}
            >
              <span>
                <BsPersonCircle size={15} />
              </span>
              <span className="fontSizesm mx-2">
                <Link to="/profile/setting">تنظیمات پروفایل</Link>
              </span>
            </div>
            <div
              className="mt-2 d-flex align-items-center p-1 px-2 flagName curoser"
              onClick={() => {
                showModalHandler(false)
              }}
            >
              <span>
                <BsChatLeftText size={15} />
              </span>
              <span className="fontSizesm mx-2">پیغام ها</span>
            </div>
            <div
              className="mt-2 d-flex align-items-center p-1 px-2 flagName curoser"
              onClick={() => {
                showModalHandler(false)
              }}
            >
              <span>
                <BsCalendar2Check size={15} />
              </span>
              <span className="fontSizesm mx-2">کارها</span>
            </div>
            <div
              className="mt-2 d-flex align-items-center p-1 px-2 flagName curoser"
              onClick={() => {
                showModalHandler(false)
              }}
            >
              <span>
                <BsLifePreserver size={15} />
              </span>
              <span className="fontSizesm mx-2">راهنمایی</span>
            </div>
          </div>
          <div className="border border-bottom"></div>
          <div className="">
            <div
              className=" d-flex align-items-center p-1 px-2 flagName curoser"
              onClick={() => {
                showModalHandler(false)
              }}
            >
              <span>
                <BsWallet2 size={15} />
              </span>
              <span className="fontSizesm mx-2">کیف پول</span>
            </div>
            <div
              className=" d-flex align-items-center p-1 px-2 flagName curoser"
              onClick={() => {
                showModalHandler(false)
              }}
            >
              <span>
                <AiOutlineSetting size={15} />
              </span>
              <span className="fontSizesm mx-2"> تنظیمات</span>
            </div>
            <div
              className="mt-2 d-flex align-items-center p-1 px-2 flagName curoser"
              onClick={() => {
                showModalHandler(false)
              }}
            >
              <span>
                <BsFileLock size={15} />
              </span>
              <span className="fontSizesm mx-2">قفل</span>
            </div>
            <div
              className="mt-2 d-flex align-items-center p-1 px-2 flagName curoser"
              onClick={() => {
                logout()
              }}
            >
              <span>
                <BsBoxArrowRight size={15} />
              </span>
              <span className="fontSizesm mx-2">خروج</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
