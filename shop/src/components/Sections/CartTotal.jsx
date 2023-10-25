import Btn from "../Buttons/Btn";
import { useDispatch, useSelector } from "react-redux";
import { sendCartData } from "../store/slices/cartSlice";
import { uiActions } from "../store/slices/uiSlice";

function CartTotal() {

  const dispatch = useDispatch();
  const cartData = useSelector(state=>state.cart)

  

  

  const orderHandler = () => {
    dispatch(sendCartData(cartData))
    
  };

  return (
    <div className="cart_total_container">
      <div className="cart_items_total">
        <p className="cart_items_total_paragraph"> Total</p>
        <p className="cart_items_total_price">
          33euro
          <span>&euro;</span>
        </p>
      </div>
      <Btn text="Order" action={orderHandler} />
    </div>
  );
}

export default CartTotal;
