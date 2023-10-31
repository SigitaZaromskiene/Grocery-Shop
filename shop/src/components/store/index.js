import { configureStore } from "@reduxjs/toolkit"
import uiSlice from "./slices/uiSlice"
import cartSlice from "./slices/cartSlice"
import filterSlice from "./slices/filterSlice"



 

const store = configureStore({
    reducer:
    { cart: cartSlice.reducer, ui: uiSlice.reducer, filter:filterSlice.reducer } 
})

export default store



