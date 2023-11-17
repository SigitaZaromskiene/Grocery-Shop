import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { uiActions } from "./uiSlice";

const URL = "http://localhost:3111/contactus";

const contactUsSlice = createSlice({
  name: "contactUs",
  initialState: { formNotification: null, formVisibility: false},
  reducers: {
    formNotificationToggle(state, action) {
        state.formNotification= {status: action.payload.status, title: action.payload.title, message: action.payload.message};
      },
      toggleErrorNotificationVisibility(state){
        state.formNotification=!state.formNotification
      },
      setFormVisibility(state){
        state.formVisibility=!state.formVisibility
      }
  },
});

export const sendContactUsDetails = (name, email, message) => {
  return async (dispatch) => {
    try {
      axios.post(URL, { name, email, message });

      dispatch(
        uiActions.notification({
          title: "Success",
          message: "Thank you for contacting us",
          status: "success",
        })
      )

        
    
    } catch (err) {
      dispatch(
        contactUsActions.formNotificationToggle({
          title: "Error",
          message: "Cannot send message",
          status: "error",
        })
      );
    }
  };
};

export default contactUsSlice;
export const contactUsActions = contactUsSlice.actions;
