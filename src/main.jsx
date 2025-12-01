import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { router } from './Routes/Routes.jsx';
import AuthProvider from './Providers/AuthProviders.jsx';
import { Toaster } from 'react-hot-toast';
import ErrorBoundary from './Pages/ErrorBoundary.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ErrorBoundary>
        <Toaster position="top-center" />
        <RouterProvider router={router} />
      </ErrorBoundary>
    </AuthProvider>
  </StrictMode>
);
