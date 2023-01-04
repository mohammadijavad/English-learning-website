import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App";
import { BrowserRouter } from "react-router-dom";
import ContextProv from "./contexts/ContextProv";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProv>
        <App />
      </ContextProv>
    </BrowserRouter>
  </React.StrictMode>
);
