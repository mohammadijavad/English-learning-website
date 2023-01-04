import React, { useState } from "react";
export const contextapp = React.createContext();
function ContextProv(props) {
  const [showSetting, setShowSettings] = useState(false);
  const [closedSiderbar, setisClosedSiderbar] = useState(false);
  const [isVertical, setisVertical] = useState(true);
  const [isTwocloumn, setIsTwoColumn] = useState(false);
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showmodal, setShowmodal] = useState(false);
  const [headerMode, setHeaderMode] = useState(false);
  const [fixHeader, setIsFixed] = useState(false);
  const [sidebarMode, setSidebarMode] = useState(true);
  const [sidebarColor, setSidebarColor] = useState("darkSidebar");
  const [coverSidebar, setCoverSidebar] = useState("mode1");
  const [sidebarSplit, setSidebarSplit] = useState(false);
  const [gradientBgCircle, setGradientBgCircle] = useState("");
  // handler for show hider sidebar settings
  const showSettingHandler = () => {
    setShowSettings(!showSetting);
  };
  const toggleSiderbarHandler = () => {
    setisClosedSiderbar(!closedSiderbar);
  };
  const changeTwoColumnLayoutHandler = () => {
    setIsTwoColumn(true);
    setIsHorizontal(false);
    setisVertical(false);
  };
  const verticalLaoutHandler = () => {
    setIsHorizontal(false);
    setisVertical(true);
    setIsTwoColumn(false);
  };
  const horizontalLayoutHandler = () => {
    setIsHorizontal(true);
    setIsTwoColumn(false);
    setisVertical(false);
  };
  const changeModeHandler = (isactive) => {
    setIsDarkMode(isactive);
  };
  const showModalHandler = (arg) => {
    setShowmodal(arg);
  };
  const setHeaderModeHandler = () => {
    setHeaderMode(!headerMode);
  };
  const setFixHeaderHandler = () => {
    setIsFixed(!fixHeader);
  };
  const setSidebarModeHandler = (mode) => {
    setSidebarMode(mode);
  };
  const setSidebarColorBgHandler = (mode) => {
    setSidebarColor(mode);
  };
  const setCoverSidrbarHandler = (mode) => {
    setCoverSidebar(mode);
  };
  const splitSidebarHandler = (mode) => {
    setSidebarSplit(mode);
  };
  const setGradienCircletHandler = (mode) => {
    setGradientBgCircle(mode);
    console.log(gradientBgCircle);
  };
  return (
    <contextapp.Provider
      value={{
        showSettingHandler,
        toggleSiderbarHandler,
        changeTwoColumnLayoutHandler,
        verticalLaoutHandler,
        horizontalLayoutHandler,
        changeModeHandler,
        showModalHandler,
        setHeaderModeHandler,
        setFixHeaderHandler,
        setSidebarModeHandler,
        setSidebarColorBgHandler,
        setCoverSidrbarHandler,
        splitSidebarHandler,
        setGradienCircletHandler,
        showSetting,
        closedSiderbar,
        isTwocloumn,
        isHorizontal,
        isVertical,
        isDarkMode,
        showmodal,
        headerMode,
        fixHeader,
        sidebarMode,
        sidebarColor,
        coverSidebar,
        sidebarSplit,
        gradientBgCircle,
      }}
    >
      {props.children}
    </contextapp.Provider>
  );
}

export default ContextProv;
