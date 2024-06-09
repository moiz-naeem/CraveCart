import { useParams } from "react-router-dom"
import { menuApi , DISH_ITEM_TYPE_KEY, MENU_ITEM_TYPE_KEY} from "./Constants"
import { useEffect , useState} from "react"
import axios from "axios"
import MenuCard from "./MenuCard"
const Menu = () => {
    const {restaurantID} = useParams();
    const [menuItems, setmenuItems] = useState([]);
    useEffect(() => {
        const fetchMenuData = async(restaurantID) => {
        try{
            const response = await axios.get(menuApi + restaurantID);
            const data = await response.data;
            const menu = (data?.data?.cards.find(x=> x.groupedCard)?.
                          groupedCard?.cardGroupMap?.REGULAR?.
                          cards?.map(x => x.card?.card)?.
                         filter(x=> x['@type'] === DISH_ITEM_TYPE_KEY  || x['@type'] === MENU_ITEM_TYPE_KEY)?.
                        map(x=> x.itemCards).flat().map(x=> x.card?.info) || []);
            setmenuItems(menu);
        }catch(error){
            console.error(error)
        } 
                
            };
            
        fetchMenuData(restaurantID);
    })
    
    return (
        <div className="restaurants">
        {menuItems.map((menu) => {
            return (               
                    <MenuCard key={menu.id} menu = {menu}/>      
            )
        })}
        </div>

    )
}
export default Menu;