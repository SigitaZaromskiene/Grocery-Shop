import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutFromPageHandler } from "../store/slices/logoutSlice";

function Logout() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutFromPageHandler());
  };

  return (
    <NavLink className="custom_link" to="/" onClick={logoutHandler}>
      Logout
    </NavLink>
  );
}

export default Logout;
