import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { contextapp } from "../../contexts/ContextProv";
import Mode from "./projectSettings/SettingsAppComponetns";
function SideBarSettings({ children }) {
  const { isDarkMode } = useContext(contextapp);
  const parentEl = document.getElementById("settings");
  parentEl.setAttribute("data-layout-mode", isDarkMode ? "dark" : "light");
  return <>{ReactDOM.createPortal(<Mode />, parentEl)}</>;
}

export default SideBarSettings;
