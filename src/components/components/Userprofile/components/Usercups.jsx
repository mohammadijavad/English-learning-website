import React from 'react'
import style from '../style/userpage.module.css'
import testCup from '../../../../cuptest.png'
function Usercups() {
  return (
    <div
      className={`d-flex align-items-center justify-content-evenly flex-column`}
    >
      <div className="d-flex align-items-center justify-content-around w-100">
        <div className={`${style.cupContaienr} curoser`}>
          <img src={testCup} alt="sing ing cup" />
        </div>
        <div className={`${style.cupContaienr} curoser`}>
          <img src={testCup} alt="sing ing cup" />
        </div>
        <div className={`${style.cupContaienr} curoser`}>
          <img src={testCup} alt="sing ing cup" />
        </div>
        <div className={`${style.cupContaienr} curoser`}>
          <img src={testCup} alt="sing ing cup" />
        </div>
      </div>
      <div className="mt-4">
        <p>دستاورد های دانش آموز</p>
      </div>
    </div>
  )
}

export default Usercups
