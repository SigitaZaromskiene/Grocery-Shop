import CartItem from "./CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Cart() {
  return (
    <div className="cart_container">
      <div className="cart">
        <h2>
          <FontAwesomeIcon className="icon" icon={faCartShopping} />
          Your <span>Shoping</span> Cart
        </h2>
        <CartItem title="Apple" price="1.25" quantity="1" total="1" />
      </div>
    </div>
  );
}

export default Cart;
