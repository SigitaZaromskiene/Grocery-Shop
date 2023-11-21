import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    category: 'All',
    sortBy: 'Default' 
  },
  reducers: {
    setCategory (state, action) {
      const category = action.payload
      state.category = category;
    },
    setSortBy (state, action){
      const sortBy = action.payload
      state.sortBy = sortBy;
    },
  },
});

export const filterSliceActions = filterSlice.actions;
export default filterSlice;