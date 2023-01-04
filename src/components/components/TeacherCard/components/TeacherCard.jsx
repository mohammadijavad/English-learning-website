import React from 'react'
import style from '../style/TeacherCard.module.css'
import teacher from '../../../../assets/images/users/avatar-2.jpg'
import { BsFillStarFill, BsLightningFill } from 'react-icons/bs'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Button from 'react-bootstrap/Button'
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
                      <OverlayTrigger
                        delay={{ hide: 200, show: 100 }}
                        animation={false}
                        overlay={(props) => (
                          <Tooltip {...props}>رزرو آنی</Tooltip>
                        )}
                        placement="top"
                      >
                        <Button
                          variant=""
                          className={`m-0 p-0 bg-none ${style.rateStart}`}
                        >
                          <BsLightningFill className={`${style.rateStart}`} />
                        </Button>
                      </OverlayTrigger>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column border w-75">
                  <div className="m-2 mx-3"> فرنوش امینی</div>
                  <div className={`${style.animation} mt-1 mb-1 mx-3`}></div>
                  <div className="d-flex  align-items-center m-2">
                    <div className="mx-2">تدریس</div>
                    <div className="mx-3">انگلیسی</div>
                  </div>
                  <div className="d-flex  align-items-center m-2">
                    <div className="mx-2">تخصص</div>
                    <div className="mx-3">
                      <b>زبان عمومی و مکالمه</b>{' '}
                    </div>
                  </div>
                  <div className="d-flex  align-items-center m-2">
                    <div className="mx-2">سطح</div>
                    <div className="mx-3">متوسط, پیشرفته</div>
                  </div>
                  <div className="d-flex  align-items-center m-2">
                    <div className="mx-2">مهارتها</div>
                    <div className="mx-3">آیلتس, لهجه نیتیولایک </div>
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
