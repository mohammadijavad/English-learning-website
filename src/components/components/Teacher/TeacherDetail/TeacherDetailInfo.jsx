import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectAllTeacher } from '../../../../app/store/Teacher store/Teacher'
import { useParams } from 'react-router-dom'
import style from './teacherDetail.module.css'
import cover1 from '../../../../assets/images/teachers/cover1.jpg'
import teacher from '../../../../assets/Teacher/image/teacher-image/teacher-1.jpg'
import us from '../../../../assets/images/flags/us.svg'
import { AiFillStar, AiFillEuroCircle } from 'react-icons/ai'
import Vedio from '../TeacherCard/components/Vedio'

function TeacherDetailInfo() {
  const params = useParams()
  const { id } = params
  const teachers = useSelector(selectAllTeacher)
  const findteacher = teachers.find((teacher) => teacher.id === id)
  const {
    photoTeacher,
    nameTeacher,
    discriptionTeacher,
    discriptionTeacherEnglish,
  } = findteacher
  useEffect(() => {
    console.log(findteacher, 111)
  }, [])
  return (
    <div className="container" style={{ height: '200vh' }}>
      <div className={style.bgCoverTeacher}>
        <img src={cover1} alt="" />
      </div>
      <div className="row justify-content-between">
        <div className="col-12 col-md-7 d-flex flex-column">
          <div className="d-flex">
            {/* teacher picture */}
            <div className={style.teacherImgContaienr}>
              <img
                className={`  ${style.teacherImg}`}
                src={photoTeacher}
                alt=""
              />
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
          <div>
            <p className="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus voluptatibus assumenda ut, consequuntur earum itaque
              perspiciatis rem fuga necessitatibus a quaerat voluptatem laborum
              tempora facere culpa nostrum voluptate magnam non.
            </p>
            <p className="text-right">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              ipsa quod aliquam laborum repellat! Iure amet magni eos eaque,
              odit vel ratione. Aliquid animi ducimus facilis, tempore molestiae
              blanditiis culpa.
            </p>
          </div>
        </div>
        <section
          className={`${style.containerVedioFixed} shadow d-none d-md-flex col-5 col-lg-3 position-sticky top-0 mt-3 mx-3`}
        >
          <div className={style.fixed}>
            <Vedio
              id={findteacher?.id}
              introVedio={findteacher?.introVedio}
              classDetailsInfo={true}
            />
            <div>
              <p>قیمت هر جلسه 340000</p>
              <p>جلسه آزمایشی رایگان</p>
            </div>
            <div className="mx-3 ">
              <button className=" mt-3 shadow shadow-info btn btn-info text-white  w-100 ">
                رزرو کلاس با استاد
              </button>
            </div>
            <div className="mt-3 text-center">
              <span>رزرو آنی</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default TeacherDetailInfo
//linear-gradient(0deg,hsla(0,0%,100%,.61961),transparent)
