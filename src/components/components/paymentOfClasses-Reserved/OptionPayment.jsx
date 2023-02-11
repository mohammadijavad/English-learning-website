import React from 'react'
import TypePayment from './components/optionsPayment/TypePayment'

function OptionPayment() {
  return (
    <>
      <div className="border rounded p-2">
        <TypePayment />
      </div>
      <div className="border rounded p-2 mt-2">
        <TypePayment />
      </div>
      <div className="border rounded p-2 mt-2">
        <TypePayment />
      </div>
    </>
  )
}

export default OptionPayment
