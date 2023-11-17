import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import LongBtn from "../Buttons/LongBtn";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/slices/uiSlice";
import { useState } from "react";
import FormErrorNotification from "../Sections/FormErrorNotification";
import { sendAndGetData } from "../store/slices/signInSlice";
import { useSelector } from "react-redux";
import PersonalGreeting from "../Sections/PersonalGreeting";

function LoginPage() {
  const dispatch = useDispatch();

  const notification = useSelector((state) => state.ui.errorNotification);
  const isLogged = useSelector((state) => state.signUp.isLogged);

  const registrationStatus = useSelector(
    (state) => state.ui.errorNotification?.status
  );

  const renderRegistrationForm = registrationStatus !== "success";

  console.log(notification);

  const [name, setName] = useState("");
  const [psw, setPsw] = useState("");

  const signInFormHandler = () => {
    dispatch(uiActions.toggleSignInFormVisibility());
  };

  const isRegisterFormDetailsValid = () => {
    if (!name || !psw) {
      dispatch(
        uiActions.errorNotification(
          {
            status: "error",
            title: "Error",
            message: "Please fill all details",
          },
          setName(""),
          setPsw("")
        )
      );
      return true;
    }
    if (name.length < 2) {
      dispatch(
        uiActions.errorNotification({
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
        uiActions.errorNotification(
          {
            status: "error",
            title: "Error",
            message: "Please use only letters",
          },
          setName(""),
          setPsw("")
        )
      );
      return true;
    }
  };

  const signInHandler = () => {
    if (!isRegisterFormDetailsValid()) {
      dispatch(sendAndGetData(name, psw));

      dispatch(
        uiActions.errorNotification({
          title: "Success",
          message: "Successful logged in",
          status: "success",
        })
      );

      dispatch(uiActions.toggleSignInFormVisibility());
      setName("");
      setPsw("");
    }
  };

  return (
    <div className="login_container">
      <form className="login_container_form">
        <div className="login_container_heading">
          {!isLogged ? (
            <>
              <h2>Sign In</h2>
              <NavLink to="/" onClick={signInFormHandler}>
                <FontAwesomeIcon className="icon_leave" icon={faX} />
              </NavLink>
            </>
          ) : (
            <PersonalGreeting></PersonalGreeting>
          )}
        </div>

        {isLogged  ? (
          <div className="success-message">
            <p>You are logged in</p>
            <LongBtn to="/" text="Home page"></LongBtn>
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

            <div className="login_container_inputs">
              <div>
                <input
                  className="login_container_input"
                  placeholder="Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>

              <input
                className="login_container_input"
                placeholder="Password"
                type="number"
                value={psw}
                onChange={(e) => setPsw(e.target.value)}
              ></input>
            </div>
          </div>
        )}
        {renderRegistrationForm && (
          <>
            <LongBtn text="Sign In" action={signInHandler} to={!isLogged ? "/login": "/" }/>
            <div className="login_container_input_register">
              <p>Do not have an account?</p>
              <NavLink
                className="login_container_input_register_now"
                to="/register"
              >
                SIGN UP NOW
              </NavLink>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default LoginPage;
