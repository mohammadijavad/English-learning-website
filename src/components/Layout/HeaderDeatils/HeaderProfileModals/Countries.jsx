import React, { useState, useContext } from 'react'
import { contextapp } from '../../../../contexts/ContextProv'
import { flags, defaultFlaf } from './data'
function Countries({ index }) {
  const { showmodal, showModalHandler } = useContext(contextapp)
  const [flagc, setFlag] = useState(defaultFlaf)
  const setFlagHanler = (flagchoose) => {
    setFlag(flagchoose)
    showModalHandler(false)
  }
  return (
    <>
      <div
        className={`iconHeadaer position-relative mt-1   p-2 px-1 rounded-circle  ${
          showmodal === index ? 'activem ' : 'unactivem'
        }`}
      >
        <div
          className={`iconContainer   `}
          onClick={() => showModalHandler(index === showmodal ? false : index)}
        >
          <img
            width="22px"
            className="rounded-1 curoser"
            src={flagc.src}
            alt="USA"
          />
        </div>
      </div>

      <div
        className={`  containerFlagSelect containerModal position-absolute  shadow-sm `}
      >
        {flags.map((flag) => (
          <div
            key={flag.id}
            className={`curoser d-flex flex-row-reverse align-items-center   p-1 flagName  ${
              flag.name === flagc.name ? 'flagactive' : ''
            }`}
            onClick={() => {
              setFlagHanler(flag)
            }}
          >
            <div className="mx-2 ">
              <img
                width="18px"
                className="rounded-1"
                src={flag.src}
                alt={flag.src}
              />
            </div>
            <div className="mx-2">
              <span className="text-opacity-75 fontSize">{flag.name}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Countries
