import Btn from "../Buttons/Btn";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/slices/cartSlice";
import { sendCartData } from "../store/slices/cartSlice";

function AddToCartBtn({ p }) {
  const cartData = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();

  const addToCartHandler = (p) => {
    dispatch(cartActions.addItemToCart(p.id));
    dispatch(sendCartData(cartData));
  };

  return <Btn to="/cart" text="Add to cart" action={addToCartHandler} />;
}

export default AddToCartBtn;
