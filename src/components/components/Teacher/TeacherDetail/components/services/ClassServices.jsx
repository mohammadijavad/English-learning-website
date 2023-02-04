import React from 'react'
import firstService from '../../../../../../assets/Teacher/services/service_canceled_class.png'
import styled from 'styled-components'
function ClassServices({ img, text, textHead }) {
  return (
    <div className="d-flex justify-content-center align-align-items-center flex-column mt-4">
      <div className="text-center">
        <img src={img} alt="" />
      </div>
      <Container>
        <h4 className="mt-3"> {textHead}</h4>
        <p className="mt-2">{text}</p>{' '}
      </Container>
    </div>
  )
}
const Container = styled.div`
  & h4 {
    font-size: 20px;
    font-weight: 900;
    text-align: center;
  }
  & p {
    font-size: 14px;
  }
`
export default ClassServices
