import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { isCartVisible: false, isContactFormVisible: false },
  reducers: {
    toggleCartVisibility(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    toggleContactFormVisibility(state) {
        state.isContactFormVisible = !state.isContactFormVisible;
      },
  },
});


export const uiActions = uiSlice.actions;
export default uiSlice;
