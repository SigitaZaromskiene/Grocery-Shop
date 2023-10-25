import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../Data/Groceries";
import { useSelector } from "react-redux";





const productsSlice = createSlice({
name:'products',
initialState: {products: products},
reducers:{
    addToCart(state, action){
    const newItem = action.payload;
      const existingItem = state.items.find((i) => i.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    }

}


})




export const productActions = productsSlice.actions
export default productsSlice