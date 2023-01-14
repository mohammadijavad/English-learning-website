import React, { useContext } from 'react';
import Layout from './components/Layout/Layout';
import { Routers } from './constants/Routes';
import { Routes, Route } from 'react-router-dom';
import { contextapp } from './contexts/ContextProv';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomeLayout from './screens/HomeLayout';

function App() {
  const { isDarkMode } = useContext(contextapp);
  return (
    <div
      className="containerDashboard"
      data-layout-mode={isDarkMode ? 'dark' : 'light'}
    >
      <Routes>
        <Route path="/" element={<HomeLayout />} />
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
      </Routes>
    </div>
  );
}

export default App;
