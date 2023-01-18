import React from "react";
import styled from "styled-components";
import Loading from "../assets/images/loading.gif";
function LoadingCom() {
  return (
    <ContainerData>
      <img src={Loading} alt="" />
    </ContainerData>
  );
}

const ContainerData = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default LoadingCom;
