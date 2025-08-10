import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import About from './About.jsx';
import Contact from './Contact.jsx';
import Product from './Product.jsx';
import MoreInfo from './MoreInfo.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
        {
          path:"/product",
          loader:()=>fetch('https://fakestoreapi.com/products'),
          element:<Product></Product>
         },
         {
          path:"/product/:productId",
          loader:({params})=>fetch(`https://fakestoreapi.com/products/${params.productId}`),
          element:<MoreInfo></MoreInfo>
         },
        {
          path:"/about",
          element:<About></About>
        },
        {
          path:"/contact",
          element:<Contact></Contact>
      }
    ]
  }
    
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
