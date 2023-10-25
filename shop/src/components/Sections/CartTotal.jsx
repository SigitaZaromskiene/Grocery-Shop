import Btn from "../Buttons/Btn";
import { useDispatch, useSelector } from "react-redux";
import { sendOrderData } from "../store/slices/cartSlice";
import { uiActions } from "../store/slices/uiSlice";

function CartTotal() {

  const dispatch = useDispatch();
  const cartData = useSelector(state=>state.cart.cart)
  const totalPrice = useSelector(state=>state.cart.totalPrice)

  

  

  

  const orderHandler = () => {
    dispatch(sendOrderData(cartData))
    dispatch(uiActions.toggleCartVisibility());
    
  };

  return (
    <div className="cart_total_container">
      <div className="cart_items_total">
        <p className="cart_items_total_paragraph"> Total</p>
        <p className="cart_items_total_price">
          {totalPrice}
          <span>&euro;</span>
        </p>
      </div>
      <Btn text="Order" to={'/'} action={orderHandler} />
    </div>
  );
}

export default CartTotal;
