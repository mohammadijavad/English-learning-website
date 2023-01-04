import React from "react";
import { AiOutlineClose } from "react-icons/ai";
function HeaderProjectSetting({showSettingHandler}) {
  return (
    <div className="haederSiderBarSetting d-flex align-items-center justify-content-around">
      <span
        className="text-white curoser opacity-75 "
        onClick={showSettingHandler}
      >
        <AiOutlineClose size={20} />
      </span>
      <h2 className="m-0 h4 text-white">تنظیمات نما</h2>
    </div>
  );
}

export default HeaderProjectSetting;
