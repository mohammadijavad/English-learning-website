import React from 'react'
import style from '../style/userpage.module.css'
function TitleClass() {
  return (
    <div
      className={`${style.titleClass} d-flex justify-content-between align-items-center border-bottom border-gray`}
    >
      <div>
        <p className="mb-0 mb-1">کلاس های پیش رو</p>
      </div>
      <div>
        <p className={`${style.titleClassShow} curoser mb-0`}>مشاهده همه</p>
      </div>
    </div>
  )
}

export default TitleClass
