import { createContext } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData } from "../utils/utils";


const MenuContext = createContext();

export const MenuProvider = ({children}) =>{
    const {restaurantID} = useParams();
    const [menuItems, setmenuItems] = useState([]);
    const [filteredMenuItem, setFilteredMenuItem ] = useState([]);
    const [isLoading, setLoading] = useState(true);


    useEffect(() => {
            
        fetchData({
            setReal:setmenuItems, 
            setFiltered:setFilteredMenuItem,
            setLoading: setLoading,
            restaurantID: restaurantID,
            type:"menu"});
    }, [restaurantID])

    return(
        <MenuContext.Provider
          value={{
             menuItems,
             setmenuItems,
             filteredMenuItem,
             setFilteredMenuItem,
             isLoading,
             restaurantID
          }} >
         {children}
        </MenuContext.Provider>


    )
}

export default MenuContext;