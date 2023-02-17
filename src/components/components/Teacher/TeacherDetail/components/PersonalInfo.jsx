import React from 'react'
import { AiFillStar, AiFillPlayCircle } from 'react-icons/ai'
import { GiGraduateCap } from 'react-icons/gi'
import { FaUser } from 'react-icons/fa'
import style from '../teacherDetail.module.css'
import useFlag from '../../../../../assets/images/flags/us.svg'
function PersonalInfo({
  photoTeacher,
  nameTeacher,
  languageExperts,
  studentsTeacher,
  completedClass,
  Experts,
}) {
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
          <img width="22" className="rounded-1" src={Experts} alt="EN" />
        </div>
        <div className={`d-flex`}>
          <div className={`mx-1 d-flex`}>
            <AiFillStar size={19} className={` ${style.activeStar}`} />
            <AiFillStar size={19} className={`mx-1 ${style.activeStar}`} />
            <AiFillStar size={19} className={`mx-1 ${style.activeStar}`} />
            <AiFillStar size={19} className={`mx-1 ${style.activeStar}`} />
            <AiFillStar size={19} className={`mx-1 ${style.activeStar}`} />
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
          <GiGraduateCap size={23} className={style.iconTeacherInfoClasses} />
          <span className="mx-2"> استاد زبان {languageExperts}</span>
        </div>
        <div className="mt-2">
          <FaUser size={20} className={style.iconTeacherInfoClasses} />
          <span className="mx-2"> {studentsTeacher} زبان آموز</span>
        </div>
        <div className="mt-2">
          <AiFillPlayCircle
            size={20}
            className={style.iconTeacherInfoClasses}
          />
          <span className="mx-2">{completedClass} کلاس برگزار شده</span>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo
