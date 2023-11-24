import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/slices/uiSlice";

function MobileFriendlyMenu (){

    const dispatch = useDispatch()

    const mobileMenuHandler = ()=>{
        dispatch(uiActions.toggleMobileMenuVisibility())
    }

    return (
<div className="nav_container_right_burger"><FontAwesomeIcon icon={faBars} onClick={mobileMenuHandler}/></div>
    )
}

export default MobileFriendlyMenu