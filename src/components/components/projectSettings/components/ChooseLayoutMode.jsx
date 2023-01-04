import React, { useState, useContext } from "react";
import { contextapp } from "../../../../contexts/ContextProv";
import LayoutContent from "../layout/laoutgrid";
import ModeIsDark from "../layout/ModeDark";
import Template from "../utils/Template";
import ButtonFixedHeader from "./ButtonFixedHeader";
import TemplateColorGradient from "./TemplateColorGradient";
function ChooseLayoutMode() {
  const {
    closedSiderbar,
    headerMode,
    isTwocloumn,
    sidebarColor,
    coverSidebar,
    sidebarSplit,
    isVertical,
    isHorizontal,
    setHeaderModeHandler,
    toggleSiderbarHandler,
    setSidebarModeHandler,
    setSidebarColorBgHandler,
    setCoverSidrbarHandler,
    splitSidebarHandler,
  } = useContext(contextapp);
  return (
    <>
      <div className="title d-flex flex-column align-items-end my-3 mx-2">
        <span className="">انتخاب نما</span>
      </div>
      <LayoutContent />
      <div className="title d-flex flex-column align-items-end my-3 mx-2">
        <h4 className="m-0 h6"> حالت روشنایی </h4>
        <span className="h6  centerText fontSizesm mt-1"> روشن / تاریک</span>
      </div>
      <ModeIsDark />
      {!isHorizontal && (
        <div className="title d-flex flex-column align-items-end my-3 mx-2">
          <h4 className="m-0 h6"> میزان عرض صفحه</h4>
          <span className="h6  centerText fontSizesm mt-1"> عریض / کامل</span>
        </div>
      )}
      {!isHorizontal && (
        <div className={` row px-3 justify-content-end`}>
          <Template
            text="باکس"
            headerdark={false}
            handler={toggleSiderbarHandler}
            isactive={closedSiderbar}
            clsGrid="col-4"
            classnames="boxmodeSettings"
            isFullHeader={true}
          />
          <Template
            text="کامل"
            headerdark={false}
            handler={toggleSiderbarHandler}
            isactive={!closedSiderbar}
            clsGrid="col-4"
            isFullHeader={false}
          />
        </div>
      )}
      <div className="title d-flex flex-column align-items-end my-3 mx-2">
        <h4 className="m-0 h6"> ثابت بودن هدر </h4>
        <span className="h6  centerText fontSizesm mt-1"> عرض طرح </span>
      </div>
      <div className="d-flex justify-content-end align-items-center mx-3">
        <ButtonFixedHeader />
      </div>
      <div className="title d-flex flex-column align-items-end my-3 mx-2">
        <h4 className="m-0 h6">انتخاب حالت</h4>
        <span className="h6  centerText fontSizesm mt-1"> روشن / تاریک</span>
      </div>
      <div className={` row px-3 justify-content-end`}>
        <Template
          text="روشن"
          headerdark={false}
          handler={setHeaderModeHandler}
          isactive={headerMode}
          clsGrid="col-4"
        />
        <Template
          text="تاریک"
          headerdark={true}
          handler={setHeaderModeHandler}
          isactive={!headerMode}
          clsGrid="col-4"
        />
      </div>
      {!isHorizontal && (
        <div className="title d-flex flex-column align-items-end my-3 mx-2">
          <h4 className="m-0 h6"> انتخاب حالت سایدبار</h4>
          <span className="h6  centerText fontSizesm mt-1">
            انتخاب حالت سایدبار
          </span>
        </div>
      )}
      {!isHorizontal && (
        <div className={` row px-3 justify-content-end`}>
          <Template
            text="پیش فرض"
            headerdark={false}
            handler={splitSidebarHandler}
            isactive={sidebarSplit ? false : true}
            sidebarMode={false}
            mode={false}
            clsGrid="col-4"
          />
          <Template
            text="جدا"
            headerdark={false}
            handler={splitSidebarHandler}
            isactive={sidebarSplit ? true : false}
            sidebarMode={true}
            mode={true}
            clsGrid="col-4"
            classnames="splitSidebar"
          />
        </div>
      )}
      {!isHorizontal && (
        <div className="title d-flex flex-column align-items-end my-3 mx-2">
          <h4 className="m-0 h6"> انتخاب رنگ سایدبار</h4>
          <span className="h6  centerText fontSizesm mt-1">
            انتخاب رنگ سایدبار
          </span>
        </div>
      )}
      {!isHorizontal && (
        <div className={` row px-3 justify-content-end`}>
          <Template
            text="روشن"
            headerdark={false}
            handler={setSidebarColorBgHandler}
            isactive={sidebarColor === "lightSidebar" ? true : false}
            mode="lightSidebar"
            clsColor={true}
            clsGrid="col-4"
          />
          <Template
            text="تاریک"
            headerdark={false}
            handler={setSidebarColorBgHandler}
            isactive={sidebarColor === "darkSidebar" ? true : false}
            mode="darkSidebar"
            clsColor={true}
            clsGrid="col-4"
          />
          <Template
            text="گرادینت"
            headerdark={false}
            handler={setSidebarColorBgHandler}
            isactive={sidebarColor === "gradientSidebar" ? true : false}
            mode="gradientSidebar"
            clsColor={true}
            clsGrid="col-4"
          />
        </div>
      )}
      {sidebarColor === "gradientSidebar" && <TemplateColorGradient />}
      {!isHorizontal && (
        <div className="title d-flex flex-column align-items-end my-3 mx-2">
          <h4 className="m-0 h6"> رنگ پس زمینه </h4>
          <span className="h6  centerText fontSizesm mt-2"> روشن / تاریک</span>
        </div>
      )}
      {!isHorizontal && (
        <div className={` row px-3 justify-content-end mt-4`}>
          <Template
            text=""
            headerdark={false}
            handler={setCoverSidrbarHandler}
            isactive={coverSidebar === "mode1" ? true : false}
            mode="mode1"
            clsColor={false}
            clsGrid="col-3"
            clsCover="mode1Cover"
          />
          <Template
            text=""
            headerdark={false}
            handler={setCoverSidrbarHandler}
            isactive={coverSidebar === "mode2" ? true : false}
            mode="mode2"
            clsColor={false}
            clsGrid="col-3"
            clsCover="mode2Cover"
          />
          <Template
            text=""
            headerdark={false}
            handler={setCoverSidrbarHandler}
            isactive={coverSidebar === "mode3" ? true : false}
            mode="mode3"
            clsColor={false}
            clsGrid="col-3"
            clsCover="mode3Cover"
          />
          <Template
            text=""
            headerdark={false}
            handler={setCoverSidrbarHandler}
            isactive={coverSidebar === "mode4" ? true : false}
            mode="mode4"
            clsColor={false}
            clsGrid="col-3"
            clsCover="mode4Cover"
          />
        </div>
      )}
      (
      <div className="d-flex justify-content-end">
        <button className="btn mx-3 m-1 border border-info  btnfSetting">
          ذخیره
        </button>
        <button className="btn mx-3 m-1 border border-info btnfSetting">
          ریست
        </button>
      </div>
      )
    </>
  );
}

export default ChooseLayoutMode;
