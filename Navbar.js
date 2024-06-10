import { useState } from "react";
import logo from "./Logo.jpeg"
import { Link } from "react-router-dom";




const Navbar = () => {
    const [isLoggedIn , setIsLoggedIn] = useState(false)

return (
<div className="navbar">
    <img className="logo" src={logo} alt="CraveCart logo"/>
    
    <ul className="navItems"> 
        
        <li><Link to={"/"}> Home </Link></li>
        <li><Link to={"/about"}> About</Link></li>
        <li><Link to={"/cart"}> Cart </Link></li>
        <div className="log-sign">
         {isLoggedIn ?  
          <button onClick={()=>{setIsLoggedIn(false)}}>Logout</button> :
          (<Link to={"/register"} >
            <button onClick={() => setIsLoggedIn(true)}>Login</button>  </Link> )
}
        </div>
    </ul>
</div>

)
}

export default Navbar;