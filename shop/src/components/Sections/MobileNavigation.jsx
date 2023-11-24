import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX} from "@fortawesome/free-solid-svg-icons";
import { uiActions } from "../store/slices/uiSlice";
import { useDispatch } from "react-redux";

function MobileNavigation(){

    const dispatch = useDispatch()

    return (
        <div className='cart_container'>
           <div className="cart">
           <NavLink
            className="custom_link"
            to="/"
            onClick={() => dispatch(uiActions.toggleCartVisibility())}
          >
            <FontAwesomeIcon className="icon_leave" icon={faX} />
          </NavLink>
          <ul style={{cursor: 'pointer', fontSize: '1.6rem',display: 'flex', justifyContent:'center', gap: '20px', flexDirection: 'column', alignItems:'center'}}>
            <NavLink className="custom_link" to="/">
              Home
            </NavLink>
            <NavLink className="custom_link" to="/about">
              About us
            </NavLink>
            <NavLink className="custom_link" to="/category">
              Category
            </NavLink>
            <NavLink className="custom_link" to="/shop">
              Shop
            </NavLink>
          </ul>
          </div>
     </div>
      
    )
}

export default MobileNavigation