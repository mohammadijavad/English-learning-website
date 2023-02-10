import React from 'react'
import style from '../../styles/ReservedModal.module.css'
function ClassType({
  id,
  typeClass,
  time,
  price,
  setClassType,
  classType,
  count,
  setCountClass,
  test,
  setMode,
}) {
  const setClassInfoHandler = () => {
    setClassType(id)
    setCountClass(count)
    setMode(test)
  }
  return (
    <div
      className={`w-100 border rounded p-2 mt-3 curoser ${
        style.containerStep1
      } ${id === classType ? style.active : ''}`}
      onClick={() => setClassInfoHandler()}
    >
      <div className="w-100 h-100 d-flex justify-content-between align-items-center">
        <div className="d-flex flex-column">
          <b>{typeClass}</b>
          <span className="mt-2">{time} دقیقه</span>
        </div>
        <div>
          <span>
            {price === 0 ? (
              <span className="mx-5 text-danger">رایگان</span>
            ) : (
              <div>
                <span> {price} تومان </span> / <span> یک جلسه </span>
              </div>
            )}{' '}
          </span>{' '}
        </div>
      </div>
    </div>
  )
}

export default ClassType
