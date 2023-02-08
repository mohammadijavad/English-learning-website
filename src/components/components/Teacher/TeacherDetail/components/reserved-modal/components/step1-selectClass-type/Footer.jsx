import React from 'react'
import style from '../../styles/ReservedModal.module.css'
function Footer({ findteacher, classType, step, setStep }) {
  const { photoTeacher, nameTeacher, priceClasses } = findteacher
  let content = ''
  if (classType > 0) {
    const findClassType = priceClasses?.find((cls) => cls.id === classType)
    const { typeClass, price, count } = findClassType
    const priceCls = price * count
    content = (
      <div className="d-flex align-items-center">
        <div className="mx-2">
          <img
            src={photoTeacher}
            className="rounded border border-2 border-info"
            width={70}
            alt=""
          />
        </div>
        <div className="mx-2 d-flex flex-column">
          <div className="fontSize">
            <span> رزرو کلاس با</span>
            <span>{nameTeacher}</span>
          </div>
          <div className="fontSize mt-1">
            <span>{typeClass}</span>
            <span> - </span>
            {priceCls > 0 ? (
              <span>{priceCls} تومان </span>
            ) : (
              <span>رایگان</span>
            )}
          </div>
        </div>
      </div>
    )
  } else {
    content = (
      <div className="d-flex align-items-center">
        <div className="mx-2">
          <img
            src={photoTeacher}
            className="rounded border border-2 border-info"
            width={70}
            alt=""
          />
        </div>
        <div className="mx-2 d-flex flex-column">
          <div className="fontSize">
            <span> رزرو کلاس با</span>
            <span>{nameTeacher}</span>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div
      className={`d-flex justify-content-between align-items-center w-100 position-absolute bottom-0 mb-2`}
    >
      {content}
      <div className="mx-3">
        <button
          className={`${
            classType > 0
              ? 'btn mx-2 shadow shadow-info bg-info text-white'
              : `btn mx-2 shadow shadow-info  text-white ${style.disabledBtn}`
          }`}
          onClick={() => setStep(step + 1)}
        >
          ادامه
        </button>
        {step > 1 ? (
          <button
            className="btn mx-2 shadow shadow-info bg-info text-white"
            onClick={() => setStep(step - 1)}
          >
            بازگشت
          </button>
        ) : null}
      </div>
    </div>
  )
}

export default Footer
