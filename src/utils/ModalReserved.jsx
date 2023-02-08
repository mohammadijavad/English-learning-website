import React from 'react'
import style from './style/ModalReserved.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import {
  showReservedModal,
  showModalSetClassTimeHandler,
} from '../app/store/Teacher store/Teacher'

function ModalReserved() {
  const dispatch = useDispatch()
  const setModaLState = () => {
    dispatch(showModalSetClassTimeHandler(true))
    dispatch(showReservedModal(false))
  }
  return (
    <div className={`${style.ModalReserved} }`}>
      <div className={style.content}>
        <div className="d-flex p-2 justify-content-end">
          <AiOutlineClose
            size={18}
            className={style.close}
            onClick={() => dispatch(showReservedModal(false))}
          />
        </div>
        <div className="mt-3">
          برای انتخاب زمان و رزروکلاس دکمه رزرو کلاس را کلیک کنید
        </div>
        <div className={style.containerButton}>
          <button
            className="btn btn-outline border-info text-info"
            onClick={() => setModaLState()}
          >
            رزرو کلاس
          </button>
          <button
            className="btn mx-2"
            onClick={() => dispatch(showReservedModal())}
          >
            انصراف
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalReserved
