import React from "react";
import ReactDOM from "react-dom/client"
import logo from "./Logo.jpeg"
import { restaurants as rData } from "./RestarauntData";
import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { API } from "./RestrauntDataApi";


const filterData = (searchText, restaurants ) => {
        return (
            restaurants.filter((restaurant) =>
                restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))
    )
}


const Navbar = ({setFilteredRestaurants, restaurants}) => {
    const [searchText, setSearchText] = useState("");
    const handleSearch = () =>{
        setFilteredRestaurants(filterData(searchText, restaurants));      
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

const Body = ({filteredRestaurants}) => {
    return (     
        <div className="restaurants">
            
            {filteredRestaurants.map(restaurant => 
                (<RestaurantCard key={restaurant?.info?.id} {...restaurant.info}/>
            ))}
        </div>  
            
                
    );
}



const Footer = () => {
    return(
        <h4>Footer</h4>
    )
}
const App = () =>{
    const [restaurants, setRestaurants] = useState([rData]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([rData]);

    useEffect(()=>{
        const fetchData = async()=>{
            const response = await axios.get(API);
            const data = await response.data;
            const restaurantList = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setFilteredRestaurants(restaurantList)
            setRestaurants(restaurantList);
        }
        fetchData();

}, [])

    return(
        <>

          <Navbar setFilteredRestaurants={setFilteredRestaurants} restaurants={restaurants} />
          <Body filteredRestaurants={filteredRestaurants}/>
          <Footer/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)