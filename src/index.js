import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App';
import { BrowserRouter } from 'react-router-dom';
import ContextProv from './contexts/ContextProv';
import { AuthProvider } from './contexts/AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ContextProv>
          <App />
        </ContextProv>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
