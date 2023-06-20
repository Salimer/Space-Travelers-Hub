import { createSlice } from '@reduxjs/toolkit';
import fetchRockets from './thunks';

const initialState = {
  rockets: [],
  isLoading: true,
  error: undefined,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, { payload }) => ({
      ...state,
      rockets: state.rockets.map((rocket) => {
        if (payload.id !== rocket.id) return rocket;
        return { ...rocket, reserved: true };
      }),
    }),
    cancelReserveRocket: (state, { payload }) => ({
      ...state,
      rockets: state.rockets.map((rocket) => {
        if (payload.id !== rocket.id) return rocket;
        return { ...rocket, reserved: false };
      }),
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rockets = action.payload.map((rocket) => ({ ...rocket, reserved: false }));
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reserveRocket, cancelReserveRocket } = rocketsSlice.actions;

export default rocketsSlice.reducer;
