import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { uiActions } from "./uiSlice";

const URL = "http://localhost:3111/login";

const signInSlice = createSlice({
  name: "signIn",
  initialState: { isLogged: null, name: "", psw: "", loggedName: "" },
  reducers: {
    isLogged(state) {
      state.isLogged = !state.isLogged;
    },
    setName(state, action) {
      state.name = action.payload;
    },

    setPsw(state, action) {
      state.psw = action.payload;
    },
    setLoggedName(state, action) {
      state.loggedName = state.name;
    },
  },
});

export const sendSignInData = (name, psw) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await axios.post(
        URL,
        { name, psw },
        { withCredentials: true }
      );

      if (response.status !== 200) {
        throw new Error("Cannot login");
      }
    };
    try {
      await sendRequest();

      dispatch(
        uiActions.errorNotification({
          title: "Success",
          message: "Successful logged in",
          status: "success",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.errorNotification({
          title: "Error",
          message: "Cannot loggin",
          status: "error",
        })
      );
    }
  };
};

export const getSignInData = (name, psw) => {
  return async (dispatch) => {
    const sendRequest = async () => {
     
        const response = await axios.get(URL, { withCredentials: true });

        console.log(response);

        if (response.data.status === "ok") {
          dispatch(signInActions.isLogged());
          dispatch(signInActions.setName(""));
          dispatch(signInActions.setPsw(""));
          dispatch(signInActions.setLoggedName(name));
        }
    }
      
    

    try {
      await sendRequest();

      dispatch(
        uiActions.errorNotification({
          title: "Success",
          message: "Successful logged in",
          status: "success",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.errorNotification({
          title: "Error",
          message: "Cannot login",
          status: "error",
        })
      );
    
}
  };
};

export const sendAndGetData = (name, psw) => {
  return async (dispatch) => {
    try {
      // Dispatch the POST action to send data
      await dispatch(sendSignInData(name, psw));

      // Dispatch the GET action to fetch data
      await dispatch(getSignInData(name, psw));
    } catch (error) {
      dispatch(
        uiActions.errorNotification({
          title: "Error",
          message: "Something is wrong",
          status: "error",
        })
      );
    }
  };
};

export default signInSlice;
export const signInActions = signInSlice.actions;
