import React, { useContext } from "react";
import { useState } from "react";
import { contextapp } from "../../../../contexts/ContextProv";
import styles from "../utils/laoutgrid.module.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
function Layout() {
  const { isDarkMode, changeModeHandler } = useContext(contextapp);
  const activeHandler = (mode) => {
    changeModeHandler(mode);
  };
  return (
    <div
      className={` ${styles.containerLayoutGrid} row px-3 justify-content-end`}
    >
      <div className="col-4 curoser">
        <div
            onClick={()=>activeHandler(false)}
          className={`${styles.defaultmode}  ${styles.vertical}  ${
            !isDarkMode ? styles.activeModeBorder : ""
          } ${styles.lightmode}`}
        >
          <div className={styles.headerMode}></div>
          {!isDarkMode && (
            <BsFillCheckCircleFill className={styles.checkedMode} size={15} />
          )}
          <div className={styles.side}>
            <div className={styles.dot}></div>
            <div className={styles.dot1}></div>
            <div className={styles.dot2}></div>
            <div className={styles.dot3}></div>
          </div>
        </div>
        <div className="h6  centerText fontSizesm mt-1">روشن</div>
      </div>
      <div className="col-4 curoser">
        <div
          className={`${styles.defaultmode}  ${styles.vertical} ${
            styles.changeModeDark
          }  ${isDarkMode ? styles.activeModeBorder : ""} `}
          onClick={()=>activeHandler(true)}
        >
          <div className={`${styles.headerMode}`}></div>
          <div className={`${styles.footerMode}`}></div>
          {isDarkMode && (
            <BsFillCheckCircleFill className={styles.checkedMode} size={15} />
          )}
          <div className={styles.side}>
            <div className={styles.dot}></div>
            <div className={styles.dot1}></div>
            <div className={styles.dot2}></div>
            <div className={styles.dot3}></div>
          </div>
        </div>
        <div className="h6  centerText fontSizesm mt-1">تاریک</div>
      </div>
    </div>
  );
}

export default Layout;
