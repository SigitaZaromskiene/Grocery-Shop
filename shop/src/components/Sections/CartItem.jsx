import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faTrash } from "@fortawesome/free-solid-svg-icons";
import { uiActions } from "../store/slices/uiSlice";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { cartActions } from "../store/slices/cartSlice";

const CartItem = () => {
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.cart.cart);

  const showCartHandler = () => {
    dispatch(uiActions.toggleCartVisibility());
  };

  return (
    <div className="cart_items_container">
      <ul className="cart_items">
        {cartData.map((i) => (
          <li key={i.id}>
            <header>
              <h3>{i.title}</h3>
              <div className="price">
                {i.totalPrice.toFixed(2, 0)}
                <span>&euro;</span>
              </div>
            </header>
            <div className="cart_items_details">
              <div className="cart_items_details_left">
                <div className="cart_items_quantity">
                  <span>x {i.quantity}</span>
                </div>
                <div className="cart_items_actions">
                  <button
                    onClick={() =>
                      dispatch(
                        cartActions.addItemToCart({
                          title: i.title,
                          price: i.price,
                          id: i.id,
                          quantity: i.quantity * i.price,
                          category: i.category,
                          totalPrice: i.totalPrice,
                        })
                      )
                    }
                  >
                    +
                  </button>
                  <button
                    onClick={() =>
                      dispatch(
                        cartActions.removeItemFromCart({
                          title: i.title,
                          price: i.price,
                          id: i.id,
                          quantity: i.quantity * i.price,
                          category: i.category,
                          totalPrice: i.totalPrice,
                        })
                      )
                    }
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="cart_items_delete">
                <NavLink to="/" onClick={showCartHandler}>
                  <FontAwesomeIcon className="icon_leave" icon={faX} />
                </NavLink>
                <FontAwesomeIcon
                  className="icon_delete"
                  icon={faTrash}
                  onClick={() => {
                    dispatch(cartActions.deleteItemFromCart({ id: i.id }));
                  }}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItem;
