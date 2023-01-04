import React, { useContext } from 'react'
import { contextapp } from '../../../../contexts/ContextProv'
import { webapp } from './data'
import { BsGrid } from 'react-icons/bs'

function Webapps({ index }) {
  const { showmodal, showModalHandler } = useContext(contextapp)
  return (
    <>
      <div
        className={`iconHeadaer position-relative mt-2   p-2 px-1 rounded-circle ${
          showmodal === index ? 'activem ' : 'unactivem'
        }`}
      >
        <div
          className={`iconContainer   `}
          onClick={() => showModalHandler(index === showmodal ? false : index)}
        >
          <span>
            <BsGrid size={20} />
          </span>
        </div>
      </div>

      <div
        className={` w-100 containerApps containerModal position-absolute  shadow-sm d-flex flex-wrap justify-content-around p-1 `}
      >
        {webapp.map((app) => (
          <div
            onClick={() => {
              showModalHandler(false)
            }}
            key={app.id}
            className={` w-25 curoser d-flex flex-column align-items-center justify-content-between  m-1 flagName p-1 px-2    rounded`}
          >
            <div>
              <img height="24px" src={app.src} alt={app.title} />
            </div>
            <div>
              <p className="mt-1" style={{ fontSize: '14px' }}>
                {app.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Webapps
