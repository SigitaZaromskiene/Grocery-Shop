import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    category: 'All',
    sortBy: 'None' 
  },
  reducers: {
    setCategory: (state, action) => {
      
      state.category = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const filterSliceActions = filterSlice.actions;
export default filterSlice;