import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from '@provider/router';
import AppProvider from '@provider/contextApi';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
)
