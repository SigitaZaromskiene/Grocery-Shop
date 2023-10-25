import CartItem from "./CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartTotal from "./CartTotal";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);

  console.log(cart)
  
  if (cart.length === 0) {
    return (
      <div className="cart_container">
        <div className="cart_empty">
          <h2>
            <FontAwesomeIcon className="icon" icon={faCartShopping} />
            Your <span>Shoping</span> Cart
          </h2>
          <p>Your cart is empty</p>
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
        {cart.map((p) => (
          <CartItem key={p.id} />
        ))}
        <CartTotal />
      </div>
    </div>
  );
}

export default Cart;
