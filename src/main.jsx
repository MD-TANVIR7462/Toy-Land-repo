import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeMain from './components/Home/HomeMain.jsx';
import LoginPage from './components/Login/LoginPage.jsx';
import Resister from './components/Resister/Resister.jsx';
import AuthProvider from './components/providers/AuthProvider.jsx';
import ErrorPage from './components/Error/ErrorPage.jsx';









// -----------route setup-------
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <HomeMain></HomeMain>

      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>

      },
      {
        path: '/resister',
        element: <Resister></Resister>

      },
    ]

  },
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>





    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>






  </React.StrictMode>,
)
