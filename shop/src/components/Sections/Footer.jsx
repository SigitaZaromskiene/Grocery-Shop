import logo from "../../UI/Img/logo.png";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div className="footer_container wrapper">
      <div>
        <div className="footer_container_logo">
          <img src={logo} alt="Logo leaf" />
          <h4>
            Nature<span>Fresh</span>
          </h4>
        </div>
        <p className="footer_container_about">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
          voluptatum obcaecati doloremque deserunt, odit nemo ab repellendus!
          Hic, corrupti possimus?
        </p>

        <div className="footer_container_icons">
          <SocialIcon className="footer_container_icons_icon" url="https://facebook.com" />
          <SocialIcon className="footer_container_icons_icon" url="https://instagram.com" />
          <SocialIcon className="footer_container_icons_icon" url="https://twitter.com" />
          <SocialIcon className="footer_container_icons_icon" url="https://tiktok.com" />
        </div>
      </div>
      <div>
        <h4>About</h4>
        <p>About us</p>
        <p>Testimonials</p>
        <p>Shop</p>
        <p>Home</p>
      </div>
      <div>
        <h4>Categories</h4>
        <p>Fruits</p>
        <p>Vegetables</p>
        <p>Dairy products</p>
        <p>Soft drinks</p>
      </div>
      <div>
        <h4>Help</h4>
        <p>Account</p>
        <p>Login</p>
        <p>Contact us</p>
        <p>+370674393434</p>
      </div>
    </div>
  );
}

export default Footer;
