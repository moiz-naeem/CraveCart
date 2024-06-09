const ShimmerUI = () =>{
   return (
    <div className="restaurants">
      { (Array.from({length: 12}).fill(1)).map((card, index) => {
       return  (
        
            <div className="restaurant-card">
              <img></img>
              <h5></h5>
              <h5></h5>
              <h5></h5>
            </div>
        
       )
    })}
    </div>
   )
}   
export default ShimmerUI;