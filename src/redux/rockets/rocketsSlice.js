import { createSlice } from '@reduxjs/toolkit';
import { fetchRockets } from './thunks';

const initialState = {
  rockets: [],
  isLoading: true,
  error: undefined,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(fetchRockets.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchRockets.fulfilled, (state, action) => {
      state.isLoading = false;
      state.rockets = action.payload;
    })
    .addCase(fetchRockets.rejected, (state, action) => {
      state.isLoading = false;
      console.log(action)
    })
  }
});

export default rocketsSlice.reducer;
