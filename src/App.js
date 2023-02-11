import React, { useContext, useEffect } from 'react';
import { useAuth } from './contexts/AuthContext';
import Layout from './components/Layout/Layout';
import { Routers } from './constants/Routes';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { contextapp } from './contexts/ContextProv';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Loginpage from './screens/Auth/Login';
import { Notfind } from './screens';

function App() {
  const { isDarkMode, showAlertHandler } = useContext(contextapp);
  const value = useAuth();
  const navigator = useNavigate();
  useEffect(() => {
    if (!value.user) {
      navigator('/login');
    } else {
      navigator('/profile');
    }
  }, []);

  return (
    <div
      className="containerDashboard"
      data-layout-mode={isDarkMode ? 'dark' : 'light'}
    >
      <div className="text-center">
        <button onClick={() => showAlertHandler('text', 'success')}>
          {' '}
          click
        </button>
      </div>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Loginpage />} />
        <Route path="/profile" element={<Layout />}>
          {Routers.map((route, index) => (
            <Route
              key={index}
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
