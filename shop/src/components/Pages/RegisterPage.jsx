import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import LongBtn from "../Buttons/LongBtn";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/slices/uiSlice";

function RegisterPage() {
  const dispatch = useDispatch();

  const registerFormHandler = () => {
    dispatch(uiActions.toggleRegisterFormVisibility());
  };
  return (
    <div className="login_container">
      <form className="login_container_form">
        <div className="login_container_heading">
          <h2>Sign Up</h2>
          <NavLink to="/" onClick={registerFormHandler}>
            <FontAwesomeIcon className="icon_leave" icon={faX} />
          </NavLink>
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
          <NavLink className="login_container_input_register_now" to={"/login"}>
            SIGN IN NOW
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
