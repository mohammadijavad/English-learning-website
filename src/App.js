import React, { useContext, useEffect } from "react";
import { useAuth } from "./contexts/AuthContext";
import Layout from "./components/Layout/Layout";
import { Routers } from "./constants/Routes";
import { Routes, Route, useNavigate } from "react-router-dom";
import { contextapp } from "./contexts/ContextProv";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Loginpage from "./screens/Auth/Login";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  fetchProductsError,
  fetchProductsRequest,
  fetchProductsSuccess,
} from "./store/apiActions";
import Loading from "./utils/Loading";
import { Notfind } from "./screens";
function App() {
  const dispatch = useDispatch();
  const stateData = useSelector((state) => state);

  const { isDarkMode } = useContext(contextapp);
  const value = useAuth();
  const navigator = useNavigate();
  const fetchProducts = async () => {
    dispatch(fetchProductsRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_page=1&limit=10")
      .then((response) => {
        const datas = response.data;
        dispatch(fetchProductsSuccess(datas));
      })
      .catch((error) => {
        dispatch(fetchProductsError("error "));
      });
  };
  useEffect(() => {
    if (!value.user) {
      navigator("/login");
    } else {
      navigator("/profile");
    }
    fetchProducts();
    console.log(stateData?.loading);
  }, []);
  return (
    <div
      className="containerDashboard"
      data-layout-mode={isDarkMode ? "dark" : "light"}
    >
      {stateData?.loading && <Loading />}
      <Routes>
        <Route path="/login" element={<Loginpage />} />
        <Route path="/profile" element={<Layout />}>
          {Routers.map((route) => (
            <Route
              key={route.id}
              index
              path={route.path}
              element={route.componet}
            />
          ))}
        </Route>
        <Route path="/*" element={<Notfind />} />
      </Routes>
    </div>
  );
}

export default App;
