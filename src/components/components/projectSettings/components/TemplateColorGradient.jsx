import React, { useContext } from "react";
import styled from "styled-components";
import styles from "./style/templateColor.module.css";
import { contextapp } from "../../../../contexts/ContextProv";
function TemplateColorGradient() {
  const { setGradienCircletHandler, gradientBgCircle } = useContext(contextapp);
  return (
    <div className="mt-3 container mx-2 d-flex justify-content-center align-items-center w-100">
      <Circle
        className={`${styles.gradient1} ${
          gradientBgCircle === "firstMode" ? styles.activeCircle : ""
        }`}
        onClick={() => setGradienCircletHandler("firstMode")}
      />
      <Circle
        className={`${styles.gradient2} ${
          gradientBgCircle === "secondMode" ? styles.activeCircle : ""
        }`}
        onClick={() => setGradienCircletHandler("secondMode")}
      />
      <Circle
        className={`${styles.gradient3} ${
          gradientBgCircle === "thirdMode" ? styles.activeCircle : ""
        }`}
        onClick={() => setGradienCircletHandler("thirdMode")}
      />
      <Circle
        className={`${styles.gradient4} ${
          gradientBgCircle === "fourthMode" ? styles.activeCircle : ""
        }`}
        onClick={() => setGradienCircletHandler("fourthMode")}
      />
    </div>
  );
}

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
`;
export default TemplateColorGradient;
