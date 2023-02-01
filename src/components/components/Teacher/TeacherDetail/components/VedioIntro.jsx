import React from 'react'
import style from '../teacherDetail.module.css'
import Vedio from '../../TeacherCard/components/Vedio'
function VedioIntro({ findteacher }) {
  return (
    <section
      className={`${style.containerVedioFixed}  d-none d-md-block col-5 col-lg-4  top-0 mt-3 `}
    >
      <div className={`${style.fixed}  p-2 `}>
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
  )
}

export default VedioIntro
