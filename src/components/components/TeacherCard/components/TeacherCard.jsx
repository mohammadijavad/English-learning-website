import React from 'react'
import style from '../style/TeacherCard.module.css'
import teacher from '../../../../assets/images/users/avatar-2.jpg'
import { BsFillStarFill, BsLightningFill } from 'react-icons/bs'
function TeacherCard() {
  return (
    <div>
      <div className={`  ${style.containerCard} mx-1`}>
        <div className={`row ${style.gridContainer}`}>
          <div className="col-12 col-md-8 h-100">
            <div className="d-flex flex-column justify-content-between h-100">
              <div className="d-flex">
                <div className="d-flex flex-column align-items-center justify-content-center  w-25">
                  <div className="w-75 m-auto mx-0 mt-2">
                    <img src={teacher} alt="" className="rounded w-100" />
                  </div>
                  <div className="d-flex justify-content-center flex-column align-items-center mt-1">
                    <div>
                      <span className={`${style.rateStart}`}>
                        <BsFillStarFill /> <span> 5.0 </span>
                      </span>
                      از
                      <span className={`${style.rateStart}`}> 75 </span>
                      نظر
                    </div>
                    <div className={`${style.rateStart} mt-1`}>
                      <BsLightningFill className="curoser" />
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column border w-75">
                  <div className="m-2 mx-3">teacher name</div>
                  <div className={`${style.animation} mt-1 mb-1 mx-3`}></div>
                  <div className="d-flex  align-items-center m-2">
                    <div className="mx-2">title</div>
                    <div className="mx-3">info job</div>
                  </div>
                  <div className="d-flex  align-items-center m-2">
                    <div className="mx-2">title</div>
                    <div className="mx-3">info job</div>
                  </div>
                  <div className="d-flex  align-items-center m-2">
                    <div className="mx-2">title</div>
                    <div className="mx-3">info job</div>
                  </div>
                  <div className="d-flex  align-items-center m-2">
                    <div className="mx-2">title</div>
                    <div className="mx-3">info job</div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column border w-100 ">2</div>
            </div>
          </div>
          <div className="d-none d-md-flex col-md-4 border">vedio</div>
        </div>
      </div>
    </div>
  )
}

export default TeacherCard
