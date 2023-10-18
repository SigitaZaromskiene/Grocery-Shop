import { NavLink } from "react-router-dom";

function Btn ({text, to}) {
    return (
        <NavLink to={to} className='btn'>{text}</NavLink>
    )
}

export default Btn