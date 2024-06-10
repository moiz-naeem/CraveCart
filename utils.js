import { restarauntAPI } from "./Constants";
import axios from "axios";
import { getAPIwithCoordinates } from "./Constants";

export const fetchData = async({setRestaurants ,setFilteredRestaurants, coordinates})=>{
    try{
        if(!coordinates) return console.log("Not Set") ;
        const [lat, lng] = coordinates;
        console.log(lat+lng +"h=ello")
        const API = getAPIwithCoordinates(lat, lng)
        console.log(API);
        // const response = await axios.get(restarauntAPI);
        const response = await axios.get(API);
        const data = await response.data;
        const restaurantList = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setFilteredRestaurants(restaurantList)
        setRestaurants(restaurantList);
    }catch(error){
        console.error(error);
    }
    
}



export const filterData = (searchText, restaurants ) => {
    return (
        restaurants.filter((restaurant) =>
            restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())))}