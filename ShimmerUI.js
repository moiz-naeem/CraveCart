const ShimmerUI = () =>{
   return (
    <div className="flex flex-wrap justify-center ">
      { (Array.from({length: 12}).fill(1)).map((card, index) => {
       return  (
        <div className="w-44 p-2 m-6 rounded-md bg-slate-50 text-center shadow-md cursor-pointer">
        <img  className="h-52 w-44 rounded-md"/>
        <div className="mt-4">
           <h5 className="font-bold"> </h5>
           <div className="mt-3">
              <h5> </h5>
              <h5>  </h5>         
            
           </div>
           
        </div>

        
        
    </div>
        
       )
    })}
    </div>
   )
}   

export default ShimmerUI;