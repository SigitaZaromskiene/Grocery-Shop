import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { uiActions } from "./uiSlice";

const URL = "http://localhost:3111/login";

const signInSlice = createSlice({
  name: "signIn",
  initialState: { isLogged: false, name: "" },
  reducers: {
    isLogged(state) {
      state.isLogged = !state.isLogged;
    },
    getLoggedPersonName(state, action) {
      state.name = action.payload;
    },
  },
});

export const sendAndGetData = (name, psw) => {
  return async (dispatch) => {
    try {
      await dispatch(sendSignInData(name, psw));
      await dispatch(getSignInData());
    } catch (error) {
      dispatch(
        uiActions.errorNotification({
          title: "Error",
          message: "Something went wrong",
          status: "error",
        })
      );
    }
  };
};

export const sendSignInData = (name, psw) => {
  return async () => {
    try {
      const response = await axios.post(
        URL,
        { name, psw },
        { withCredentials: true }
      );

      if (response.status !== 200) {
        throw new Error("Cannot login");
      }
    } catch (error) {
      throw new Error("Cannot login");
    }
  };
};

export const getSignInData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(URL, { withCredentials: true });

      if (response.data.status === "error") {
        throw new Error("Cannot SignIn");
      } else if (response.data.status === "ok") {
        dispatch(signInActions.isLogged());
        dispatch(signInActions.getLoggedPersonName(response.data.name));
        dispatch(
          uiActions.notification({
            title: "Success",
            message: "Logged in successfully",
            status: "success",
          })
        );
      }
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

export const signInActions = signInSlice.actions;
export default signInSlice;
