import React from 'react'
import ReactDOM from 'react-dom/client'
import router from "./router/router";
import './index.css'
import 'flowbite';
import {RouterProvider} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
