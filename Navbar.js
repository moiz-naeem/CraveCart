import { useState } from "react";
import logo from "./Logo.png"
import { Link } from "react-router-dom";




const Navbar = () => {
    const [isLoggedIn , setIsLoggedIn] = useState(false)

return (
<div className="flex bg-slate-100 shadow-md rounded-lg justify-between">
    <img className="h-24, w-24" src={logo} alt="CraveCart logo"/>
    
    <ul className="flex py-2 justify-self-center"> 
        
        <li className="px-6 py-7"><Link to={"/"}> Home </Link></li>
        <li className="px-6 py-7"><Link to={"/about"}> About</Link></li>
        <li className="px-6 py-7"><Link to={"/cart"}> Cart </Link></li>
    </ul>
    <div className="px-10 py-9 justify-self-center">
         {isLoggedIn ?  
          <button onClick={()=>{setIsLoggedIn(false)}}>Logout</button> :
          (<Link to={"/register"} >
            <button onClick={() => setIsLoggedIn(true)}>Login</button>  </Link> )
}
    </div>
    
</div>

)
}

export default Navbar;