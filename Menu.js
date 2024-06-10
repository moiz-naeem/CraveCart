import { useParams } from "react-router-dom"
import { menuApi , DISH_ITEM_TYPE_KEY, MENU_ITEM_TYPE_KEY} from "./Constants"
import { useEffect , useState} from "react"
import Search from "./Search"
import axios from "axios"
import MenuCard from "./MenuCard"
import NotFound from "./NotFound"
const Menu = () => {
    const {restaurantID} = useParams();
    const [menuItems, setmenuItems] = useState([]);
    const [filteredMenuItem, setFilteredMenuItem ] = useState([]);
    useEffect(() => {
        const fetchMenuData = async(restaurantID) => {
        try{
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
            setmenuItems(uniqueMenu);
            setFilteredMenuItem(uniqueMenu);
        }catch(error){
            console.error(error)
        } 
                
            };
            
        fetchMenuData(restaurantID);
    }, [])
    
    return (
        <>
          <Search setFiltered={setFilteredMenuItem} raw={menuItems} type={"menu"}/>
          <div className="restaurants">
            {filteredMenuItem.length ? 
               (filteredMenuItem.map((menu) => {
                return (            
                    <MenuCard key={menu.id} menu = {menu} />
                          
            )
            })) : <NotFound/>}
        </div>
        </>
        

    )
}
export default Menu;