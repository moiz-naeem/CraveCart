import { useDispatch, useSelector } from "react-redux";
import CartCard from "../components/CartCard";
import { clearCart } from "../components/cartSlice";
import { useDispatch } from "react-redux";



const Cart = () => {
    const cartItems = useSelector(store => store.cart.items)
    const dispatch = useDispatch()
    const EmptyTheCart = () => {
        dispatch(clearCart())
    }

    return (
        <div>
        <>
        <button className="bg-red-100 rounded-md p-1 m-1 px-3 text-sm font-bold"
               onClick={EmptyTheCart}
               >Clear Cart</button>
        </>
        <div>
            <div className="flex">
            {cartItems.map((item) => 
               <CartCard key={item.id} item={item} />
        )}
        </div>

        </div>
        </div>
        
        
    )
}

export default Cart;