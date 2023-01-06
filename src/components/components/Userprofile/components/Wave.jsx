import React, { useContext } from 'react'
import { contextapp } from '../../../../contexts/ContextProv'
import style from '../style/Header.module.css'
function Wave() {
  const { isDarkMode } = useContext(contextapp)
  return (
    <div
      className={`${style.waveCss} ${isDarkMode ? `${style.darkmode}` : ''}`}
    ></div>
  )
}

export default Wave
