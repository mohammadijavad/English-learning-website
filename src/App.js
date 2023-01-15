import React, { useContext, useEffect } from 'react';
import { useAuth } from './contexts/AuthContext';
import Layout from './components/Layout/Layout';
import { Routers } from './constants/Routes';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { contextapp } from './contexts/ContextProv';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Loginpage from './screens/Auth/Login';
function App() {
  const { isDarkMode } = useContext(contextapp);
  const value = useAuth();
  const navigator = useNavigate();
  useEffect(() => {
    if (!value.user) {
      navigator('/login');
    }
  }, []);
  return (
    <div
      className="containerDashboard"
      data-layout-mode={isDarkMode ? 'dark' : 'light'}
    >
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
      </Routes>
    </div>
  );
}

export default App;
