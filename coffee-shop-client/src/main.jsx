import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Layout/Home';
import AddCoffee from './Pages/AddCoffee';
import Update from './Pages/Update';
import CoffeeDetails from './Pages/CoffeeDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:3000/coffee')
      },
      {
        path:'/addcoffee',
        element:<AddCoffee></AddCoffee>
      },
      {
        path:'/updatecoffe/:id',
        element:<Update></Update>,
        loader:({params})=>fetch(`http://localhost:3000/coffee/${params.id}`)
      },
      {
        path:'/coffeeDetails/:id',
        element:<CoffeeDetails></CoffeeDetails>,
        loader:({params})=>fetch(`http://localhost:3000/coffee/${params.id}`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
