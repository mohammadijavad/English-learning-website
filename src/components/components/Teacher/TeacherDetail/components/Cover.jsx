import React from 'react'
import style from '../teacherDetail.module.css'
import cover1 from '../../../../../assets/images/teachers/cover1.jpg'
function Cover() {
  return (
    <div className={style.bgCoverTeacher}>
      <img src={cover1} alt="" />
    </div>
  )
}

export default Cover
