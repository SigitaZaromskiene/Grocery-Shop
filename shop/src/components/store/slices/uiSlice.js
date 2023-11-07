import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {  errorNotification: null, notification: null, isCartVisible: false, isContactFormVisible: false, isSignInFormVisible: false, isRegisterFormVisible: false },

  
  reducers: {
    toggleCartVisibility(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    toggleContactFormVisibility(state) {
        state.isContactFormVisible = !state.isContactFormVisible;
      },
      toggleSignInFormVisibility(state) {
        state.isSignInFormVisible = !state.isSignInFormVisible;
      },
      toggleRegisterFormVisibility(state) {
        state.isRegisterFormVisible = !state.isRegisterFormVisible;
      },
      notification(state, action) {
        state.notification= {status: action.payload.status, title: action.payload.title, message: action.payload.message};
      },
      toggleNotificationVisibility(state){
        state.notification=!state.notification
      },
      errorNotification(state, action) {
        state.errorNotification= {status: action.payload.status, title: action.payload.title, message: action.payload.message};
      },
      toggleErrorNotificationVisibility(state){
        state.errorNotification = !state.errorNotification
      }
  },
  
});


export const uiActions = uiSlice.actions;
export default uiSlice;
