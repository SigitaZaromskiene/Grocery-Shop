import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:'cartSlice',
    initialState: { items:[], totalQuantity: 0, totalPrice:0 },
    reducers: {
        addItemToCart(state, action){
            const newItem = action.payload;
            const existingItem = state.items.find(i=>i.id ===newItem.id)
            if(!existingItem){
                state.items.push({id:newItem.id, price: newItem.price, quantity: 1, totalPrice: newItem.price, title: newItem.title})
            }
             else {
                existingItem.quantity++
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
             }
        },
        removeItemFromCart(state, action){}
    }
})

export default cartSlice