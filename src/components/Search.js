import { useState } from "react";
import { filterRestaurantData, filterMenuData } from "../utils/utils";
const Search = ({setFiltered, raw, type}) => {
    const [searchText, setSearchText] = useState("");
    
    const handleSearch = () =>{
       type === "restaurants" ? setFiltered(filterRestaurantData(searchText, raw)) : setFiltered(filterMenuData(searchText, raw));      
     }

    return (
        <div className="px-4 py-4 m-3 ">
        <input 
          className="rounded-md mr-4 p-1 "
          placeholder="Search"
          value={searchText} 
          onChange={(e) => setSearchText(e.target.value)}/>
        <button className="search-button bg-black hover:bg-white hover:text-black p-1 rounded-md text-white" onClick={handleSearch}>Search </button>
    </div> 
    )
}
export default Search;