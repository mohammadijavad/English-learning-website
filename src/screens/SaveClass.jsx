import React from 'react'
import HeaderModal from '../components/components/Teacher/TeacherDetail/components/reserved-modal/components/HeaderModal'
import styled from 'styled-components'
import Payment from '../components/components/paymentOfClasses-Reserved/Payment'
import OptionPayment from '../components/components/paymentOfClasses-Reserved/OptionPayment'
function SaveClass() {
  return (
    <Container className="container mt-4 ">
      <HeaderModal step={3} />
      <div className="d-flex justify-content-between align-items-start row mt-4 h-100">
        <div className=" rounded col-12  col-lg-7 text-white h-100 mt-1">
          <OptionPayment />
        </div>
        <ContainerPayment className=" col-12 col-lg-4 text-white  shadow rounded p-3 bg-white ">
          <Payment />
        </ContainerPayment>
      </div>
    </Container>
  )
}
const Container = styled.div`
  height: 100vh;
`
const ContainerPayment = styled.div`
  min-height: 440px;
`
export default SaveClass
