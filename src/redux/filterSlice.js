import { createSlice } from '@reduxjs/toolkit';
import { filterContact } from './operations';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, action) => {
      state = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(filterContact.fulfilled, (state, action) => {
      
        state = state.filter(contact => contact.id !== action.payload);
      });
  },
});

export const filterReducer = filterSlice.reducer;

export const { setFilter } = filterSlice.actions;

