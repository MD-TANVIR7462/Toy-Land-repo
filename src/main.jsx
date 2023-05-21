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
import Altoys from './components/Altoys/Altoys.jsx';
import Blog from './components/Blog/Blog.jsx';
import AddAToy from './components/ADD a Toy/AddAToy.jsx';
import Mytoys from './components/MyToys/Mytoys.jsx';
import PrivateRoute from './components/privateRoute/PrivateRoute.jsx';
import SingleTOy from './components/MyToys/SingleTOy.jsx';
import ToyDetails from './components/singleTOyRoute/ToyDetails.jsx';
import Update from './components/Update/Update.jsx';









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
      {
        path: '/alltoys',
        element: <Altoys></Altoys>,
       


      },
      {
        path: '/blog',
        element: <Blog></Blog>
       


      },
      {
        path: '/addatoy',
        element:<PrivateRoute><AddAToy></AddAToy></PrivateRoute>
      },
      {
        path: '/mytoys',
        element:<PrivateRoute><Mytoys></Mytoys></PrivateRoute>
      },
      {
        path: '/singletoy/:id',
        element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://assignment-11-server-blue-rho.vercel.app/toyland/${params.id}`)
       
      },
      {
        path: '/updateDetails/:id',
        element:<Update></Update>,
        loader:({params})=>fetch(`https://assignment-11-server-blue-rho.vercel.app/toyland/${params.id}`)
       
      }
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
