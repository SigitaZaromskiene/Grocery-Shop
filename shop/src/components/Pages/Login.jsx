import Btn from "../Buttons/Btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Login () {
 
          return (
            <div className="login_container">
              <form className="login_container_form">
              <FontAwesomeIcon className='icon_leave' icon={faX} />
                <div className="category_container_heading">
                  <div className="category_container_border"></div>
                  <h2>Login Details</h2>
                  <div className="category_container_border"></div>
                </div>
                <div className="login_container_inputs">
                <div>
                  <input className="login_container_input" placeholder="Name"></input>
                </div>
                <div>
                  <input className="login_container_input" placeholder="Password"></input>
                </div>
                </div>
                </form>
              <Btn text="Login" />
              </div>
          );
        }
        
    



export default Login