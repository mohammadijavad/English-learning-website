import React from 'react'
import style from '../style/userpage.module.css'
import TitleClass from './TitleClass'
import { FiMoreVertical } from 'react-icons/fi'
import Accordion from 'react-bootstrap/Accordion'
function CardClass({ titleClass, listClass, key }) {
  return (
    <div>
      <Accordion defaultActiveKey={[key]} alwaysOpen>
        <Accordion.Item eventKey={1}>
          <Accordion.Header>
            <TitleClass title={titleClass} />
          </Accordion.Header>
          {listClass?.map((list) => {
            const { photo, name, reserved, unreserved } = list
            return (
              <Accordion.Body key={list.id}>
                <div className={`${style.classListContainerRow} mt-2 row`}>
                  <div className="col-12 col-lg-6">
                    <div className="d-flex align-items-center justify-content-center justify-content-lg-start ">
                      <div className={`${style.teacherCardPhoto} mx-2 `}>
                        <img src={photo} alt="teacher name" />
                      </div>
                      <div className="d-flex flex-column justify-content-around align-items-center">
                        <div className={`${style.containerClassInfo} my-2`}>
                          کلاس خصوصی با استاد
                          <span>
                            {' '}
                            {'  '} {name}{' '}
                          </span>
                          <span className={`${style.flagClass} mx-2`}>
                            کلاس خصوصی
                          </span>
                        </div>
                        <div className={`${style.containerClassInfo} my-2`}>
                          <span>
                            تعدا کل جلسات :
                            <b className={style.numberClass}> {reserved} </b>
                          </span>
                          <span className={`mx-3`}>
                            تعداد جلسات زمانبندی نشده :
                            <b className={style.numberClass}>{unreserved} </b>
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
          })}
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default CardClass
