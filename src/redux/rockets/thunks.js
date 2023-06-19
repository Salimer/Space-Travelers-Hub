import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

// Get rockets
const rocketsURL = 'https://api.spacexdata.com/v3/rockets';
export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async(thunkAPI) => {
    try {
        const repsonse = await axios(rocketsURL);
        return Response.data;
    } catch(error) {
        console.log(error);
        return thunkAPI.rejectWithValue('something went wrong!')
    }
})
