import { handleSearch } from "../utils/utils"
import { useState } from "react";
import { filterData } from "../utils/utils";
const RestaurantSearch = ({setFilteredRestaurants, restaurants}) => {
    const [searchText, setSearchText] = useState("");
    
    const handleSearch = () =>{
        setFilteredRestaurants(filterData(searchText, restaurants));      
     }

    return (
        <div className="search-input">
        <input 
          className="search-input"
          placeholder="Search"
          value={searchText} 
          onChange={(e) => setSearchText(e.target.value)}/>
        <button className="search-button" onClick={handleSearch}>Search </button>
    </div> 
    )
}
export default RestaurantSearch;