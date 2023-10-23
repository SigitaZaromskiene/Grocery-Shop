import logo from "../../UI/Img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { uiActions } from "../store/slices/uiSlice";
import { useDispatch } from "react-redux"

function Nav() {

  const dispatch = useDispatch()

  const cartFormHandler = () => {
    dispatch(uiActions.toggleCartVisibility())
  }
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
          <NavLink className="custom_link" to="/">Home</NavLink>
          <NavLink className="custom_link" to='/about'>About us</NavLink>
          <NavLink className="custom_link" to='/category'>Category</NavLink>
          <NavLink className="custom_link" to='/shop'>Shop</NavLink>
        </ul>
      </div>
      <div className="nav_container_right">
        <ul>
          <div className="nav_container_right_cart" onClick={cartFormHandler}>
            <NavLink to='/cart'>
            <FontAwesomeIcon icon={faCartShopping} />
            <li> My Cart</li>
            <div className="nav_container_right_cart_count">0</div>
            </NavLink>
          </div>
          <NavLink className="custom_link"to='/login'>Login</NavLink>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
