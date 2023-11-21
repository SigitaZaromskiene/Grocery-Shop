import Btn from "../Buttons/Btn";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, sendOrderData } from "../store/slices/cartSlice";
import { uiActions } from "../store/slices/uiSlice";

function CartTotal() {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cart);

  const { title, price } = cartData;
  const getCartPrices = useSelector((state) => state.cart.cart);

  const totalPrice = getCartPrices.reduce(
    (acc, cur) => acc + cur.totalPrice,
    0
  );

  const orderHandler = () => {
    dispatch(sendOrderData(title, price));
    dispatch(uiActions.toggleCartVisibility());
    dispatch(deleteCart());
  };

  return (
    <div className="cart_total_container">
      <div className="cart_items_total">
        <p className="cart_items_total_paragraph"> Total</p>
        <p className="cart_items_total_price">
          {totalPrice.toFixed(2, 0)}
          <span>&euro;</span>
        </p>
      </div>
      <Btn text="Order" to="/" action={orderHandler} />
    </div>
  );
}

export default CartTotal;
