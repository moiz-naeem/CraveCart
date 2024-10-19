import {useContext} from "react"
import Search from "./Search"
import MenuCard from "./MenuCard"
import NotFound from "./NotFound"
import ShimmerUI from "./ShimmerUI"
import MenuContext from "./MenuContext"

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