import { imageLink } from "./Constants";
const MenuCard = ({
    menu: {
        name = "No Restaurant",
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
               </div>   
            </div>     
        </div>
        
    )
}

export  default MenuCard;