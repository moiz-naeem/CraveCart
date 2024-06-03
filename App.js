import React from "react";
import ReactDOM from "react-dom/client"
import logo from "./Logo.jpeg"
import { imageLink } from "./RestarauntData";
import { restaurants } from "./RestarauntData";

const Navbar = () => {
    return (
    <div className="navbar">
        <img className="logo" src={logo} alt="CraveCart logo"/>
        <ul className="navItems"> 
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
        </ul>
    </div>
    
)
}

const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    totalRatingsString,
    avgRating,
}) => {
    return(
        <div className="restaurant-card">
            {console.log(name)}
            <img src={imageLink + cloudinaryImageId}/>
            <h4> {name}</h4>
            <h4> {cuisines.join(", ")}</h4>
            <h4> {area} </h4>
            <span>
              <h4>
               <i class="fa-solid fa-star"></i>
               {avgRating + "⭐ ("+ totalRatingsString + ")"}
              </h4>
            </span>
        </div>
    )

}

const Body = () => {
    return (     
        <div className="restaurants">
            {restaurants.map(restaurant => {
              return (<RestaurantCard key={restaurant.info.id} {...restaurant.info}/>
            )})}
        </div>  
            
                
    );
}

const Footer = () => {
    return(
        <h4>Footer</h4>
    )
}
const Page = () =>{
    return(
        <>
          <Navbar/>
          <Body/>
          <Footer/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page/>)