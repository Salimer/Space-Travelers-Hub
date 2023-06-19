import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Get rockets
const rocketsURL = 'https://api.spacexdata.com/v3/rockets';
const fetchRockets = createAsyncThunk('rockets/fetchRockets', async (thunkAPI) => {
  try {
    const response = await axios(rocketsURL);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong!');
  }
});

export default fetchRockets;
