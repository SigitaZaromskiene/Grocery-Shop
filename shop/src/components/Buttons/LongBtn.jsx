import { NavLink } from "react-router-dom";

function LongBtn ({text, to}) {
    return (
        <NavLink to={to} className='btn + long_btn'>{text}</NavLink>
    )
}

export default LongBtn