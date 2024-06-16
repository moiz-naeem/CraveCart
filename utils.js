import { restarauntAPI } from "./Constants";
import axios from "axios";
import { getAPIwithCoordinates } from "./Constants";

export const fetchData = async(setRestaurants ,setFilteredRestaurants, coordinates,setLoading)=>{
    try{
        
        setLoading(true); 
        const [lat, lng] = coordinates;
        const API = getAPIwithCoordinates(lat, lng)
        const response = await axios.get(API);
        const data = await response.data;
        const restaurantList = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setLoading(false)
        setFilteredRestaurants(restaurantList)
        setRestaurants(restaurantList);
    }catch(error){
        console.error(error);
    }
    
}



export const filterRestaurantData = (searchText, restaurants) => {
    return (
        restaurants.filter(restaurant =>
            restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())))}

export const filterMenuData = (searchText, menuItems) => {
    {console.log("searching")}
    return (
        menuItems.filter( menu => 
            menu.name.toLowerCase().includes(searchText.toLowerCase())
        )
    )
}