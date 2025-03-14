import ShimmerUI from "../components/ShimmerUI";
import NotFound from "../pages/NotFound";
import { RestaurantCard } from "../components/RestaurantCard";
import { useContext } from "react";
import RestaurantContext from "../components/RestaurantContext";

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