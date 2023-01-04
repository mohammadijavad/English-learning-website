import React, { useState } from 'react'
import './styles/selectFilter.css'
import { BsChevronDown, BsX } from 'react-icons/bs'

function Select(props) {
  const { title, activeKey, setClosed, close } = props
  const [activeSelectEl, setActiveSelectEl] = useState(0)
  const [textActive, setTextActive] = useState(title)
  const [isOpen, setIsopen] = useState(false)
  const setTextSelectHandler = (mode) => {
    setTextActive(mode)
    setIsopen(false)
    setActiveSelectEl(activeKey)
    setClosed(0)
  }
  const openSelecHandler = () => {
    setIsopen(!isOpen)
    const isclosed = activeKey === close ? 0 : activeKey
    setClosed(isclosed)
  }
  const closeSelecHandler = () => {
    setIsopen(false)
    setActiveSelectEl(0)
    setTextActive(title)
    setClosed(0)
  }

  return (
    <>
      <div
        className={`p-0 select-menu mx-2 mt-2 ${
          activeKey === activeSelectEl ? 'activeSelect' : ''
        }`}
      >
        <div className="select-btn">
          {activeKey === activeSelectEl && (
            <div onClick={() => closeSelecHandler()}>
              <BsX className=" mx-1  closeMode" />
            </div>
          )}
          <span
            className={`sBtn-text p-2 ${
              activeSelectEl !== activeKey ? 'px-3' : ''
            }`}
            onClick={() => openSelecHandler()}
          >
            <div className="d-flex align-items-center justify-content-between">
              <span
                className={`${activeSelectEl !== activeKey ? '' : 'd-none'}`}
              >
                <BsChevronDown
                  className={` mx-1 mt-1 ${
                    close === activeKey ? 'angleActive' : ''
                  } `}
                  size={13}
                />
              </span>
              <span className="mx-1">{textActive}</span>
            </div>
          </span>
        </div>

        <ul
          className={`options ${
            activeKey === close ? 'd-block' : 'd-none'
          } p-0`}
        >
          <li
            className="option"
            onClick={() => setTextSelectHandler('Instagram')}
          >
            <i className="bx bxl-instagram-alt"></i>
            <span className="option-text">Instagram</span>
          </li>
          <li
            className="option"
            onClick={() => setTextSelectHandler('Linkedin')}
          >
            <i className="bx bxl-linkedin-square"></i>
            <span className="option-text">Linkedin</span>
          </li>
          <li
            className="option"
            onClick={() => setTextSelectHandler('Facebook')}
          >
            <i className="bx bxl-facebook-circle"></i>
            <span className="option-text">Facebook</span>
          </li>
          <li
            className="option"
            onClick={() => setTextSelectHandler('Twitter')}
          >
            <i className="bx bxl-twitter"></i>
            <span className="option-text">Twitter</span>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Select
