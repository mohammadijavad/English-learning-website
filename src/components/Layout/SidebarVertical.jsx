import React, { useContext } from "react";
import logoCompany from "../../assets/images/fanavaran-header-logo-color.png";
import logoCompanysm from "../../assets/images/logo-sm.png";
import { BsCircle, BsRecordCircle } from "react-icons/bs";
import { contextapp } from "../../contexts/ContextProv";

import Accordions from "./sidebarLists/accoridions/Accordion";
function SidebarVertical() {
  const {
    closedSiderbar,
    toggleSiderbarHandler,
    isVertical,
    coverSidebar,
    sidebarColor,
    sidebarSplit,
    gradientBgCircle,
  } = useContext(contextapp);
  return (
    <div
      className={`sidebarWrapper position-fixed top-0 ${coverSidebar}  ${sidebarColor} ${
        closedSiderbar ? "siderbarclosedMode" : ""
      } ${sidebarSplit + "splitModeSidebar"} `}
    >
      <div
        className={` containerSidebar ${
          closedSiderbar ? "siderbarclosedMode" : ""
        } ${coverSidebar}   ${sidebarColor} ${gradientBgCircle}`}
      >
        <div className=" d-none d-lg-block sidebarlogoContainer d-flex justify-content-center align-items-center">
          {!closedSiderbar ? (
            <img
              width="60%"
              height="40px"
              src={logoCompany}
              alt="fanacaran logos"
              className="mt-2"
            />
          ) : (
            <img
              className="mt-2"
              width="40px"
              height="40px"
              src={logoCompanysm}
              alt="fanacaran logos "
            />
          )}
          <div
            className={` arrowclosed curoser ${
              closedSiderbar ? "closedSiderbar" : ""
            }`}
            onClick={toggleSiderbarHandler}
          >
            {closedSiderbar ? (
              <BsCircle size={20} />
            ) : (
              <BsRecordCircle size={20} />
            )}
          </div>
        </div>
        <div className="d-lg-none mx-1">
          <img
            className="mt-3 p-1"
            width="40px"
            height="40px"
            src={logoCompanysm}
            alt="fanacaran logos "
          />
        </div>
        <div className="containerNavbarSidebar mt-3">
          <div className="siderbarMenuContainer p-2">
            <div className="mt-2 d-none d-lg-none">
              <span className="fontSizesm">منو ها</span>
            </div>
            <div className="siderbarlistAccordion">
              <div className="mt-3">
                <Accordions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarVertical;
