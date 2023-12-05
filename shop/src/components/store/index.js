import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./slices/uiSlice";
import cartSlice from "./slices/cartSlice";
import filterSlice from "./slices/filterSlice";
import  signUpSlice from "./slices/signUpSlice";
import signInSlice from "./slices/signInSlice";
import contactUsSlice from "./slices/contactusSlice";
import newsLetterSlice from "./slices/newsLetterSlice";
import logoutSlice from "./slices/logoutSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
    filter: filterSlice.reducer,
    signUp: signUpSlice.reducer,
    signIn: signInSlice.reducer,
    contactUs: contactUsSlice.reducer,
    newsLetter: newsLetterSlice.reducer,
    logout: logoutSlice.reducer,
  },
});

export default store;
