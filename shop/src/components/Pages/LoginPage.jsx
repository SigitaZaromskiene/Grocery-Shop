import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import LongBtn from "../Buttons/LongBtn";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/slices/uiSlice";
import { useState } from "react";
import FormErrorNotification from "../Sections/FormErrorNotification";
import {
  sendAndGetData,
} from "../store/slices/signInSlice";
import { useSelector } from "react-redux";

function LoginPage() {
  const dispatch = useDispatch();

  const notification = useSelector(state=>state.signIn.isLogged)

  console.log(notification)

  

  

  const [name, setName] = useState("");
  const [psw, setPsw] = useState("");

  const signInFormHandler = () => {
    dispatch(uiActions.toggleSignInFormVisibility());
  };

  const signInHandler = () => {

    if (!name || !psw ) {
      dispatch(
        uiActions.errorNotification(
          {
            status: "error",
            title: "Error",
            message: "Please fill all details",
          },
          setName(""),
          setPsw(""),
       
        )
      )}
    dispatch(sendAndGetData(name, psw));

    dispatch(uiActions.toggleSignInFormVisibility())
  

    
    
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
       
        
            {notification === false? (
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
        <LongBtn text="Sign In" action={signInHandler} to={notification === true?'/' : '/login'} />
        <div className="login_container_input_register">
          <p>Do not have an account?</p>
          <NavLink className="login_container_input_register_now" to="/register">
            REGISTER NOW
          </NavLink>
        </div>
       
       
        

        
      </form>
      
    </div>
        )
}

export default LoginPage;
