import { NavLink } from "react-router-dom"

function Logout (){

    return (
        <NavLink className="custom_link" to="/">
        Logout
      </NavLink>
    )
}

export default Logout