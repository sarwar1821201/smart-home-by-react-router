import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Error from './components/Error.jsx';
import BackHome from './components/BackHome.jsx';
import About from './components/About.jsx';


const router= createBrowserRouter([
  
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
    
      {
        path:'/',
        element: <BackHome></BackHome>
      },
      {
        path: 'about',
        element: <About></About>
      }

    ]
  }


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
