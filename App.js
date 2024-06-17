import React from "react";
import ReactDOM from "react-dom/client"
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";
import {createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NotFound from "./NotFound";
import About from "./About";
import Cart from './Cart'
import Menu from "./Menu";
import {MenuProvider}from "./MenuContext";
import { RestaurantProvider } from "./RestaurantContext";
import Register from "./Register";


const App = () =>{
   

    return (
        <>
          <RestaurantProvider>
            <MenuProvider>
             <Navbar  />
             <Outlet/>  
            </MenuProvider> 
          </RestaurantProvider> 
          <Footer/>
        </>
    )
}

const appRoute =  createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <NotFound/>,
        children:[
            {
            path: "/",
            element: <Body/>
            },
            {
            path: "/about",
            element: <About/>
            },
            {
            path: "/cart",
            element: <Cart/>
            },
            {
            path: "/restaurant/:restaurantID",
            element: <Menu/>
            },
            {
                path: "/register",
                element: <Register/>
            }

        ]
    
}
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute}/>)