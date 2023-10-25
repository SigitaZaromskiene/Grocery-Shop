import { useDispatch} from "react-redux";
import { cartActions } from "../store/slices/cartSlice";

function CartActions({id, title, price, quantity, totalQuantity}){

    const dispatch = useDispatch();


    const addItem = ()=>{
        dispatch(cartActions.addItemToCart({id, title, price, quantity, totalQuantity: price * quantity}))
      }
    return (
        <div className="cart_items_actions">
        <button>-</button>
        <button onClick={addItem}>+</button>
      </div>
    )
}

export default CartActions