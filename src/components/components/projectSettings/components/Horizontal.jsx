import React from 'react'
import styles from "../utils/laoutgrid.module.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
function Horizantal({horizontalLayoutHandler,activeHandler,active}) {
  return (
       
    <div className="col-4  curoser" onClick={horizontalLayoutHandler}>
    <div
      className={`${styles.defaultmode}  ${styles.vertical} ${
        active === 2 ? styles.activeModeBorder : ""
      } `}
      onClick={() => activeHandler(2)}
    >
      {active === 2 && (
        <BsFillCheckCircleFill className={styles.checkedMode} size={15} />
      )}
      <div className={`${styles.side} ${styles.horizantal}`}>
        <div className={styles.dot}></div>
        <div className={styles.dot1}></div>
        <div className={styles.dot2}></div>
        <div className={styles.dot3}></div>
      </div>
    </div>
    <div className="h6  centerText fontSizesm mt-1">افقی </div>
  </div>
  )
}

export default Horizantal