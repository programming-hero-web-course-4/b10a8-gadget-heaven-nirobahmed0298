import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Home from './Components/Home/Home.jsx';
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';
import Products from './Components/Products/Products.jsx';
import ErrorPage from './Components/ErrorPAge/ErrorPage.jsx';
import About from './Components/About/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('../Categories.json'),
        children: [
          {
            path: "/",
            element: <Products />,
          },
          {
            path: "/category/:category",
            element: <Products />,
          },
        ]
      },

      {
        path: "/products/:product_id",
        element: <ProductDetails />,
        loader: () => fetch('/Products.json')
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        loader:()=>fetch('/Products.json')
      },
      {
        path: "/about",
        element: <About />,
      },
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
