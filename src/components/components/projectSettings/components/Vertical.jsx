import React from "react";
import styles from "../utils/laoutgrid.module.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
function Vertical({ verticalLaoutHandler, activeHandler, active }) {
  return (
    <div className="col-4 curoser" onClick={verticalLaoutHandler}>
      <div
        className={`${styles.defaultmode}  ${styles.vertical}  ${
          active === 1 ? styles.activeModeBorder : ""
        } `}
        onClick={() => activeHandler(1)}
      >
        {active === 1 && (
          <BsFillCheckCircleFill className={styles.checkedMode} size={15} />
        )}
        <div className={styles.side}>
          <div className={styles.dot}></div>
          <div className={styles.dot1}></div>
          <div className={styles.dot2}></div>
          <div className={styles.dot3}></div>
        </div>
      </div>
      <div className="h6  centerText fontSizesm mt-1">عمودی</div>
    </div>
  );
}

export default Vertical;
