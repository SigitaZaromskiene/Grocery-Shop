import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./uiSlice";

const URL = "http://localhost:3111/register";

const signUpSlice = createSlice({
  name: "signUp",
  initialState: { name: "", psw: "", psw2: "" },
  reducers: {
    getSignUpName(state, action) {
      const name = action.payload;
      state.name = name;
    },

    getSignUpPass(state, action) {
      const psw = action.payload;
      state.psw = psw;
    },
  },
});

export const sendRegisterData = (name, psw) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            name,
            psw,
          },
          { withCredentials: true }
        ),
      });

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };

    try {
      await sendRequest();

      dispatch(uiActions.toggleRegisterFormVisibility());
    } catch (error) {
      dispatch(
        uiActions.notification({
          title: "Error",
          message: "Cannot register",
          status: "error",
        })
      );
    }
  };
};

export const signUpSliceActions = signUpSlice.actions;
export default signUpSlice;
