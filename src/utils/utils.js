import axios from "axios";
import { getAPIwithCoordinates, menuApi,  MENU_ITEM_TYPE_KEY  } from "./Constants";


export const fetchData = async ({
  setReal,
  setFiltered,
  coordinates = null,
  setLoading,
  restaurantID =null,
  type =null
}
) => {
  if (type === "restaurant")
    try {
      setLoading(true);
      const [lat, lng] = coordinates;
      const API = getAPIwithCoordinates(lat, lng);
      const response = await axios.get(API);
      const data = await response.data;
      const restaurantList =
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setLoading(false);
      setFiltered(restaurantList);
      setReal(restaurantList);
    } catch (error) {
      console.error(error);
    }
  else if(type === "menu"){
    try{
        setLoading(true);
        const response = await axios.get(menuApi + restaurantID);
        const data = await response.data;
        const menu = (data?.data?.cards.find(x=> x.groupedCard)?.
                      groupedCard?.cardGroupMap?.REGULAR?.
                      cards?.map(x => x.card?.card)?.
                     filter(x=> x['@type'] === MENU_ITEM_TYPE_KEY )?.
                    map(x=> x.itemCards).flat().map(x=> x.card?.info) || []);
        const uniqueMenu =  menu.reduce((newMenu, item)=>{
             newMenu.some(x => x.id === item.id) ? null : newMenu.push(item);
             return newMenu 
        }, [])
        setLoading(false);
        setReal(uniqueMenu);
        setFiltered(uniqueMenu);
    }catch(error){
        console.error(error)
    }
            
  }
};

export const filterRestaurantData = (searchText, restaurants) => {
  return restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
};

export const filterMenuData = (searchText, menuItems) => {
  return menuItems.filter((menu) =>
    menu.name.toLowerCase().includes(searchText.toLowerCase())
  );
};
