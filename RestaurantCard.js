import { imageLink } from "./Constants";
import { Link } from "react-router-dom";

export const RestaurantCard = ({
    cloudinaryImageId = "490629b70f89da8a5b93fc199ece335e",
    name = "No restaraunt found",
    cuisines = ["No", "cuisines"],
    locality= "No Area",
    totalRatingsString = "0",
    avgRating = 0,
    id=0
    
}) => {
    return(
        <div className="w-44 p-2 m-6 rounded-md bg-slate-50 text-center shadow-md cursor-pointer">
            <img  className="h-52 w-44 rounded-md" src={imageLink + cloudinaryImageId}/>
            <Link to={"/restaurant/" + id }> 
            <div className="mt-4">
               <h5 className="font-bold"> {name}</h5>
               <div className="mt-3">
               <h5> {cuisines.join(',  ')} </h5>
               <h5> {locality} </h5>
               
               <span>
                  <h5>
                    <i class="fa-solid fa-star"></i>
                     {avgRating + "⭐ ("+ totalRatingsString + ")"}
                  </h5>
                </span>
                
               </div>
               
            </div>
            </Link>
            
            
        </div>
    )

}
