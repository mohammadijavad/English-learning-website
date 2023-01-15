import React, { useState, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import './accordion.css'
import { lists } from '../datalist'
import { BsChevronDown, BsDash } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'
function BasicExample() {
  const [select, setSelected] = useState(null)
  const location = useLocation()
  const setSelectHandler = (id) => {
    setSelected(id)
  }
  useEffect(() => {
    const pathnameUrl = location.pathname
  }, [select])
  return (
    <Accordion className="containerAccordionp mt-3" flush>
      {lists.map((list) => {
        return (
          <Accordion.Item key={list.id} eventKey={list.index} className="my-2">
            <Accordion.Header className="bg-transparent">
              <div className="contentAccordion d-flex align-items-center justify-content-between w-100">
                <div>{list.icon}</div>
                <div className="wrapContent mx-2 w-100 d-flex justify-content-between align-items-center">
                  <span className="fontSizesm mx-2">{list.title}</span>
                  <BsChevronDown size={13} className="arrowAccordion" />
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body className="px-0">
              <div className="bodyAccordion d-flex align-items-center justify-content-start flex-column ">
                {list.children?.map((child) => {
                  return (
                    <Link className="w-100" to={child.to}>
                      <div
                        key={child.id}
                        className={`contentBodyAccordion p-1 rounded-1 d-flex justify-content-start w-100 mt-1 curoser ${
                          location.pathname === child.to
                            ? 'activeAccordion'
                            : ''
                        }`}
                        onClick={() => setSelectHandler(child.id)}
                      >
                        <BsDash className="mt-1" />
                        <div className="fontSizesm">{child.title}</div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        )
      })}
    </Accordion>
  )
}

export default BasicExample
