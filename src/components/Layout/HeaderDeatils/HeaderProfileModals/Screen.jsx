import React, { useContext, useState } from 'react'
import { contextapp } from '../../../../contexts/ContextProv'
import { BsFullscreen, BsFullscreenExit } from 'react-icons/bs'

function Screen({ index }) {
  const { showmodal, showModalHandler } = useContext(contextapp)
  const [isFull, setIsFull] = useState(false)
  return (
    <div
      className="iconHeadaer position-relative mt-2   p-2 px-1 rounded-circle"
      onClick={() => setIsFull(!isFull)}
    >
      {!isFull ? (
        <span
          className={`iconContainer  ${
            showmodal === index ? 'activem flagactive' : 'unactivem'
          } `}
          onClick={() => showModalHandler(index)}
        >
          <BsFullscreen size={20} />
        </span>
      ) : (
        <span
          className={`iconContainer  ${
            showmodal === index ? 'activem flagactive' : 'unactivem'
          } `}
          onClick={() => showModalHandler(index)}
        >
          <BsFullscreenExit size={20} />
        </span>
      )}
    </div>
  )
}

export default Screen
