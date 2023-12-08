import Btn from "../Buttons/Btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  contactUsActions,
  sendContactUsDetails,
} from "../store/slices/contactusSlice";

import FormErrorNotification from "./FormErrorNotification";
import ContactFormSuccess from "./ContactFormSuccess";

function ContactUs() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.contactUs.formNotification);

  const formSuccessMessage = useSelector(
    (state) => state.contactUs.formSuccessMessage
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const contactUsFormHandlerCloseHandler = () => {
    dispatch(contactUsActions.setFormVisibility());
  };

  const contactMessageHandler = () => {
    if (!name || !email || !message) {
      dispatch(
        contactUsActions.formNotificationToggle({
          title: "Error",
          message: "Please fill all details",
          status: "error",
        })
      );
      return;
    }

    const pattern = /^[A-Za-z]+$/;
    if (!pattern.test(name)) {
      dispatch(
        contactUsActions.formNotificationToggle({
          status: "error",
          title: "Error",
          message: "Please use only letters in name",
        })
      );
      return;
    } else {
    
      dispatch(contactUsActions.formSendSuccessFormVisibility());
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  if (formSuccessMessage === true) {
    return <ContactFormSuccess />;
  }

  return (
    <div className="contact_modal">
      <form className="contact_modal_form">
        <NavLink to="/" onClick={contactUsFormHandlerCloseHandler}>
          <FontAwesomeIcon className="icon_leave" icon={faX} />
        </NavLink>
        <div className="category_container_heading">
          <div className="category_container_border"></div>
          <h2>Contact Us</h2>
          <div className="category_container_border"></div>
          {notification && (
            <FormErrorNotification
              title={notification.title}
              text={notification.message}
              className={notification.status}
            />
          )}
        </div>
        <div className="contact_modal_form_inputs">
          <div>
            <input
              className={notification ? "formError" : null}
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div></div>
        </div>
        <div className="contact_modal_form_inputs">
          <div>
            <input
              className={notification ? "formError" : null}
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div></div>
        </div>
        <textarea
          placeholder="Your Message"
          className={notification ? "formError" : null}
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <Btn text="Send Message" action={contactMessageHandler} />
      </form>
    </div>
  );
}

export default ContactUs;
