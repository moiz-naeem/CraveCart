import { imageLink } from "./RestarauntData";

export const RestaurantCard = ({
    cloudinaryImageId = "490629b70f89da8a5b93fc199ece335e",
    name = "No restaraunt found",
    cuisines = ["No", "cuisines"],
    locality= "No Area",
    totalRatingsString = "0",
    avgRating = 0,
    
}) => {
    return(
        <div className="restaurant-card">
            <img src={imageLink + cloudinaryImageId}/>
            <h5> {name}</h5>
            <h5> {cuisines.join(',  ')} </h5>
            <h5> {locality} </h5>
            
            <span>
              <h5>
               <i class="fa-solid fa-star"></i>
               {avgRating + "⭐ ("+ totalRatingsString + ")"}
              </h5>
            </span>
        </div>
    )

}
