import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./slices/uiSlice";
import cartSlice from "./slices/cartSlice";
import filterSlice from "./slices/filterSlice";
import { signUpSliceActions } from "./slices/signUpSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
    filter: filterSlice.reducer,
    signUp: signUpSliceActions.reducer
  },
});

export default store;
