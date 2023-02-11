import React from 'react'
import style from '../../style/payment.module.css'
function Rule() {
  return (
    <div className={`${style.teacherInfo} p-3`}>
      <h6>قوانین حضور در کلاس</h6>
      <div className="d-flex align-items-center justify-content-start mt-3">
        <div className={`${style.bollet} mx-2 me-0`}></div>
        <span className="fontsize13">
          پس از پرداخت موفق خواهید توانست زمان کلاس های خود را از روی تقویم
          استاد به صورت یکجا و یا تدریجی انتخاب نمایید
        </span>
      </div>
      <div className="d-flex align-items-center justify-content-start mt-3">
        <div className={`${style.bollet} mx-2 me-0`}></div>
        <span className="fontsize13">
          پس از پرداخت موفق، در صورت عدم رضایت امکان تغییر استاد نیز وجود دارد
        </span>
      </div>
    </div>
  )
}

export default Rule
