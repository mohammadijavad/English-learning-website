import React, { useState, useContext } from 'react'
import style from './SidebarTwoCol.module.css'
import logoCompanysm from '../../assets/images/logo-sm-1.png'
import logoCompanylg from '../../assets/images/logo-dark.png'
import { lists } from './sidebarLists/datalist'
import { BsDash } from 'react-icons/bs'
import { contextapp } from '../../contexts/ContextProv'
import { Link } from 'react-router-dom'
function SidebarTwoCol() {
  const [active, setActive] = useState(0)
  const [activeItem, setActiveItem] = useState(0)
  const { closedSiderbar, sidebarColor, coverSidebar } = useContext(contextapp)
  return (
    <div
      className={`d-none d-lg-flex position-fixed top-0 ${
        style.containerSidebarCol
      } ${closedSiderbar ? 'sidebarTwocolModeDetailsParent' : ''}`}
    >
      <div className={`${style.containerLogos} `}>
        <div className={`${style.contentIconsSidebarT} `}>
          <div className="d-flex justify-content-center align-items-center mb-3 mt-1">
            <img className="mt-2 mr-2" src={logoCompanysm} alt="" />
          </div>

          <div className="mt-1">
            {lists.map((list, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setActive(index)}
                  className={`curoser mt-2   rounded ${style.sideIcont} ${
                    active === list.index ? style.activeIconside : ''
                  }`}
                >
                  {list.icon}
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div
        className={`sideTwoCol  ${style.containerLinks} ${
          closedSiderbar ? 'sidebarTwocolModeDetails' : ''
        }   ${coverSidebar}   ${sidebarColor}`}
      >
        <div
          className={`containerTwoColMode mt-2 h-100  ${coverSidebar}   ${sidebarColor}`}
        >
          <div
            className={`${style.containerLinkItem} d-flex justify-content-center`}
          >
            <img
              src={logoCompanylg}
              className="mt-2 mx-auto"
              alt="fanavaranPNG"
            />
          </div>
          <div className="mt-2">
            {lists[active].children?.map((list, index) => {
              return (
                <Link to={list.to} key={index}>
                  <div
                    className={`${
                      style.itemLinkSidebarT
                    } curoser mt-3 d-flex align-items-center  ${
                      activeItem === index ? style.activeLink : ''
                    }`}
                    onClick={() => setActiveItem(index)}
                  >
                    <BsDash className="mt-1" />
                    <span className="fontSizesm">{list.title}</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarTwoCol
