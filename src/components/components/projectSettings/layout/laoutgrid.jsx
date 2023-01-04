import React, { useContext } from "react";
import { useState } from "react";
import { contextapp } from "../../../../contexts/ContextProv";
import TowCol from "../components/TwoClumns";
import Horizantal from "../components/Horizontal";
import Vertical from "../components/Vertical";
import styles from "../utils/laoutgrid.module.css";

function Layout() {
  const {
    changeTwoColumnLayoutHandler,
    verticalLaoutHandler,
    horizontalLayoutHandler,
  } = useContext(contextapp);
  const [active, setActive] = useState(1);
  const activeHandler = (id) => {
    setActive(id);
  };
  return (
    <div
      className={` ${styles.containerLayoutGrid} row px-3 justify-content-between`}
    >
      <Vertical verticalLaoutHandler={verticalLaoutHandler} activeHandler={activeHandler} active={active} />
      <TowCol  changeTwoColumnLayoutHandler={changeTwoColumnLayoutHandler } activeHandler={activeHandler} active={active} />
      <Horizantal activeHandler={activeHandler} horizontalLayoutHandler={horizontalLayoutHandler} active={active} />
    </div>
  );
}

export default Layout;
