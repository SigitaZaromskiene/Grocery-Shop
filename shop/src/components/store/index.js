import { configureStore } from "@reduxjs/toolkit"
import uiSlice from "./slices/uiSlice"
import cartSlice from "./slices/cartSlice"
import productsSlice from "./slices/productSlice"


const store = configureStore({
    reducer:
    { cart: cartSlice.reducer, ui: uiSlice.reducer, products: productsSlice.reducer } 
})

export default store