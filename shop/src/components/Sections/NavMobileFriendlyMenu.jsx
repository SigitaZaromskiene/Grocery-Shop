import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/slices/uiSlice";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function MobileFriendlyMenu() {
  const dispatch = useDispatch();

  const mobileMenuHandler = () => {
    dispatch(uiActions.toggleMobileMenuVisibility());
  };

  const cartArray = useSelector((state) => state.cart.cart);

  const totalCartAmount = cartArray.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );

  const cartFormHandler = () => {
    dispatch(uiActions.toggleCartVisibility());
  };

  return (
    <div className="nav_container_right_burger">
      <div className="nav_container_right_burger_container">
        <NavLink
          to="/cart"
          className="nav_container_right_cart"
          onClick={cartFormHandler}
        >
          <FontAwesomeIcon icon={faCartShopping} />
          <li> My Cart</li>
          <div className="nav_container_right_cart_count">
            {totalCartAmount}
          </div>
        </NavLink>
        <div>
          <FontAwesomeIcon icon={faBars} onClick={mobileMenuHandler} />
        </div>
      </div>
    </div>
  );
}

export default MobileFriendlyMenu;
