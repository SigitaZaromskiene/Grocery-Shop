import { NavLink } from "react-router-dom";

function Btn ({text}) {
    return (
        <NavLink to='shop' className='btn'>{text}</NavLink>
    )
}

export default Btn