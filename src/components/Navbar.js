import { useState, useContext } from "react";
import logo from "../assets/Logo.png"
import { Link } from "react-router-dom";
import RestaurantContext from "./RestaurantContext";
import MenuContext from "./MenuContext";
import Search from "./Search";
import CitiesDropdown from "./CitiesDropdown";
import { useSelector } from "react-redux";



const Navbar = () => {
    const cartItems = useSelector(store => store.cart.items)
    const [isLoggedIn , setIsLoggedIn] = useState(false)
    const{
        setFilteredMenuItem,
        menuItems,
        restaurantID,
              
    } = useContext(MenuContext)

    const {
        setFilteredRestaurants,
        restaurants,
        setCoordinates 
    } = useContext(RestaurantContext);

return (
<div className="flex bg-orange-500 shadow-md  justify-between">
    <div className="rounded-full mt-1 mb-1 shadow-md bg-slate-100 ml-6">
       <img className="h-24, w-24" src={logo} alt="CraveCart logo"/>       
    </div>
    <div className="flex justify-center mt-1 mb-1">
        <div className="bg-orange-500 flex justify-center  mt-3">
          <CitiesDropdown/>   
        </div>
        <div className="mt-3">
        {restaurantID ? (<Search setFiltered={setFilteredMenuItem} raw={menuItems} type={"menu"}/>)
          : (<Search setFiltered={setFilteredRestaurants} raw={restaurants} type="restaurants" />)
        }
        </div>
        
          </div>
   <div className="flex">   
    
    
    <ul className="flex py-2 justify-self-center mt-3"> 
        
        <li className="px-6 py-7"><Link to={"/"}> Home </Link></li>
        <li className="px-6 py-7"><Link to={"/about"}> About</Link></li>
        {cartItems.length == 0 ? (<li className="px-6 py-7"><Link to={"/cart"}> Cart</Link></li>)
        : (<li className=" h-8 w-12 mt-7 pl-2 pt-1 bg-green-400 text-white rounded-md "><Link to={"/cart"}> Cart</Link></li>)}
    </ul>
    <div className="px-10 py-9 justify-self-center mt-3">
         {isLoggedIn ?  
          <button onClick={()=>{setIsLoggedIn(false)}}>Logout</button> :
          (<Link to={"/register"} >
            <button onClick={() => setIsLoggedIn(true)}>Login</button>  </Link> )
}
    </div>
    </div> 
</div>

)
}

export default Navbar;