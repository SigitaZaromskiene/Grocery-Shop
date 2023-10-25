import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faTrash } from "@fortawesome/free-solid-svg-icons";

import { uiActions } from "../store/slices/uiSlice";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartActions from "./CartActions";


const CartItem = () => {
  const dispatch = useDispatch();

  const cart = useSelector(state=>state.cart.cart)





  const showCartHandler = () => {
    dispatch(uiActions.toggleCartVisibility());
  };




  return (
    <div className="cart_items_container">
      <ul className="cart_items">
        {cart.map(i=><li key={i.id}>
          <header>
            <h3>{i.title}</h3>
            <div className="price">
              {i.price}
              <span>&euro;</span>
            </div>
          </header>
          <div className="cart_items_details">
            <div className="cart_items_details_left">
              <div className="cart_items_quantity">
                <span>x {i.quantity}</span>
              </div>
             <CartActions id={i.id} title={i.title} price={i.price} quantity={i.quantity}  totalQuantity={i.totalQuantity}/>
            </div>
            <div className="cart_items_delete">
              <NavLink to="/" onClick={showCartHandler}>
                <FontAwesomeIcon className="icon_leave" icon={faX} />
              </NavLink>
              <FontAwesomeIcon className="icon_delete" icon={faTrash} />
            </div>
          </div>
        </li>)}
        
      </ul>
    </div>
  );
};

export default CartItem;
