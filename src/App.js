import React, { useContext } from 'react';
import Layout from './components/Layout/Layout';
import { SidebarVertical, SidebarTwoCol } from './screens/index';
import { Routers } from './constants/Routes';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { contextapp } from './contexts/ContextProv';
// Import Swiper styles
// import "swiper/css";
function App() {
  const { isVertical, isTwocloumn, isDarkMode } = useContext(contextapp);

  return (
    <div
      className="containerDashboard"
      data-layout-mode={isDarkMode ? 'dark' : 'light'}
    >
      {isVertical && <SidebarVertical />}
      <div className="d-none d-lg-block">
        {isTwocloumn && <SidebarTwoCol />}
      </div>

      <Routes>
        <Route path="/" element={<Layout />}>
          {Routers.map((route) => (
            <Route
              key={route.id}
              index
              path={route.path}
              element={route.componet}
            />
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
