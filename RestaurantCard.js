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
        <div className="restaurant-card">
            
            <img src={imageLink + cloudinaryImageId}/>
            <Link to={"/restaurant/" + id }> 
            <h5> {name}</h5>
            <h5> {cuisines.join(',  ')} </h5>
            <h5> {locality} </h5>
            </Link>
            <span>
              <h5>
               <i class="fa-solid fa-star"></i>
               {avgRating + "⭐ ("+ totalRatingsString + ")"}
              </h5>
            </span>
            
        </div>
    )

}
