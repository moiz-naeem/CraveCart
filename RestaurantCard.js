import { imageLink } from "./RestarauntData";

export const RestaurantCard = ({
    cloudinaryImageId = "490629b70f89da8a5b93fc199ece335e",
    name= "No name",
    cuisines  = "No cuisine",
    area = "No Area",
    totalRatingsString = 0,
    avgRating = 0,
}) => {
    return(
        <div className="restaurant-card">
            <img src={imageLink + cloudinaryImageId}/>
            <h4> {name}</h4>
            <h4> {cuisines.join(", ")}</h4>
            <h4> {area} </h4>
            <span>
              <h4>
               <i class="fa-solid fa-star"></i>
               {avgRating + "⭐ ("+ totalRatingsString + ")"}
              </h4>
            </span>
        </div>
    )

}
