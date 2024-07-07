import { useDispatch } from "react-redux";
import { imageLink } from "./Constants";
import { removeItem} from "./cartSlice";
import { useDispatch } from "react-redux";

const CartCard = ({item}) => {
    const { name = "No Restaurant", imageId = "490629b70f89da8a5b93fc199ece335e", price = "0" } = item
    const dispatch = useDispatch() 
    const removeFromCart = () =>{
       dispatch(removeItem(item))
    }
   
    return (
        
        <div className="w-44 p-2 m-6 rounded-md bg-slate-50 text-center shadow-md cursor-pointer">
            <img  className="h-52 w-44 rounded-md" src={imageLink + imageId}/>
            <div className="mt-4">
               <h5 className="font-bold"> {name}</h5>
               <div className="mt-3">
                  <h5> {((parseInt(price))/100) +"₹"}</h5>
               </div>
               <button className="bg-red-100 rounded-md p-1 m-1 px-3 text-sm font-bold"
               onClick={removeFromCart}
               >Remove</button>   
            </div>     
        </div>

        
    )
}

export  default CartCard;