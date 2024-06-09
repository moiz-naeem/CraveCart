import logo from "./Logo.jpeg"
import { Link } from "react-router-dom";




const Navbar = () => {

return (
<div className="navbar">
    <img className="logo" src={logo} alt="CraveCart logo"/>
    
    <ul className="navItems"> 
        
        <li><Link to={"/"}> Home </Link></li>
        <li><Link to={"/about"}> About</Link></li>
        <li><Link to={"/cart"}> Cart </Link></li>
    </ul>
</div>

)
}

export default Navbar;