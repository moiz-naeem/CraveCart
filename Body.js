import ShimmerUI from "./ShimmerUI";
import NotFound from "./NotFound";
import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import CitiesDropdown from "./CitiesDropdown";
import { fetchData, handleSearch} from "./utils";
import RestaurantSearch from "./RestaurantSearch";





const Body = () => {

    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [coordinates, setCoordinates] = useState(null);


    
    useEffect(()=>{
       if (coordinates){ fetchData(setRestaurants, setFilteredRestaurants, coordinates)};
}, [coordinates])
  

    return (
        <>
          <CitiesDropdown setCoordinates={setCoordinates} />
          {coordinates ? (
            <>
              <RestaurantSearch
                setFilteredRestaurants={setFilteredRestaurants}
                restaurants={restaurants}
              />
              <div className="restaurants">
                {filteredRestaurants.length ? (
                  filteredRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
                  ))
                ) : (
                  <NotFound />
                )}
              </div>
            </>
          ) : (
            <ShimmerUI />
          )}
        </>
      ); 
}

export default Body;