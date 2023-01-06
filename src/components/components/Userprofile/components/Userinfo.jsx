import React from 'react'
import style from '../style/userpage.module.css'
function Userinfo() {
  return (
    <div className={`${style.userInfo}`}>
      <p>جواد محمدی</p>
      <p>زبان انگلیسی ✅</p>
      <p>
        هدف <b>IELTS</b>
      </p>
      <p>
        زمان ثبت نام <b>12 مهر 14101</b>
      </p>
    </div>
  )
}

export default Userinfo
