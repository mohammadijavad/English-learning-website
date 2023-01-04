import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBarSettings from "../components/SideBarSettings";
import Setting from "../../utils/Setting";
import Up from "../../utils/Up";
import { contextapp } from "../../contexts/ContextProv";
import MenuHorizantal from "./MenuHorizantal";
import Categories from "./BreadCrumb/BreadCrumb";
function Layout() {
  const { closedSiderbar, isHorizontal, sidebarSplit, isTwocloumn } =
    useContext(contextapp);
  return (
    <div
      className={`containerContent ${closedSiderbar ? "closedSideBar" : ""} ${
        isHorizontal ? "px-0" : ""
      } ${
        sidebarSplit && isTwocloumn === false
          ? "splitModeSidebar"
          : "defaultModeSidebar"
      }   `}
    >
      <SideBarSettings />
      <Header />
      {isHorizontal ? <MenuHorizantal /> : null}
      <Categories />
      <div className={`${isHorizontal ? "horizantalMode" : ""}`}>
        <Outlet />
      </div>
      <Setting />
      <Up />
    </div>
  );
}

export default Layout;
