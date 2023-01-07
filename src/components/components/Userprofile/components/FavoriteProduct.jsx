import React from "react";
import { BsBagPlus } from "react-icons/bs";
import style from "../style/userpage.module.css";
function FavoriteProduct() {
  return (
    <div className={` mt-3`}>
      <div className="d-flex align-items-center justify-content-start ">
        <div className={`p-2 rounded ${style.iconFavorite}`}>
          <BsBagPlus size={22} />
        </div>
        <div className="curoser">
          <div className="mx-2">
            <span className={style.size1}> محصولات مورد علاقه</span>
          </div>
          <div className="mx-2">
            <b className={`mx-1 ${style.size3}`}>5</b>
            <span className={style.size1}>محصول</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoriteProduct;
