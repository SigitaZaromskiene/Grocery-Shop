import logo from "../../UI/Img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { uiActions } from "../store/slices/uiSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Logout from "../Pages/Logout";
import MobileFriendlyMenu from "./NavMobileFriendlyMenu";

function Nav() {
  const dispatch = useDispatch();

  const mobileMenu = useSelector(state=>state.ui.mobileMenuVisible)

  const isLogged = useSelector((state) => state.signIn.isLogged);
  const cartArray = useSelector((state) => state.cart.cart);
  
  
 const totalCartAmount = cartArray.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );

  const cartFormHandler = () => {
    dispatch(uiActions.toggleCartVisibility());
  };
  return (
    <>
      <nav className="nav_container">
        <div className="nav_container_left">
          <img src={logo} alt="Shop logo leaf" />
          <p className="nav_container_left_title">
            Nature<span>Fresh</span>
          </p>
        </div>
        <div className="nav_container_middle">
          <ul>
            <NavLink className="custom_link" to="/">
              Home
            </NavLink>
            <NavLink className="custom_link" to="/about">
              About us
            </NavLink>
            <NavLink className="custom_link" to="/category">
              Category
            </NavLink>
            <NavLink className="custom_link" to="/shop">
              Shop
            </NavLink>
          </ul>
        </div>
        <div className="nav_container_right">
         
          <ul>
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
            {isLogged=== !false ? (
              <Logout />
            ) : (
              <NavLink className="custom_link" to="/login">
                Login
              </NavLink>
            )}
          </ul>
        </div>
       <MobileFriendlyMenu/> 
       
      </nav>
    </>
  );
}
export default Nav;
