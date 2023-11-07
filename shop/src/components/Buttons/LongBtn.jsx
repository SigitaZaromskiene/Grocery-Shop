import { NavLink } from "react-router-dom";

function LongBtn ({text, to, action}) {
    return (
        <NavLink to={to} onClick={action} className='btn + long_btn'>{text} </NavLink>
    )
}

export default LongBtn