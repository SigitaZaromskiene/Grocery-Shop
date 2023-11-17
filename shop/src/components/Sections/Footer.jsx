import { NavLink } from "react-router-dom";
import logo from "../../UI/Img/logo.png";
import { SocialIcon } from "react-social-icons";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/slices/uiSlice";
import { filterSliceActions } from "../store/slices/filterSlice";

function Footer() {
  const dispatch = useDispatch();

  const contactUsFormHandler = () => {
    dispatch(uiActions.toggleContactFormVisibility());
  };

  const findAddress = () => {
    const address = "Nepriklausomybės a. 14, 44320 Kaunas";
    const formattedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps?q=${formattedAddress}`, "_blank");
  };

  return (
    <div className="footer_container wrapper">
      <div>
        <div className="footer_container_logo">
          <img src={logo} alt="Logo leaf" />
          <h3>
            Nature<span>Fresh</span>
          </h3>
        </div>
        <p className="footer_container_about">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
          voluptatum obcaecati doloremque deserunt, odit nemo ab repellendus!
          Hic, corrupti possimus?
        </p>
        <div className="footer_container_icons">
          <SocialIcon
            className="footer_container_icons_icon"
            url="https://facebook.com"
          />
          <SocialIcon
            className="footer_container_icons_icon"
            url="https://instagram.com"
          />
          <SocialIcon
            className="footer_container_icons_icon"
            url="https://twitter.com"
          />
          <SocialIcon
            className="footer_container_icons_icon"
            url="https://tiktok.com"
          />
        </div>
      </div>
      <div className="footer_container_right">
        <div className="footer_container_right_container">
          <h4>About</h4>
          <NavLink className="footer_container_right_link" to={"/about"}>
            Newsletter
          </NavLink>
          <NavLink className="footer_container_right_link" to={"/category"}>
            Categories
          </NavLink>
          <NavLink className="footer_container_right_link" to={"/shop"}>
            Shop
          </NavLink>
          <NavLink className="footer_container_right_link" to={"/cart"}>
            My cart
          </NavLink>
        </div>
        <div className="footer_container_right_container">
          <h4>Categories</h4>
          <NavLink
            className="footer_container_right_link"
            to="/shop"
            onClick={() => dispatch(filterSliceActions.setCategory("Meat"))}
          >
            Meat
          </NavLink>
          <NavLink
            className="footer_container_right_link"
            to="/shop"
            onClick={() => dispatch(filterSliceActions.setCategory("Dairy"))}
          >
            Dairy
          </NavLink>
          <NavLink
            className="footer_container_right_link"
            to="/shop"
            onClick={() => dispatch(filterSliceActions.setCategory("Fruits"))}
          >
            Fruits
          </NavLink>
          <NavLink
            className="footer_container_right_link"
            to="/shop"
            onClick={() => dispatch(filterSliceActions.setCategory("Drink"))}
          >
            Soft drinks
          </NavLink>
        </div>
        <div className="footer_container_right_container">
          <h4>Help</h4>
          <NavLink className="footer_container_right_link" to={"/register"}>
            Sign Up
          </NavLink>
          <NavLink className="footer_container_right_link" to={"/login"}>
            Sign In
          </NavLink>
          <NavLink
            className="footer_container_right_link"
            to={"/contactus"}
            onClick={contactUsFormHandler}
          >
            Contact us
          </NavLink>
          <NavLink
            className="footer_container_right_link"
            onClick={findAddress}
          >
            Find us
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Footer;
