import CartItem from "./CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { uiActions } from "../store/slices/uiSlice";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(uiActions.toggleVisibility());
  };

  return (
    <NavLink className="cart_container" onClick={showCartHandler} to='/'>
      <div className="cart">
        <h2>
          <FontAwesomeIcon className="icon" icon={faCartShopping} onClick={showCartHandler} />
          Your <span>Shoping</span> Cart
        </h2>
        <CartItem title="Apple" price="1.25" quantity="1" total="1" />
      </div>
    </NavLink>
  );
}

export default Cart;
