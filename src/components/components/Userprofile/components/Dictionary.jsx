import React from 'react'
import { Link } from 'react-router-dom'
import style from '../style/userpage.module.css'
import { VscBook } from 'react-icons/vsc'
function Dictionary() {
  return (
    <div className={` mt-3`}>
      <Link to="/profile/linter">
        <div className="d-flex align-items-center justify-content-start ">
          <div className={`p-2 rounded ${style.iconDictionary}`}>
            <VscBook size={24} />
          </div>
          <div className="curoser mx-1">
            <div className="mx-2">
              <span className={style.size1}> دیکشنری</span>
            </div>
            <div className="mx-2">
              <b className={`mx-1 ${style.size3}`}>oxford</b>
              {/* <span className={style.size1}>کلمه</span> */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Dictionary
