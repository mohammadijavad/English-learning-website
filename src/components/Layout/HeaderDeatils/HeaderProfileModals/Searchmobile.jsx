import React, { useContext } from 'react'
import { contextapp } from '../../../../contexts/ContextProv'
import { BsSearch } from 'react-icons/bs'
function Searchmobile({ index }) {
  const { showmodal, showModalHandler } = useContext(contextapp)
  return (
    <>
      <div
        className={` d-sm-none iconHeadaer position-relative mt-2   p-2 px-1 rounded-circle ${
          showmodal === index ? 'activem ' : 'unactivem'
        }`}
      >
        <div
          className={`iconContainer   `}
          onClick={() => showModalHandler(index === showmodal ? false : index)}
        >
          <span>
            <BsSearch size={20} />
          </span>
        </div>
      </div>

      <div
        className={` d-sm-none w-100 containerApps containerModal position-absolute  shadow-sm  p-1 `}
      >
        <div className="d-flex flex-row-reverse align-items-center border border-1  rounded">
          <input
            className="w-100 px-3 p-2 mx-1 border-0"
            placeholder="جستجو..."
          />
          <span className=" p-2 px-3 text-white rounded searchbtnProfile curoser">
            <BsSearch size={17} />
          </span>
        </div>
      </div>
    </>
  )
}

export default Searchmobile
