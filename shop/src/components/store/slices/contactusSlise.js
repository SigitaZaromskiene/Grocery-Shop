import { createSlice } from "@reduxjs/toolkit";

const contactUsSlice = createSlice({

    name:'contactUs',
    initialState: {name:'',  email: '', message:''},
    reducers:{
        setName(state, payload){},
        setSurName(state, payload){}
    }
})

export default contactUsSlice
export const contactUsActions = contactUsSlice.actions