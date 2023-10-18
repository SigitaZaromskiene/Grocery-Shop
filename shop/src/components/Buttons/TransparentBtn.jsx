import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function TransparentBtn ({text, to}){

    return (
        <NavLink to ={to} className='transparent_btn'>
        <p>{text}</p>
        <FontAwesomeIcon icon={faArrowRight} />
        </NavLink>
    )
}

export default TransparentBtn