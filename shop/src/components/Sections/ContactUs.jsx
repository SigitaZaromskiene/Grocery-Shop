import Btn from "../Buttons/Btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function ContactUs() {
  return (
    <div className="contact_modal">
      <form className="contact_modal_form">
      <FontAwesomeIcon className='icon_leave' icon={faX} />
        <div className="category_container_heading">
          <div className="category_container_border"></div>
          <h2>Contact Us</h2>
          <div className="category_container_border"></div>
        </div>
        <div className="contact_modal_form_inputs">
        <div>
          <input placeholder="Name"></input>
        </div>
        <div>
          <input placeholder="Surname"></input>
        </div>
        </div>
        <div className="contact_modal_form_inputs">
        <div>
          <input placeholder="Email"></input>
        </div>
        <div>
          <input placeholder="Number"></input>
        </div>
        </div>
        <textarea placeholder="Your Message" />
      </form>
      <Btn text="Send Message" />
     
    </div>
  );
}

export default ContactUs;
