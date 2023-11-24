import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX} from "@fortawesome/free-solid-svg-icons";
import { uiActions } from "../store/slices/uiSlice";
import { useDispatch } from "react-redux";
import Nav from "./Nav";

function MobileNavigation(){

    const dispatch = useDispatch()

    return (
        <>
        <Nav/>
        <div className='cart_container'>
           <div className="cart">
           <NavLink
            className="custom_link"

             
            onClick={() => dispatch(uiActions.toggleMobileMenuVisibility())}
          >
            <FontAwesomeIcon className="icon_leave" icon={faX} />
          </NavLink>
          <ul style={{cursor: 'pointer', fontSize: '1.6rem',display: 'flex', justifyContent:'center', gap: '20px', flexDirection: 'column', alignItems:'center'}}>
            <NavLink className="custom_link" to="/" onClick={() => dispatch(uiActions.toggleMobileMenuVisibility())}>
              Home
            </NavLink>
            <NavLink className="custom_link" to="/about" onClick={() => dispatch(uiActions.toggleMobileMenuVisibility())}>
              About us
            </NavLink>
            <NavLink className="custom_link" to="/category" onClick={() => dispatch(uiActions.toggleMobileMenuVisibility())}>
              Category
            </NavLink>
            <NavLink className="custom_link" to="/shop" onClick={() => dispatch(uiActions.toggleMobileMenuVisibility())}>
              Shop
            </NavLink>
          </ul>
          </div>
     </div>
     </>
      
    )
}

export default MobileNavigation