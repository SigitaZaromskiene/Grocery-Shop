import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { uiActions } from "./uiSlice";

const URL = "http://localhost:3111/contactus";

const contactUsSlice = createSlice({
  name: "contactUs",
  initialState: { formNotification: null, formVisibility: null, formSuccessMessage: false },
  reducers: {
    formNotificationToggle(state, action) {
      state.formNotification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    toggleErrorNotificationVisibility(state) {
      state.formNotification = !state.formNotification;
    },
    setFormVisibility(state) {
      state.formVisibility = !state.formVisibility;
    },
    formSendSuccessFormVisibility(state) {
      state.formSuccessMessage = !state.formSuccessMessage;
    },
  },
});

export const sendContactUsDetails = (name, email, message) => {
  return async (dispatch) => {
    try {
      axios.post(URL, { name, email, message });

  
    } catch (err) {
      dispatch(
        uiActions.notification({
          title: "Error",
          message: "Cannot contact us",
          status: "error",
        })
      );
    }
  };
};

export default contactUsSlice;
export const contactUsActions = contactUsSlice.actions;
