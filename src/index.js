import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App';
import { BrowserRouter } from 'react-router-dom';
import ContextProv from './contexts/ContextProv';
import { AuthProvider } from './contexts/AuthContext';
import { Provider } from 'react-redux';
import { store } from './app/store/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
const client = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <AuthProvider>
          <ContextProv>
            <Provider store={store}>
              <App />
              <ReactQueryDevtools
                initialIsOpen={false}
                position="bottom-right"
              />
            </Provider>
          </ContextProv>
        </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
