import React from 'react'
import style from './styles/ReservedModal.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { showModalSetClassTimeHandler } from '../../../../../../app/store/Teacher store/Teacher'
import HeaderModal from './components/HeaderModal'
function ReservedModal({ findteacher }) {
  const dispatch = useDispatch()
  return (
    <div className={`${style.containerModal}`}>
      <div className={`${style.content} container`}>
        <div className="mt-4 mx-4">
          <span
            className="p-1 curoser"
            onClick={() => dispatch(showModalSetClassTimeHandler(false))}
          >
            <AiOutlineClose size={18} />
          </span>
        </div>
        <div className="mt-3 px-4">
          <HeaderModal />
        </div>
      </div>
    </div>
  )
}

export default ReservedModal
