import ShimmerUI from "./ShimmerUI";
import NotFound from "./NotFound";
import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import CitiesDropdown from "./CitiesDropdown";
import { fetchData, handleSearch} from "./utils";
import Search from "./Search";





const Body = () => {

    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [coordinates, setCoordinates] = useState(null);
    const [isLoading, setLoading] = useState(true);


    
    useEffect(()=>{
       if (coordinates){
         fetchData(setRestaurants, setFilteredRestaurants, coordinates, setLoading)
        };
}, [coordinates])
  

    return (
      <div>
        <div className="bg-orange-500 flex justify-center rounded-sm shadow-lg p-4">
          <CitiesDropdown setCoordinates={setCoordinates} />
          <Search setFiltered={setFilteredRestaurants} raw={restaurants} type="restaurants" />
        </div>

        {isLoading ? (
          <ShimmerUI />
      ) : coordinates ? (
          filteredRestaurants.length ? (
              <div className="flex flex-wrap justify-center mt-4">
                  {filteredRestaurants.map((restaurant) => (
                      <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
                  ))}
              </div>
          ) : (
              <NotFound />
          )
      ) : (
          <NotFound />
      )}
    </div>
);
  }
export default Body;