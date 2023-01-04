import React, { useContext } from "react";
import { contextapp } from "../contexts/ContextProv";

function Home() {
  const { isDarkMode } = useContext(contextapp);
  return (
    <div
      className={` containerContentMain   w-100 h-100   ${
        isDarkMode ? "contentDarkMode" : "lightMode"
      }`}
    >
      <h1>Lorem ipsum dolor sit</h1>
    </div>
  );
}

export default Home;
