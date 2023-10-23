import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:'cartSlice',
    initialState: { cartIsVisible: false },
})

export default cartSlice