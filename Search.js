import { useState } from "react";
import { filterRestaurantData, filterMenuData } from "./utils";
const Search = ({setFiltered, raw, type}) => {
    const [searchText, setSearchText] = useState("");
    
    const handleSearch = () =>{
       type === "restaurants" ? setFiltered(filterRestaurantData(searchText, raw)) : setFiltered(filterMenuData(searchText, raw));      
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
export default Search;