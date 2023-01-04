import React from "react";
import styles from "../utils/laoutgrid.module.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
function TowCol({ changeTwoColumnLayoutHandler, activeHandler, active }) {
  return (
    <div className="col-4  curoser" onClick={changeTwoColumnLayoutHandler}>
      <div
        className={`${styles.defaultmode}  ${styles.vertical}  ${
          active === 3 ? styles.activeModeBorder : ""
        }`}
        onClick={() => activeHandler(3)}
      >
        {active === 3 && (
          <BsFillCheckCircleFill className={styles.checkedMode} size={15} />
        )}
        <div className={`${styles.side} ${styles.twoColumns}`}>
          <div className={styles.dot}></div>
          <div className={styles.dot1}></div>
          <div className={styles.dot2}></div>
          <div className={styles.dot3}></div>
        </div>
        <div className={styles.col2}>
          <div className={styles.dot4}></div>
          <div className={styles.dot5}></div>
          <div className={styles.dot6}></div>
          <div className={styles.dot7}></div>
        </div>
      </div>
      <div className="h6  centerText fontSizesm mt-1"> دو ستون</div>
    </div>
  );
}

export default TowCol;
