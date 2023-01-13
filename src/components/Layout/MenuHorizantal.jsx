import React, { useContext } from 'react'
import { contextapp } from '../../contexts/ContextProv'
import { BsChevronDown } from 'react-icons/bs'
import './menuHorizantal.css'
function MenuHorizantal() {
  const { isHorizontal } = useContext(contextapp)
  return (
    <div className={`  ${isHorizontal ? 'horizantalMode' : ''} mb-0 m-0 `}>
      <ul className="w-100 d-flex align-items-center m-0 p-2 ">
        <li className="d-flex align-items-center curoser position-relative linkItemContainer p-1">
          داشبورد <BsChevronDown className="mt-1 mx-1" size={14} />
          <div className="modalContainer position-absolute ">
            <ul className="d-flex flex-column  containerMenuNested p-0">
              <li className="mt-1 p-1 w-100">آنالیز</li>
              <li className="mt-2 p-1 w-100">آنالیز</li>
              <li className="mt-2 p-1 w-100">آنالیز</li>
              <li className="mt-2 p-1 w-100">آنالیز</li>
              <li className="mt-2 p-1 w-100">آنالیز</li>
            </ul>
          </div>
        </li>
        <li className="mx-2 d-flex align-items-center curoser position-relative linkItemContainer p-1">
          برنامه ها <BsChevronDown className="mt-1 mx-1" size={14} />
          <div className="modalContainer position-absolute ">
            <ul className="d-flex flex-column  containerMenuNested p-0">
              <li className="mt-1 p-1 w-100">آنالیز</li>
              <li className="mt-2 p-1 w-100">آنالیز</li>
              <li className="mt-2 p-1 w-100">آنالیز</li>
              <li className="mt-2 p-1 w-100">آنالیز</li>
              <li className="mt-2 p-1 w-100">آنالیز</li>
            </ul>
          </div>
        </li>
        <li className="mx-2 d-flex align-items-center curoser position-relative linkItemContainer p-1">
          نمایش <BsChevronDown className="mt-1 mx-1" size={14} />
          <div className="modalContainer position-absolute ">
            <ul className="d-flex flex-column  containerMenuNested p-0">
              <li className="mt-1 p-1 w-100">آنالیز</li>
              <li className="mt-2 p-1 w-100">آنالیز</li>
              <li className="mt-2 p-1 w-100">آنالیز</li>
              <li className="mt-2 p-1 w-100">آنالیز</li>
              <li className="mt-2 p-1 w-100">آنالیز</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default MenuHorizantal
