import ShimmerUI from "./ShimmerUI";
import NotFound from "./NotFound";
import { RestaurantCard } from "./RestaurantCard";
import CitiesDropdown from "./CitiesDropdown";
import Search from "./Search";
import { useContext } from "react";
import RestaurantContext from "./RestaurantContext";

const Body = () => {
    const {
      restaurants =[],
      setCoordinates,
      coordinates = {lat:0, lng:0},
      setFilteredRestaurants,
      filteredRestaurants=[],
      isLoading = false
     } = useContext(RestaurantContext); 

    return (
      <div>

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