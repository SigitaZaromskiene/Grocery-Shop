import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import LongBtn from "../Buttons/LongBtn";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/slices/uiSlice";
import { useState } from "react";
import { sendRegisterData } from "../store/slices/signUpSlice";

function RegisterPage() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [psw, setPsw] = useState("");
  const [psw2, setPsw2] = useState("");

  const noError = useSelector((state) => state.ui.notification);

  const registerFormHandler = () => {
    dispatch(uiActions.toggleRegisterFormVisibility());
  };

  const isRegisterFormDetailsValid = () => {
    if (name.length < 2) {
      dispatch(
        uiActions.notification({
          status: "error",
          title: "Error",
          message: "Name is too short",
        })
      );
      return true;
    }

    const pattern = /^[A-Za-z]+$/;
    if (!pattern.test(name)) {
      dispatch(
        uiActions.notification(
          {
            status: "error",
            title: "Error",
            message: "Please use only letters",
          },
          setName(""),
          setPsw(""),
          setPsw2("")
        )
      );
      return true;
    }

    if (!name || !psw || !psw2) {
      dispatch(
        uiActions.notification(
          {
            status: "error",
            title: "Error",
            message: "Please fill all details",
          },
          setName(""),
          setPsw(""),
          setPsw2("")
        )
      );
      return true;
    }

    if (psw !== psw2) {
      dispatch(
        uiActions.notification(
          {
            status: "error",
            title: "Error",
            message: "Passwords dissmatch",
          },
          setName(""),
          setPsw(""),
          setPsw2("")
        )
      );
      return true;
    }
    return false;
  };

  const signUpHandler = () => {
    if (isRegisterFormDetailsValid()) {
      return false;
    } else {
      dispatch(
        sendRegisterData(name, psw),
        setName(""),
        setPsw(""),
        setPsw2("")
      );
    }
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
            <input
              className="login_container_input"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            ></input>
          </div>
          <div>
            <input
              className="login_container_input"
              placeholder="Password"
              value={psw}
              onChange={(e) => setPsw(e.target.value)}
              type="number"
            ></input>
          </div>
          <div>
            <input
              className="login_container_input"
              placeholder="Repeat Password"
              onChange={(e) => setPsw2(e.target.value)}
              type="number"
              value={psw2}
            ></input>
          </div>
        </div>
        <LongBtn
          text="Sign Up"
          action={signUpHandler}
          to={!noError ? "/register" : "/login"}
        />
        <div className="login_container_input_register">
          <p>Already have an account?</p>
          <NavLink
            className="login_container_input_register_now"
            to={"/register"}
          >
            SIGN IN NOW
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
