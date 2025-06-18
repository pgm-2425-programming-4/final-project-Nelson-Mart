import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './routeTree';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className="main">
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
  </div>
);