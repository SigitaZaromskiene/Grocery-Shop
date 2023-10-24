import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { isNotificationVisible: false, isCartVisible: false, isContactFormVisible: false, isSignInFormVisible: false, isRegisterFormVisible: false },
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
      toggleNotificationVisibility(state) {
        state.isNotificationVisible = !state.isNotificationVisible;
      },
  },
});


export const uiActions = uiSlice.actions;
export default uiSlice;
