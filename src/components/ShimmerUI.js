const ShimmerUI = () =>{
   return (
    <div className="flex flex-wrap justify-center ">
      { (Array.from({length: 12}).fill(1)).map((card, index) => {
       return  (
        <div key={index + 1000} className="w-44 p-2 m-6 rounded-md bg-slate-50 text-center shadow-md cursor-pointer">
        <img key={index + 2000} className="h-52 w-44 rounded-md"/>
        <div key={index +3000} className="mt-4">
           <h5 key={index + 4000} className="font-bold"> </h5>
           <div key={index + 5000} className="mt-3">
              <h5 key={index + 6000}> </h5>
              <h5 key ={index +7000}>  </h5>         
            
           </div>
           
        </div>

        
        
    </div>
        
       )
    })}
    </div>
   )
}   

export default ShimmerUI;