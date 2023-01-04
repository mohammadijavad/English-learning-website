import React, { useState } from 'react'
import './styles/selectFilter.css'
import { BsChevronDown, BsX } from 'react-icons/bs'

function Select(props) {
  const { handlerActive, cls, activeKey, activeSelectEl, title } = props
  const defaultState = title
  const [isActive, setIsactive] = useState(false)
  const [textActive, setTextActive] = useState(title)
  const activeSelectHandler = (mode) => {
    handlerActive(mode)
    setIsactive(!isActive)
  }
  const selectoption = (content) => {
    setTextActive(content)
    setIsactive(false)
  }
  const contentSelect = defaultState === textActive ? true : false
  return (
    <>
      <div
        class={`select-menu ${cls} mt-2 ${
          activeKey === activeSelectEl ? 'activeSelect' : ''
        }`}
      >
        <div
          class="select-btn"
          onClick={() =>
            activeSelectHandler(activeKey === activeSelectEl ? -1 : activeKey)
          }
        >
          {contentSelect ? (
            <BsChevronDown className=" mx-1 mt-1 angleActive" size={13} />
          ) : (
            <BsX
              onClick={() => selectoption(defaultState)}
              className=" mx-1  "
              size={19}
            />
          )}
          <span class="sBtn-text">{textActive}</span>
        </div>

        <ul class={`options `}>
          <li class="option" onClick={() => selectoption('Instagram')}>
            <i class="bx bxl-instagram-alt"></i>
            <span class="option-text">Instagram</span>
          </li>
          <li class="option" onClick={() => selectoption('Linkedin')}>
            <i class="bx bxl-linkedin-square"></i>
            <span class="option-text">Linkedin</span>
          </li>
          <li class="option" onClick={() => selectoption('Facebook')}>
            <i class="bx bxl-facebook-circle"></i>
            <span class="option-text">Facebook</span>
          </li>
          <li class="option" onClick={() => selectoption('Twitter')}>
            <i class="bx bxl-twitter"></i>
            <span class="option-text">Twitter</span>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Select
