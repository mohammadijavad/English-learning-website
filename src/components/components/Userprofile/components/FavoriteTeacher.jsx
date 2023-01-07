import React from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import style from "../style/userpage.module.css";
function FavoriteTeacher() {
  return (
    <div className={` mt-3`}>
      <div className="d-flex align-items-center justify-content-start ">
        <div className={`p-2 rounded ${style.iconFavoriteTeacher}`}>
          <AiOutlineUsergroupAdd size={24} />
        </div>
        <div className="curoser mx-1">
          <div className="mx-2">
            <span className={style.size1}> اساتید مورد علاقه</span>
          </div>
          <div className="mx-2">
            <b className={`mx-1 ${style.size3}`}>2</b>
            <span className={style.size1}>استاد</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoriteTeacher;
