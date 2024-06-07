import { imageLink } from "./Constants";
const MenuCard = ({
    menu: {
        name = "No Restaurant",
        description = "No description",
        imageId = "490629b70f89da8a5b93fc199ece335e",
        price = "500"
    } = {}

}) => {
    return (
       <div className="restaurant-card" id="menu-card">
        <img src={imageLink + imageId}/>
        <h5>{name}</h5>
        <h5>{price}</h5>
        <p>{description}</p>
       </div>
    )
}

export  default MenuCard;