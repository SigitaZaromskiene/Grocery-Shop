import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { contactUsActions } from "../store/slices/contactusSlice";

const ContactFormSuccess = () => {
  const dispatch = useDispatch();

  return (
    <div className="cart_container">
      <div className="cart_empty">
        <p>Thank you for contacting us</p>
        <NavLink
          className="custom_link"
          to="/"
          onClick={() => {
            dispatch(contactUsActions.setFormVisibility());
            dispatch(contactUsActions.toggleErrorNotificationVisibility());
          }}
        >
          <FontAwesomeIcon className="icon_leave" icon={faX} />
        </NavLink>
      </div>
    </div>
  );
};

export default ContactFormSuccess;
