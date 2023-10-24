import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faTrash } from "@fortawesome/free-solid-svg-icons";

import { uiActions } from "../store/slices/uiSlice";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const CartItem = ({ title, price, total, quantity }) => {
  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(uiActions.toggleCartVisibility());
  };

  return (
    <div className="cart_items_container">
      <ul className="cart_items">
        <li>
          <header>
            <h3>{title}</h3>
            <div className="price">
              {price}
              <span>&euro;</span>
            </div>
          </header>
          <div className="cart_items_details">
            <div className="cart_items_details_left">
              <div className="cart_items_quantity">
                <span>x {quantity}</span>
              </div>
              <div className="cart_items_actions">
                <button>-</button>
                <button>+</button>
              </div>
            </div>
            <div className="cart_items_delete">
              <NavLink to="/" onClick={showCartHandler}>
                <FontAwesomeIcon className="icon_leave" icon={faX} />
              </NavLink>
              <FontAwesomeIcon className="icon_delete" icon={faTrash} />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CartItem;
