import React from 'react'
import { AiFillStar, AiFillEuroCircle } from 'react-icons/ai'
import style from '../teacherDetail.module.css'
function PersonalInfo({ photoTeacher, nameTeacher, us }) {
  return (
    <div className="d-flex">
      {/* teacher picture */}
      <div className={style.teacherImgContaienr}>
        <img className={`  ${style.teacherImg}`} src={photoTeacher} alt="" />
      </div>
      {/* basic information about teacher like skills all students has */}
      <div className={`m-2`}>
        <div className="d-flex align-items-center my-2 mt-0">
          <p className="m-0 mx-2"> {nameTeacher} </p>
          <img width="22" className="rounded-1" src={us} alt="" />
        </div>
        <div className={`d-flex`}>
          <div className={`mx-1 d-flex`}>
            <AiFillStar size={19} className={``} />
            <AiFillStar size={19} className={`mx-1`} />
            <AiFillStar size={19} className={`mx-1`} />
            <AiFillStar size={19} className={`mx-1`} />
            <AiFillStar size={19} className={`mx-1`} />
          </div>
          <span>
            <span className="mx-1">4.9</span>
            <span>
              ( از
              <span className="">177</span>
              نظر)
            </span>
          </span>
        </div>
        <div className="mt-2">
          <AiFillEuroCircle size={20} />
          <span className="mx-2">زبان انگلیسی استاد</span>
        </div>
        <div className="mt-2">
          <AiFillEuroCircle size={20} />
          <span className="mx-2">زبان انگلیسی استاد</span>
        </div>
        <div className="mt-2">
          <AiFillEuroCircle size={20} />
          <span className="mx-2">زبان انگلیسی استاد</span>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo
