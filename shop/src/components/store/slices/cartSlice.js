import { createSlice } from "@reduxjs/toolkit"
import { uiActions } from "./uiSlice";

const cartSlice = createSlice({
    name:'cartSlice',
    initialState: { items:[], totalQuantity: 0, totalPrice:0 },
    reducers: {
        addItemToCart(state, action){
            const newItem = action.payload;
            const existingItem = state.items.find(i=>i.id ===newItem.id)
            if(!existingItem){
                state.items.push({ id:newItem.id, price: newItem.price, quantity: 1, totalPrice: newItem.price, title: newItem.title})
            }
             else {
                existingItem.quantity++
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
             }
        },
        removeItemFromCart(state, action){}
    }
})

export const sendCartData = (cartData) =>{
    return async(dispatch) => {
dispatch(uiActions.showNothification({
    status: 'pending',
    title: 'Sending', message: 'Sending cart data...'
})
)

const sendRequest = async () =>{
    const response = await fetch(URL, { method: 'PUT', body: JSON.stringify(cartData)})
   

    if(!response.ok){
        throw new Error('Sending cart data failed')
    }

}

try {
    await sendRequest()

    dispatch(uiActions.showNothification({
        status: 'success',
        title: 'Success', message: 'Cart data sucessfully sent'
    }))
}catch(error){

    dispatch(uiActions.showNothification({
        status: 'error',
        title: 'Error', message: 'Sending data failed'
    }))
}



 


    
}
    
}
export const cartActions = cartSlice.actions
export default cartSlice