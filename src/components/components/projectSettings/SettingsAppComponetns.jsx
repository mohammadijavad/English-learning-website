import React, { useContext } from "react";
import { contextapp } from "../../../contexts/ContextProv";

import HeaderProjectSetting from "./components/HeaderProjectSetting";
import ChooseLayoutMode from "./components/ChooseLayoutMode";
function Mode() {
  const { showSettingHandler, showSetting } = useContext(contextapp);
  return (
    <>
      <div
        className={` d-none d-lg-block shadowsettingSidebar ${
          showSetting ? "show" : "hide"
        }`}
        onClick={showSettingHandler}
      ></div>
      <div
        className={`d-none d-lg-block settingSidebar ${
          showSetting ? "showSideSettings" : ""
        }`}
      >
        <div className="position-relative h-100 w-100">
          <div className="containerContentSiderbarSettings  ">
            <HeaderProjectSetting showSettingHandler={showSettingHandler} />
            <ChooseLayoutMode />
          </div>
        </div>
      </div>
    </>
  );
}

export default Mode;
