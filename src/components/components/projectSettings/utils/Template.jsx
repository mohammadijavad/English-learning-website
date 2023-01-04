import React, { useContext } from "react";
import styles from "./laoutgrid.module.css";
import { BsFillCheckCircleFill } from "react-icons/bs";

function Vertical({
  text,
  headerdark,
  handler,
  isactive,
  sidebarMode,
  mode,
  clsColor,
  clsGrid,
  clsCover,
  classnames,
  isFullHeader,
}) {
  function setColorSidebar() {
    let cls = "";
    if (mode === "lightSidebar") {
      cls = styles.lightModeSide;
    } else if (mode === "darkSidebar") {
      cls = styles.darkModeSide;
    } else {
      cls = styles.gradientModeSide;
    }
    return cls;
  }
  return (
    <div className={` ${clsGrid} curoser `}>
      <div
        className={`${styles.defaultmode}  ${styles.vertical} ${
          isactive ? styles.activeModeBorder : ""
        } wrapperSettings ${clsCover} `}
        onClick={() => handler(mode)}
      >
        {isactive && (
          <BsFillCheckCircleFill
            className={`${styles.checkedMode} checkedSetting`}
            size={15}
          />
        )}

        <div
          className={` ${styles.headerMode}
           ${headerdark ? styles.headerdarkS : "headerSeetingHeader"}
           ${
             isFullHeader
               ? "boxModelSidebar-headerFull"
               : "boxModelSidebar-header"
           }
           
           `}
        ></div>
        {sidebarMode && (
          <div className={`  ${styles.sidebarMode} ${styles.harchi}`}></div>
        )}
        <div
          className={` ${classnames} ${styles.side} ${
            clsColor ? setColorSidebar() : "sidebarModeSettings"
          } `}
        >
          <div className={`${styles.dot} dotSetting`}></div>
          <div className={`${styles.dot1} dot1Setting`}></div>
          <div className={`${styles.dot2} dot2Setting`}></div>
          <div className={`${styles.dot3} dot3Setting`}></div>
        </div>
      </div>
      <div className="h6  centerText fontSizesm mt-1">{text}</div>
    </div>
  );
}

export default Vertical;

Vertical.defaultProps = {
  sidebarMode: false,
  mode: "light",
  clsColor: false,
};
