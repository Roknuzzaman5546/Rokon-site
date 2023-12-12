import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Roots/Roots.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Serrvice from './Components/Serrvice.jsx';
import Myskill from './Components/Myskill.jsx';
import Myprojects from './Components/Myprojects.jsx';
import Mycontact from './Components/Mycontact.jsx';
import React from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/service',
        element: <Serrvice></Serrvice>
      },
      {
        path: '/skill',
        element: <Myskill></Myskill>
      },
      {
        path: '/project',
        element: <Myprojects></Myprojects>
      },
      {
        path: '/contact',
        element: <Mycontact></Mycontact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
