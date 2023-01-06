import React from 'react'
import style from '../style/userpage.module.css'
function TitleClass() {
  return (
    <div
      className={`${style.titleClass} d-flex justify-content-between align-items-center border-bottom border-gray`}
    >
      <div className="mb-3">
        <b>کلاس های پیش رو</b>
      </div>
      <div>
        <b className={`${style.titleClassShow} curoser mb-0`}>مشاهده همه</b>
      </div>
    </div>
  )
}

export default TitleClass
