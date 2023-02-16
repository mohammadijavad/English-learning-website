import React from 'react'
import style from '../style/userpage.module.css'
import TitleClass from './TitleClass'
import { FiMoreVertical } from 'react-icons/fi'
import Accordion from 'react-bootstrap/Accordion'
function CardClass({ titleClass, listClass, keyAccordion, classList }) {
  let content
  if (classList?.length === 0) {
    content = (
      <Accordion.Body key={0}>
        <p className="text-danger">کلاسی پیش رو ندارید</p>
      </Accordion.Body>
    )
  } else {
    content = classList?.map((list, index) => {
      return (
        <Accordion.Body key={index}>
          <div className={`${style.classListContainerRow} mt-2 row`}>
            <div className="col-12 col-lg-6">
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start ">
                <div className={`${style.teacherCardPhoto} mx-2 `}>
                  <img src={list.photoTeacher} alt="teacher name" />
                </div>
                <div className="d-flex flex-column justify-content-around align-items-start">
                  <div className={`${style.containerClassInfo} my-2`}>
                    کلاس خصوصی با استاد
                    <span>
                      {' '}
                      {'  '} {list.nameTeacher}{' '}
                    </span>
                    <span
                      className={`${style.flagClass} ${
                        list.modeClass !== 'testing'
                          ? style.flagPrivateClass
                          : style.flagTestClass
                      } mx-2`}
                    >
                      {list.modeClass !== 'testing' ? (
                        <span>کلاس خصوصی </span>
                      ) : (
                        <span>کلاس آزمایشی</span>
                      )}
                    </span>
                  </div>
                  <div className={`${style.containerClassInfo} my-2`}>
                    <span>
                      تعدا کل جلسات :
                      <b className={style.numberClass}>
                        {' '}
                        {list.selectTimeArray.length}{' '}
                      </b>
                    </span>
                    <span className={`mx-3`}>
                      تعداد جلسات زمانبندی نشده :
                      <b className={style.numberClass}>
                        {list.selectedAnotherTime}{' '}
                      </b>
                    </span>
                    <span className={`mx-3`}>
                      <b className={style.numberClass}>
                        {list.selectTimeArray[0].time}{' '}
                      </b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center justify-content-lg-end mt-3">
              <div className={`mx-2 ${style.btnActionCardClass}`}>
                <button className="border-0 p-2 px-3 rounded-2">
                  چت با استاد
                </button>
              </div>
              <div className={`mx-2 ${style.btnActionCardClass}`}>
                <button className="border-0 p-2 px-3 rounded-2">
                  زمانبندی کلاس
                </button>
              </div>
              <div className={`mx-2 curoser`}>
                <FiMoreVertical size={20} />
              </div>
            </div>
          </div>
        </Accordion.Body>
      )
    })
  }
  return (
    <Accordion defaultActiveKey={[keyAccordion]} alwaysOpen>
      <Accordion.Item eventKey={1}>
        <Accordion.Header>
          <TitleClass title={titleClass} />
        </Accordion.Header>
        {content}
      </Accordion.Item>
    </Accordion>
  )
}

export default CardClass
