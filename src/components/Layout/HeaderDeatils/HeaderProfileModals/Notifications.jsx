import React, { useContext } from 'react'
import { webapp } from './data'
import { BsBell } from 'react-icons/bs'
import Warning from '../../../../utils/Warning'
import { contextapp } from '../../../../contexts/ContextProv'
function Notifications({ index }) {
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
            <BsBell size={20} />
            <Warning bg="rgba(240,101,72)" number={2} />
          </span>
        </div>
      </div>

      <div
        className={` w-100 containerApps containerModal position-absolute  shadow-sm d-flex flex-wrap justify-content-around p-1 modalNotifiction`}
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

export default Notifications
