import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl, { MISSIONS } from '../api';

const initialState = {
  missionItems: [],
  loading: true,
  error: false,
  errMsg: '',
};

const getMissions = createAsyncThunk('spacex/getMissions', async (thunkAPI) => {
  try {
    const resp = await axios.get(`${baseUrl}/${MISSIONS}`);
    return resp.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(`API call error ${e.code}`);
  }
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMissions.fulfilled, (state, action) => {
        state.loading = false;
        state.missionItems = action.payload;
      })
      .addCase(getMissions.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errMsg = action.payload;
      });
  },
});

export { getMissions };

export default missionsSlice.reducer;
