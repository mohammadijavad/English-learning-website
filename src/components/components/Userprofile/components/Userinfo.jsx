import React from 'react'
import style from '../style/userpage.module.css'
import { userInfo } from '../../../../constants/ProfilepageData'
import US from '../../../../assets/images/flags/us.svg'
import Germany from '../../../../assets/images/flags/germany.svg'

function Userinfo({ userInformation }) {
  const {
    name,
    userGol,
    languages,
    siningTime,
    selectedLangLearning,
  } = userInformation
  let flag = ''
  let lang = ''
  if (selectedLangLearning === 'US') {
    flag = US
    lang = 'زبان انگلیسی'
  } else {
    flag = Germany
    lang = 'زبان آلمانی'
  }
  return (
    <div className={`${style.userInfo}`}>
      <div className="mb-2"> {name}</div>
      <div className="my-3">
        <span>{lang}</span>
        <span>
          <img
            width="20px"
            height="15px"
            className="rounded shadow-sm mx-2"
            src={flag}
            alt=""
          />
        </span>
      </div>
      <div className="my-2">
        هدف :<b>{userGol}</b>
      </div>
      <div className="my-2">
        زمان ثبت نام :<b> {siningTime} </b>
      </div>
    </div>
  )
}

export default Userinfo
