import Btn from "../Buttons/Btn"
import { useDispatch, useSelector } from "react-redux"
import cartSlice, { cartActions } from "../store/slices/cartSlice";
import { sendCartData } from "../store/slices/cartSlice";

function AddToCartBtn ({p}){

    console.log(p)


  const cartData = useSelector(state=>state.cart.cart)


  const dispatch = useDispatch();

 

 

  const addToCartHAndler =(p)=>{
    dispatch(cartActions.addItemToCart({title:p.title, price: p.price, id:p.id, quantity:p.quantity}))
    dispatch(sendCartData(cartData))
  }

    return (
        <Btn
        to="/cart"
        text="Add to cart"
        action={addToCartHAndler}
      />
    )
}

export default AddToCartBtn