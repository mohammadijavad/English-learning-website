import React, { useEffect } from 'react'
import HeaderModal from '../components/components/Teacher/TeacherDetail/components/reserved-modal/components/HeaderModal'
import styled from 'styled-components'
import Payment from '../components/components/paymentOfClasses-Reserved/Payment'
import OptionPayment from '../components/components/paymentOfClasses-Reserved/OptionPayment'
import { modeDatepickerHandler } from '../app/store/Teacher store/Teacher'
import { useDispatch } from 'react-redux'
function SaveClass() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(modeDatepickerHandler(false))
  }, [])

  return (
    <Container className="container mt-4 ">
      <HeaderModal step={3} />
      <div className="d-flex justify-content-between align-items-start row mt-4 h-100">
        <div className=" rounded col-12  col-lg-7 text-white h-100 mt-1">
          <OptionPayment />
        </div>
        <div className=" col-12 col-lg-4 text-white  shadow rounded p-3">
          <Payment />
        </div>
      </div>
    </Container>
  )
}
const Container = styled.div`
  height: 100vh;
`
export default SaveClass
