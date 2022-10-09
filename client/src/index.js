import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import Main from './components/Main';
import Result from './components/Result';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/WaitingRoom/:gameId',
    element: <WaitingRoom />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/Main/:gameId',
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/Result/:gameId',
    element: <Result />,
    errorElement: <ErrorPage />,
  },
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)