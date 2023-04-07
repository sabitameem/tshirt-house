import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import MainLayout from './components/Layout/MainLayout';
import OrderReview from './components/OrderReview/OrderReview';
import Grandpa from './components/Grandpa/Grandpa';

const router = createBrowserRouter([
      {
        path:'/',
        element: <MainLayout></MainLayout>,
        children:[
          {
            path: '/',
            element : <Home></Home>,
            loader: ()=> fetch('tshirts.json'),
          },
          {
            path:'review',
            element: <OrderReview></OrderReview>,
          },
          {
            path:'grandpa',
            element: <Grandpa></Grandpa>
          },
        ]
      },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
