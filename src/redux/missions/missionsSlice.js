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
    return thunkAPI.rejectWithValue(`API call error ${e.message}`);
  }
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, { payload }) => ({
      ...state,
      missionItems: state.missionItems.map((mission) => {
        if (payload.id !== mission.mission_id) {
          return { ...mission };
        }
        return { ...mission, reserved: true };
      }),
    }),
    leaveMission: (state, { payload }) => ({
      ...state,
      missionItems: state.missionItems.map((mission) => {
        if (payload.id !== mission.mission_id) {
          return { ...mission };
        }
        return { ...mission, reserved: false };
      }),
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMissions.fulfilled, (state, action) => {
        state.loading = false;
        state.missionItems = action.payload.map((mission) => ({ ...mission, reserved: false }));
      })
      .addCase(getMissions.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errMsg = action.payload;
      });
  },
});

export { getMissions };

export const { joinMission, leaveMission } = missionsSlice.actions;

export default missionsSlice.reducer;
