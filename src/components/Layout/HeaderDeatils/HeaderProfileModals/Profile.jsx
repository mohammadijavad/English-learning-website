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
import flag from '../../../../assets/images/users/avatar-5.jpg'
function Profile({ index }) {
  const { showmodal, showModalHandler } = useContext(contextapp)
  return (
    <>
      <div
        className={`profileUserContent mx-3  d-flex align-items-center justify-content-between curoser ${
          showmodal === index ? 'activem ' : 'unactivem'
        }`}
        onClick={() => showModalHandler(index === showmodal ? false : index)}
      >
        <img
          src={flag}
          width="30px"
          height="30px"
          className="rounded-circle curoser mx-2"
          alt="USA"
        />
        <div className="d-lg-flex justify-content-between flex-column align-items-center px-2 d-none">
          <p className="m-0">Javad mohammadi</p>
          <span>Front end</span>
        </div>
      </div>

      <div
        className={` containerProfileSettings  containerModal position-absolute  shadow-sm  `}
      >
        <div className="mt-1 containerProfileLink">
          <div className="px-2">
            <span className="fontSize text-gray fontSizesm">
              {' '}
              خوش آمدید <b>javad</b>
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
              <span className="fontSizesm mx-2">پروفایل</span>
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
                showModalHandler(false)
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
