import {  createContext } from "react"
import { useState, useEffect } from "react";
import { fetchData } from "../utils/utils";

const RestaurantContext = createContext();

export const RestaurantProvider = ({children}) =>{
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [coordinates, setCoordinates] = useState(null);
    const [isLoading, setLoading] = useState(true);
      
    useEffect(()=>{
        coordinates && fetchData({
            setReal:setRestaurants, 
            setFiltered:setFilteredRestaurants,
            coordinates: coordinates, 
            setLoading: setLoading,
            type: "restaurant"
        })
        
}, [coordinates])

  return(
    <RestaurantContext.Provider
       value={{
        restaurants,
        setCoordinates,
        coordinates,
        setFilteredRestaurants,
        filteredRestaurants,
        isLoading
       }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantContext;