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
        <div className="w-44 p-2 m-6 rounded-md bg-slate-50 text-center shadow-md cursor-pointer">
            <img  className="h-52 w-44 rounded-md" src={imageLink + imageId}/>
            <div className="mt-4">
               <h5 className="font-bold"> {name}</h5>
               <div className="mt-3">
                  <h5> {((parseInt(price))/100) +"₹"}</h5>
                  {/* <p> {description} </p>  */}
               </div>   
            </div>     
        </div>
        

    //    <div className="restaurant-card" id="menu-card">
    //     <img src={imageLink + imageId}/>
    //     <h5>{name}</h5>
    //     <h5>/h5>
    //     <p>{description}</p>
    //    </div>
    )
}

export  default MenuCard;