import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faTrash } from "@fortawesome/free-solid-svg-icons";
import Btn from "../Buttons/Btn";

const CartItem = ({title, price, total, quantity}) => {
    
  
    return (
        <div className='cart_items_container'>
        <ul className='cart_items'>
      <li>
        <header>
          <h3>{title}</h3>
          <div className='price'>
            {price}<span>&euro;</span>
           
          </div>
        </header>
        <div className='cart_items_details'>
            <div className='cart_items_details_left'>
          <div className='cart_items_quantity'>
          <span>x {quantity}</span>
          </div>
          <div className='cart_items_actions'>
            <button>-</button>
            <button>+</button>
          </div>
          </div>
          <div className='cart_items_delete'>
          <FontAwesomeIcon className='icon_leave' icon={faX} />
          <FontAwesomeIcon className='icon_delete'icon={faTrash} />
          </div>
        </div>
      </li>
      </ul>
      <div className='cart_items_total'>
        <p className='cart_items_total_paragraph'> Total</p>
        <p className='cart_items_total_price'>{total}<span>&euro;</span></p>
      </div>
      <Btn text='Order'/>
      </div>
    );
  };
  
  export default CartItem;