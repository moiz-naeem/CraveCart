import ShimmerUI from "./ShimmerUI";
import NotFound from "./NotFound";
import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { restarauntAPI } from "./Constants";


const filterData = (searchText, restaurants ) => {
    return (
        restaurants.filter((restaurant) =>
            restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))
)
}

const Body = () => {

    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const handleSearch = () =>{
       setFilteredRestaurants(filterData(searchText, restaurants));      
    }

    useEffect(()=>{
        fetchData();
}, [])
    const fetchData = async()=>{
        try{
            const response = await axios.get(restarauntAPI);
            const data = await response.data;
            const restaurantList = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setFilteredRestaurants(restaurantList)
            setRestaurants(restaurantList);
        }catch(error){
            console.error(error);
        }
        
}

    return (restaurants.length
     ?  (  
        <>
        <div className="search-input">
            <input 
              className="search-input"
              placeholder="Search"
              value={searchText} 
              onChange={(e) => setSearchText(e.target.value)}/>
            <button className="search-button" onClick={handleSearch}>Search </button>
        </div>
            
        <div className="restaurants"> 
            {!filteredRestaurants.length ? (<NotFound/>) : (filteredRestaurants.map(restaurant => 
                (<RestaurantCard key={restaurant?.info?.id} {...restaurant?.info}/>
            ))
           )}

        </div>  
        </>
                
    )  : (<ShimmerUI/>)); 
}

export default Body;