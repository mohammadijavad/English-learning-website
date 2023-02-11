import React from 'react'
import style from '../style/payment.module.css'
function TotalResult() {
  return (
    <div className={`mt-3 ${style.teacherInfo}`}>
      <div className="border-top mb-2">
        <div className="d-flex align-items-center justify-content-between mt-4">
          <h4>مبلغ صورت حساب:</h4>
          <h4>825,000 تومان</h4>
        </div>
      </div>
      <div className="border-top">
        <div className="d-flex align-items-center justify-content-between mt-4">
          <h4>مبلغ صورت حساب:</h4>
          <h4>825,000 تومان</h4>
        </div>
      </div>
      <div className=" w-75 m-auto  d-flex justify-content-center mt-4">
        <button className="btn w-100 p-2 rounded shadow shadow-sm shadow-info bg-info text-white p-3">
          پرداخت هزینه
        </button>
      </div>
    </div>
  )
}

export default TotalResult
