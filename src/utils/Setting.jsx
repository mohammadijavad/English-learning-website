import React, { useContext } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { contextapp } from "../contexts/ContextProv";
function Setting() {
  const { showSettingHandler } = useContext(contextapp);
  return (
    <div className="d-none d-lg-block">
      <div
        onClick={showSettingHandler}
        className=" settingsPageIcon position-fixed   text-white d-flex justify-content-center align-items-center"
      >
        <div className="iconSetting d-flex justify-content-center align-items-center">
          <i>
            <AiOutlineSetting size={20} />
          </i>
        </div>
      </div>
    </div>
  );
}

export default Setting;
