import React, { useContext } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import { contextapp } from '../../../../contexts/ContextProv'
function Darkmode({ index }) {
  const {
    isDarkMode,
    changeModeHandler,
    showmodal,
    showModalHandler,
  } = useContext(contextapp)
  return (
    <div
      className="iconHeadaer position-relative mt-2   p-2 px-1 rounded-circle"
      onClick={() => showModalHandler(index === showmodal ? false : index)}
    >
      <span
        className={`iconContainer  ${
          showmodal === index ? 'activem flagactive' : 'unactivem'
        } `}
        onClick={changeModeHandler}
      >
        {isDarkMode ? <BsMoon size={20} /> : <BsSun size={20} />}
      </span>
    </div>
  )
}

export default Darkmode
