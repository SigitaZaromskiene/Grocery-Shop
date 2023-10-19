import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import LongBtn from "../Buttons/LongBtn";
import { NavLink } from "react-router-dom";

function Register() {
  return (
    <div className="login_container">
      <form className="login_container_form">
        <FontAwesomeIcon className="icon_leave" icon={faX} />
        <div className="login_container_heading">
          <h2>Sign Up</h2>
        </div>
        <div className="login_container_inputs">
          <div>
            <input className="login_container_input" placeholder="Name"></input>
          </div>
          <div>
            <input
              className="login_container_input"
              placeholder="Password"
            ></input>
          </div>
          <div>
            <input
              className="login_container_input"
              placeholder="Repeat Password"
            ></input>
          </div>
        </div>
        <LongBtn text="Sign Up" />
        <div className="login_container_input_register">
          <p>Already have an account?</p>
          <NavLink
            className="login_container_input_register_now"
            to={"/login"}
          >
            SIGN IN NOW
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default Register
