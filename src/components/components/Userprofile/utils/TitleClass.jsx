import React from "react";
import style from "../style/userpage.module.css";
import { BsChevronDown } from "react-icons/bs";
function TitleClass() {
  return (
    <div
      className={`${style.titleClass} d-flex justify-content-between align-items-center border-bottom border-gray w-100`}
    >
      <div className="mb-3">
        <b>کلاس های پیش رو</b>
        <b className={`mx-3`}>
          <BsChevronDown className="BsChevronDown" size={18} />
        </b>
      </div>
      <div>
        <b className={`${style.titleClassShow} curoser mb-0`}>مشاهده همه</b>
      </div>
    </div>
  );
}

export default TitleClass;
