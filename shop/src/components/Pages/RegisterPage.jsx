import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import LongBtn from "../Buttons/LongBtn";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/slices/uiSlice";
import { useState } from "react";
import {
  sendRegisterData,
  } from "../store/slices/signUpSlice";
import FormErrorNotification from "../Sections/FormErrorNotification";

function RegisterPage() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [psw, setPsw] = useState("");
  const [psw2, setPsw2] = useState("");

  const notification = useSelector((state) => state.ui.errorNotification);

  const registrationStatus = useSelector(
    (state) => state.ui.errorNotification?.status
  );

  const renderRegistrationForm = registrationStatus !== "success";

  const registerFormHandler = () => {
    dispatch(uiActions.toggleRegisterFormVisibility());
  };

  const isRegisterFormDetailsValid = () => {
    if (name.length < 2) {
      dispatch(
        uiActions.errorNotification(
          {
            status: "error",
            title: "Error",
            message: "Name is too short",
          },
          setName(""),
          setPsw(""),
          setPsw2("")
        )
      );

      return true;
    }

    const pattern = /^[A-Za-z]+$/;
    if (!pattern.test(name)) {
      dispatch(
        uiActions.errorNotification(
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
        uiActions.errorNotification(
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
        uiActions.errorNotification(
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
  };

  const signUpHandler = () => {
    if (!isRegisterFormDetailsValid()) {
      dispatch(
        sendRegisterData(name, psw),
        dispatch(
          uiActions.notification({
            title: "Success",
            message: "Successful registered",
            status: "success",
          })
        ),

        dispatch(
          uiActions.errorNotification({
            title: "Success",
            message: "Successful registered",
            status: "success",
          })
        ),

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
        {registrationStatus === "success" ? (
          <div className="success-message">
            <p>Registration successful! You can now sign in.</p>
            <LongBtn
              to="/login"
              text="Go to Sign In"
              action={() =>
                dispatch(
                  uiActions.errorNotification({
                    title: "",
                    message: "",
                    status: "",
                  })
                )
              }
            ></LongBtn>
          </div>
        ) : (
          <div className="login_container_inputs">
            {notification ? (
              <FormErrorNotification
                title={notification.title}
                text={notification.message}
                className={notification.status}
              />
            ) : null}
            <div>
              <input
                className={
                  notification?.status === "error"
                    ? "login_container_input formError"
                    : "login_container_input"
                }
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
              ></input>
            </div>
            <div>
              <input
                className={
                  notification?.status === "error"
                    ? "login_container_input formError"
                    : "login_container_input"
                }
                placeholder="Password"
                value={psw}
                onChange={(e) => setPsw(e.target.value)}
                type="number"
              ></input>
            </div>
            <div>
              <input
                className={
                  notification?.status === "error"
                    ? "login_container_input formError"
                    : "login_container_input"
                }
                placeholder="Repeat Password"
                onChange={(e) => setPsw2(e.target.value)}
                type="number"
                value={psw2}
              ></input>
            </div>
          </div>
        )}
        {renderRegistrationForm && (
          <>
            <LongBtn text="Sign Up" action={signUpHandler} />
            <div className="login_container_input_register">
              <p>Already have an account?</p>
              <NavLink
                className="login_container_input_register_now"
                to="/login"
              >
                SIGN IN NOW
              </NavLink>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default RegisterPage;
