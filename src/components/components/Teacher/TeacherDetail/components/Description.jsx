import React, { useState } from 'react'
import style from '../teacherDetail.module.css'
import { BsChevronDown } from 'react-icons/bs'
function Description({ discriptionTeacher, discriptionTeacherEnglish }) {
  const [show, setShow] = useState(false)
  return (
    <>
      <div
        className={`${style.containerTextIntro} ${
          show ? style.showAllcontent : ''
        }`}
      >
        <div>
          {discriptionTeacher?.map((text, index) => (
            <p key={index} className={`m-0 ${index === 0 ? 'mt-2' : 'mt-1'}`}>
              {text}
            </p>
          ))}
        </div>
        <div>
          {discriptionTeacherEnglish?.map((text, index) => (
            <p
              className={`m-0 ${index === 0 ? 'mt-2' : 'mt-1'} ${
                style.textIntro
              }`}
              key={index}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
      <div
        className={` ${style.arrowShow} ${show ? 'd-none' : ''}`}
        onClick={() => setShow(true)}
      >
        <p className="m-0 mx-1">مشاهده بیشتر</p>
        <BsChevronDown className="mt-1" />
      </div>
    </>
  )
}

export default Description
