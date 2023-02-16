import React from 'react'
import ContainerServices from '../Teacher/TeacherDetail/components/services/ContainerServices'
import DiscountCode from './components/optionsPayment/DiscountCode'
import Rule from './components/optionsPayment/Rule'
import TypePayment from './components/optionsPayment/TypePayment'
import style from './style/payment.module.css'
function OptionPayment() {
  return (
    <>
      <div className="border rounded p-2 bg-white">
        <TypePayment />
      </div>
      <div className="border rounded p-2 mt-2 bg-white">
        <DiscountCode />
      </div>
      <div className="border rounded p-2 mt-2 bg-white">
        <Rule />
      </div>
      <div className={`p-2 mt-2 ${style.teacherInfo}`}>
        <ContainerServices />
      </div>
    </>
  )
}

export default OptionPayment
