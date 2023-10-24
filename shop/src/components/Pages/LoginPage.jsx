import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import LongBtn from "../Buttons/LongBtn";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/slices/uiSlice";

function LoginPage() {
  const dispatch = useDispatch();

  const signInFormHandler = () => {
    dispatch(uiActions.toggleSignInFormVisibility());
  };
  return (
    <div className="login_container">
      <form className="login_container_form">
        <div className="login_container_heading">
          <h2>Sign In</h2>
          <NavLink to="/" onClick={signInFormHandler}>
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
        </div>
        <LongBtn text="Sign In" />
        <div className="login_container_input_register">
          <p>Don't have an account?</p>
          <NavLink
            className="login_container_input_register_now"
            to={"/register"}
          >
            SIGN UP NOW
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
