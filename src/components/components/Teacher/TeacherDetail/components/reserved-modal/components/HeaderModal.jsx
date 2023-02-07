import React from 'react'
import style from '../styles/ReservedModal.module.css'
function HeaderModal() {
  return (
    <div className="d-flex w-100 justify-content-between  align-items-center row">
      <div className={`${style.headerTitleBorder} col-5`}>
        <div className={`${style.circle}`}></div>
        <div className={`mt-2 ${style.borderLeft} position-relative fontSize`}>
          نوع کلاس
        </div>
      </div>
      <div className={`${style.headerTitleBorder} col-5`}>
        <div className={`${style.circle}  `}></div>
        <div
          className={`mt-2 ${style.borderLeft} position-relative fontSize ${style.secondBorderLeft}`}
        >
          تعیین زمان بندی
        </div>
      </div>
      <div className=" col-1 text-start">
        <div className={`${style.circle} ms-0`}></div>
        <div className={`mt-2 fontSize`}>پرداخت</div>
      </div>
    </div>
  )
}

export default HeaderModal
