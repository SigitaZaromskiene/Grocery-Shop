import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { uiActions } from "./uiSlice";

const URL = "http://localhost:3111/about";

const newsLetterSlice = createSlice({
  name: "newsLetter",
  initialState: { newsLetterSubscriberEmail: "" },
  reducers: {
    // subscribeNewsLetter(state, action){
    //     action.action.payload=state.newsLetterSubscriberEmail
    // }
  },

  
});

export const sendNewsLetterSubsciberDetails = (email) => {
  return async (dispatch) => {
    try {
      axios.post(URL, { email });

      dispatch(
        uiActions.notification({
          title: "Success",
          message: "Thank you for subscribing",
          status: "success",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.notification({
          title: "Error",
          message: "Cannot subscirbe",
          status: "error",
        })
      );
    }
  };
};

export default newsLetterSlice;
export const newsLetterSlicections = newsLetterSlice.actions;
