import Btn from "../Buttons/Btn";

function CartTotal (){
    return (
        <div className="cart_total_container">
             <div className="cart_items_total">
    <p className="cart_items_total_paragraph"> Total</p>
    <p className="cart_items_total_price">
    33euro
      <span>&euro;</span>
    </p>
  </div>
  <Btn text="Order" />
        </div>
    )
    
}

export default CartTotal