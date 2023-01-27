import React from 'react'
import empty from '../assets/Empty-pana-girl.svg'
import styled from 'styled-components'
function Nodata() {
  return (
    <Container>
      <div className="w-100 h-100 d-flex align-items-center justify-content-center flex-column">
        <div className="w-100 d-flex justify-content-center align-items-center">
          <img src={empty} width="40%" className="m-auto" alt="no find data" />
        </div>
      </div>
    </Container>
  )
}
const Container = styled.div`
  @media screen and (max-width: 900px) {
    & img {
      width: 80%;
    }
  }
`
export default Nodata
