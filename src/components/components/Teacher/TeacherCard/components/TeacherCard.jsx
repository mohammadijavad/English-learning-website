import React, { useRef, useEffect, useState } from 'react'
import style from '../style/TeacherCard.module.css'
import { BsFillStarFill, BsLightningFill } from 'react-icons/bs'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Favorite from '../../../../../utils/Favorite'
import EnglishFleg from '../../../../../assets/images/flags/us.svg'
import Vedio from './Vedio'

function TeacherCard({
  id,
  nameTeacher,
  photoTeacher,
  introVedio,
  level,
  skils,
  priceTest,
  priceClass,
  rate,
  allCommentCount,
  isFavorite,
  languageExperts,
  mainSkils,
}) {
  return (
    <>
      <div>
        <div className={`  ${style.containerCard} mx-1 curoser mt-4`}>
          <div className={`row  ${style.gridContainer}`}>
            <div className="col-12 col-md-7 h-100">
              <div className="d-flex flex-column justify-content-between h-100 position-relative">
                <Favorite id={id} isFavorite={isFavorite} />
                <Link to={`/profile/teachers/${id}`}>
                  <div className="d-flex">
                    <div className="d-flex flex-column align-items-center justify-content-center  w-25">
                      <div className="w-75 m-auto mx-0 mt-2">
                        <img
                          src={photoTeacher}
                          alt={`${photoTeacher} `}
                          className={` ${style.teacherAvatar} w-100`}
                        />
                      </div>
                      <div className="d-flex justify-content-center flex-column align-items-center mt-1">
                        <div>
                          <span className={`${style.rateStart}`}>
                            <BsFillStarFill /> <span> {rate} </span>
                          </span>
                          از
                          <span className={`${style.rateStart}`}>
                            {' '}
                            {allCommentCount}
                          </span>
                          نظر
                        </div>
                        <div className={`${style.rateStart} mt-1`}>
                          <OverlayTrigger
                            delay={{ hide: 200, show: 100 }}
                            animation={true}
                            overlay={(props) => (
                              <Tooltip {...props}>رزرو آنی</Tooltip>
                            )}
                            placement="top"
                          >
                            <Button
                              variant=""
                              className={`m-0 p-0 bg-none ${style.rateStart}`}
                            >
                              <BsLightningFill
                                className={`${style.rateStart}`}
                              />
                            </Button>
                          </OverlayTrigger>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column  w-75">
                      <div className="m-2 mx-3">{nameTeacher}</div>
                      <div
                        className={`${style.animation} mt-1 mb-1 mx-3`}
                      ></div>
                      <div
                        className={`d-flex  align-items-center m-2 ${style.titleSkills}`}
                      >
                        <div className="mx-2">تدریس</div>
                        <div className="mx-3">
                          {languageExperts}
                          <img
                            src={EnglishFleg}
                            width="16px"
                            height="16px"
                            alt="us"
                            className="rounded mx-2"
                          />
                        </div>
                      </div>
                      <div
                        className={`d-flex  align-items-center m-2 ${style.titleSkills}`}
                      >
                        <div className="mx-2">تخصص</div>
                        <div className="mx-3">
                          <b className={`${style.bold}`}>{skils}</b>{' '}
                        </div>
                      </div>
                      <div
                        className={`d-flex  align-items-center m-2 ${style.titleSkills}`}
                      >
                        <div className="mx-2">سطح</div>
                        <div className="mx-3">{level}</div>
                      </div>
                      <div
                        className={`d-flex  align-items-center m-2 ${style.titleSkills}`}
                      >
                        <div className="mx-2">مهارتها</div>
                        <div className="mx-3">{mainSkils}</div>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="d-flex justify-content-center align-items-center  w-100 h-25">
                  <div className={`mx-2 ${style.priceClass}`}>
                    <span>جلسه آزمایشی</span>
                    <span>
                      <b className={`${style.bold}`}> {priceTest} </b>
                      {'    تومان'}
                    </span>
                    {'     '}
                  </div>
                  <div className={`mx-2 ${style.priceClass}`}>
                    <span>جلسه یک ساعتی</span>
                    <span>
                      <b className={`${style.bold}`}> {priceClass} </b>
                      تومان
                    </span>
                  </div>
                  <div className={`mx-2 d-none d-md-flex ${style.priceClass}`}>
                    <button className={`btn ${style.btnReservation} px-4 py-2`}>
                      <span style={{ zIndex: 10 }}> رزرو کلاس</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Vedio id={id} introVedio={introVedio} />
            <div className="d-md-none w-100 m-3  d-flex flex-column flex-sm-row align-items-center justify-content-around">
              <div className="d-flex w-100 justify-content-center mx-3">
                <div className="w-100 mx-2">
                  <button className="btn bg-info text-white mx-2 w-100">
                    پخش ویدیو
                  </button>
                </div>
                <div className="w-100 mx-2">
                  <button className="btn bg-info text-white mx-2 w-100">
                    مشاهده پروفایل
                  </button>
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center  my-2">
                <button
                  className={`${style.btnReservation} w-100  btn btn-outline-info text-info mx-3`}
                >
                  رزرو آزمایشی کلاس
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeacherCard
