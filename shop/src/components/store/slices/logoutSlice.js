import { createSlice } from "@reduxjs/toolkit"
import axios from 'axios'
import { signInActions } from "./signInSlice";
import { uiActions } from "./uiSlice";


const URL = "http://localhost:3111/logout";

const logoutSlice = createSlice({
name:'logout',
initialState:{},
reducers:{}
})


export const logoutFromPageHandler = ()=>{
    return async (dispatch)=>{
        try {

         axios.post(URL, {}, {withCredentials: true})

           

            dispatch(signInActions.isLogged())
            dispatch(signInActions.getLoggedPersonName(''))

            dispatch(
                uiActions.notification({
                  title: "Success",
                  message: "You are logged out",
                  status: "success",
                })
              );
        }
        catch(error){
            dispatch(
                uiActions.errorNotification({
                  title: "Error",
                  message: "Cannot login",
                  status: "error",
                })
              );
        }
    }
}

export default logoutSlice
export const logoutSliceActions = logoutSlice.actions