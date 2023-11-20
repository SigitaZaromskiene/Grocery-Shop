import CartItem from "./CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faX } from "@fortawesome/free-solid-svg-icons";
import CartTotal from "./CartTotal";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { uiActions } from "../store/slices/uiSlice";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();

  if (cart.length === 0) {
    return (
      <div className="cart_container">
        <div className="cart_empty">
          <h2>
            <FontAwesomeIcon className="icon" icon={faCartShopping} />
            Your <span>Shoping</span> Cart
          </h2>
          <p>Your cart is empty</p>
          <NavLink
            className="custom_link"
            to="/"
            onClick={() => dispatch(uiActions.toggleCartVisibility())}
          >
            <FontAwesomeIcon className="icon_leave" icon={faX} />
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="cart_container">
      <div className="cart">
        <h2>
          <FontAwesomeIcon className="icon" icon={faCartShopping} />
          Your <span>Shoping</span> Cart
        </h2>
        <NavLink
          className="custom_link"
          to="/"
          onClick={() => dispatch(uiActions.toggleCartVisibility())}
        >
          <FontAwesomeIcon className="icon_leave" icon={faX} />
        </NavLink>

        <CartItem />

        <CartTotal />
      </div>
    </div>
  );
}

export default Cart;
