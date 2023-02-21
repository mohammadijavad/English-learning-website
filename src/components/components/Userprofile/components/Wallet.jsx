import React from 'react'
import style from '../style/userpage.module.css'
function Wallet() {
  return (
    <div
      className={`mt-3 ${style.walletContainer} d-flex w-100 justify-content-center justify-content-lg-start `}
    >
      <div className={`${style.walletContainerInfo} w-100`}>
        <div className="d-flex w-100 justify-content-between mt-3">
          <span className="mx-3 mt-3">کیف پول</span>
          <span className="mx-3 mt-3 h5">* * * *</span>
        </div>
        <div className="mx-3 position-absolute top-50 mt-3">
          <p>موجودی کیف پول</p>
          <span>
            {' '}
            <b> 600,000 </b>
            تومان
          </span>
        </div>
      </div>
    </div>
  )
}

export default Wallet
