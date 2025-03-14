import React from "react";
import ReactDOM from "react-dom/client"
import Navbar from "./src/components/Navbar";
import Body from "./src/pages/Body";
import Footer from "./src/components/Footer";
import {createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NotFound from "./src/pages/NotFound";
import About from "./src/pages/About";
import Cart from './src/pages/Cart'
import Menu from "./src/pages/Menu";
import {MenuProvider}from "./src/components/MenuContext";
import { RestaurantProvider } from "./src/components/RestaurantContext";
import Register from "./src/pages/Register";
import { Provider } from "react-redux";
import store from "./src/components/store";

const App = () =>{
   

    return (
        <Provider store={store}>
          <RestaurantProvider>
            <MenuProvider>
             <Navbar  />
             <Outlet/>  
            </MenuProvider> 
          </RestaurantProvider> 
          <Footer/>
        </Provider>
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