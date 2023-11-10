import Btn from "../Buttons/Btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { uiActions } from "../store/slices/uiSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

function ContactUs() {
  const dispatch = useDispatch();

  const [name, setName] = useState('')
  const [surname, setSurName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const contactUsFormHandlerCloseHandler = () => {
    dispatch(uiActions.toggleContactFormVisibility());
  };


  const contactMessageHandler = ()=>{

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
        </div>
        <div className="contact_modal_form_inputs">
          <div>
            <input type='text' value={name} placeholder="Name" onClick={(e)=>setName(e.target.value)}></input>
          </div>
          <div>
         
          </div>
        </div>
        <div className="contact_modal_form_inputs">
          <div>
          <input type='email' value={email} placeholder="Email" onClick={(e)=>setEmail(e.target.value)}></input>
          </div>
          <div>
         
          </div>
        </div>
        <textarea placeholder="Your Message" />
        <Btn text="Send Message" to='/' action={contactMessageHandler}/>
      </form>
    </div>
  );
}

export default ContactUs;
