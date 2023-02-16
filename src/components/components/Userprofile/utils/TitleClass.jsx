import React from 'react'
import style from '../style/userpage.module.css'
import { BsChevronDown } from 'react-icons/bs'
function TitleClass({ title, mode }) {
  const border = mode ? '' : 'border-bottom'
  return (
    <div
      className={`${style.titleClass} d-flex justify-content-between align-items-center ${border} border-gray w-100`}
    >
      <div
        className={
          mode ? 'w-100 d-flex justify-content-between mb-3 text-dark' : 'mb-3'
        }
      >
        <b> {title}</b>
        <b className={`mx-3`}>
          <BsChevronDown className="BsChevronDown" size={18} />
        </b>
      </div>
      {mode ? null : (
        <div>
          <b className={`${style.titleClassShow} curoser mb-0`}>مشاهده همه</b>
        </div>
      )}
    </div>
  )
}

export default TitleClass
