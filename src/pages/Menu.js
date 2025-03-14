import {useContext} from "react"
import Search from "../components/Search"
import MenuCard from "../components/MenuCard"
import NotFound from "../pages/NotFound"
import ShimmerUI from "../components/ShimmerUI"
import MenuContext from "../components/MenuContext"

const Menu = () => {

    const {
        menuItems,
        setFilteredMenuItem,
        filteredMenuItem,
        isLoading,
    } = useContext(MenuContext)
    
 return (
        <>
         
          <div className="flex flex-wrap justify-center ">
            {isLoading ? <ShimmerUI/> : (
                filteredMenuItem.length ? (filteredMenuItem.map((menuItem) => {
                    return (
                        <MenuCard key={menuItem.id} menuItem = {menuItem} />
                    )
                })) : <NotFound/>

            )}
          </div>
        </>
        

    )
}
export default Menu;