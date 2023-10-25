import CartItem from "./CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartTotal from "./CartTotal";


const groceries = [
  {
    title: "Apple",
    price: "1.25",
    quantity: "1",
  },
  { title: "Bread", price: "3.15", quantity: "1" },
  { title: "Chicken", price: "6.25", quantity: "1" },
  { title: "Milk", price: "2.99", quantity: "1" },
  { title: "Bannana", price: "0.99", quantity: "1" },
  { title: "Jam", price: "4.45", quantity: "1" },
];

function Cart() {

  



  return (
    <div className="cart_container">
      <div className="cart">
        <h2>
          <FontAwesomeIcon className="icon" icon={faCartShopping} />
          Your <span>Shoping</span> Cart
        </h2>
        {groceries.map((p) => (
          <CartItem
            title={p.title}
            price={p.price}
            quantity={p.quantity}
            total={p.total}
          />
        ))}
        <CartTotal />
      </div>
    </div>
  );
}

export default Cart;
