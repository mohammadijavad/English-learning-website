import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App";
import { BrowserRouter } from "react-router-dom";
import ContextProv from "./contexts/ContextProv";
import { AuthProvider } from "./contexts/AuthContext";
import { Provider } from "react-redux";
import { store } from "./store/index";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ContextProv>
          <Provider store={store}>
            <App />
          </Provider>
        </ContextProv>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
