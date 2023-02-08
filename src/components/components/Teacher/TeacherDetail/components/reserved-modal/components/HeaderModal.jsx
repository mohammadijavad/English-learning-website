import React from 'react'
import style from '../styles/ReservedModal.module.css'
function HeaderModal({ step }) {
  return (
    <div className="d-flex w-100 justify-content-between  align-items-center row">
      <div
        className={` col-5 ${
          step === 1 ? style.activeHeader : style.activeHeaderDone
        }`}
      >
        <div className={`${style.circle}`}></div>
        <div className={`mt-2 ${style.borderLeft} position-relative fontSize`}>
          نوع کلاس
        </div>
      </div>
      <div
        className={` col-5 ${
          step === 2
            ? style.activeHeader
            : step > 2
            ? style.activeHeaderDone
            : ''
        }`}
      >
        <div className={`${style.circle} ${style.secondCircle} `}></div>
        <div
          className={`mt-2 ${style.borderLeft} position-relative fontSize ${style.secondBorderLeft}`}
        >
          تعیین زمان بندی
        </div>
      </div>
      <div
        className={` text-start col-1 ${step === 3 ? style.activeHeader : ''}`}
      >
        <div className={`${style.circle} mx-auto`}></div>
        <div className={`mt-2 fontSize`}>پرداخت</div>
      </div>
    </div>
  )
}

export default HeaderModal
