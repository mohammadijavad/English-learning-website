import React from 'react'
import styled from 'styled-components'
import Loading from '../assets/images/771.gif'
function LoadingCom() {
  return (
    <ContainerData>
      <img src={Loading} alt="" />
    </ContainerData>
  )
}

const ContainerData = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`
export default LoadingCom
