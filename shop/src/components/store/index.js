import { configureStore } from "@reduxjs/toolkit"
import uiSlice from "./slices/uiSlice"
import cartSlice from "./slices/cartSlice"


const store = configureStore({
    reducer:
    { cart: cartSlice.reducer, ui: uiSlice.reducer } 
})

export default store