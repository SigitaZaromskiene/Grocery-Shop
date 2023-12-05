import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    mobileMenuVisible: false,
    errorNotification: null,
    notification: null,
    isCartVisible: false,
    isContactFormVisible: false,
    isSignInFormVisible: false,
    isRegisterFormVisible: false,
  },

  reducers: {
    toggleCartVisibility(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    toggleSignInFormVisibility(state) {
      state.isSignInFormVisible = !state.isSignInFormVisible;
    },
    toggleRegisterFormVisibility(state) {
      state.isRegisterFormVisible = !state.isRegisterFormVisible;
    },
    notification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    toggleNotificationVisibility(state) {
      state.notification = !state.notification;
    },
    errorNotification(state, action) {
      state.errorNotification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    toggleErrorNotificationVisibility(state) {
      state.errorNotification = !state.errorNotification;
    },
    toggleMobileMenuVisibility(state) {
      state.mobileMenuVisible = !state.mobileMenuVisible;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
