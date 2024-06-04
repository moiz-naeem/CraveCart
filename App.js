import React from "react";
import ReactDOM from "react-dom/client"
import logo from "./Logo.jpeg"
import {restaurants} from "./RestarauntData";
import { RestaurantCard } from "./RestaurantCard";
import { useState } from "react";


const filterData = (searchText, restaurants) => {
        return (
           restaurants.filter((restaurant) =>{
            return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
})
        )
}


const Navbar = ({setFilteredRestaurants}) => {
    const [searchText, setSearchText] = useState("");
    // const [filteredRestraunts, setFilteredRestraunts] = useState(restaurants);
    const handleSearch = () =>{
        const filtered = filterData(searchText, restaurants)
        setFilteredRestaurants(filtered)
        // {console.log(filteredRestraunts)};
        
        
    }
    return (
    <div className="navbar">
        <img className="logo" src={logo} alt="CraveCart logo"/>
        <div className="search-input">
            <input 
            className="search-input"
            placeholder="Search"
            value={searchText} 
            onChange={(e) => setSearchText(e.target.value)}/>
            <button className="search-button" onClick={handleSearch}>Search </button>
        </div>
        
        <ul className="navItems"> 
            
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
        </ul>
    </div>
    
)
}

const Body = ({restaurants}) => {
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
const App = () =>{
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

    return(
        <>
          <Navbar setFilteredRestaurants={setFilteredRestaurants}/>
          <Body restaurants={filteredRestaurants}/>
          <Footer/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)