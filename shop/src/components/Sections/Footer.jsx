import { NavLink } from "react-router-dom";
import logo from "../../UI/Img/logo.png";
import { SocialIcon } from "react-social-icons";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/slices/uiSlice";

function Footer() {
  const dispatch = useDispatch();

  const contactUsFormHandler = () => {
    dispatch(uiActions.toggleContactFormVisibility());
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
            About us
          </NavLink>
          <NavLink className="footer_container_right_link" to={"/products"}>
            Testimonials
          </NavLink>
          <NavLink className="footer_container_right_link" to={"/products"}>
            Shop
          </NavLink>
          <NavLink className="footer_container_right_link" to={"/"}>
            Home
          </NavLink>
        </div>
        <div className="footer_container_right_container">
          <h4>Categories</h4>
          <NavLink className="footer_container_right_link">Fruits</NavLink>
          <NavLink className="footer_container_right_link">Vegetables</NavLink>
          <NavLink className="footer_container_right_link">
            Dairy products
          </NavLink>
          <NavLink className="footer_container_right_link">Soft drinks</NavLink>
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
          <NavLink className="footer_container_right_link">
            +370674393434
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Footer;
