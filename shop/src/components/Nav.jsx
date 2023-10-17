import logo from "../UI/Img/logo.png";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <nav className="nav_container">
      <div className="nav_container_left">
        <img src={logo} alt="Shop logo leaf" />
        <p className="nav_container_left_title">
          Nature<span>Fresh</span>
        </p>
      </div>
      <div className="nav_container_middle">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Products</li>
          <li>Shop</li>
        </ul>
      </div>
      <div className="nav_container_right">
        <ul>
          <div className="nav_container_right_cart">
            <FontAwesomeIcon icon={faCartShopping} />
            <li>Cart</li>
            <div>0</div>
          </div>
          <li>Login</li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
