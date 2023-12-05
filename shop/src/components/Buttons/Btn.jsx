import { NavLink } from "react-router-dom";

function Btn({ text, to, action }) {
  return (
    <NavLink to={to} onClick={action} className="btn">
      {text}
    </NavLink>
  );
}

export default Btn;
