import WebUrls from '../api/WebUrls'; // Ensure correct path to WebUrls
import {API} from '../api'; // Assuming you have an API utility to make requests
const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');

const initialState = {
  data: null,
  isloading: false,
  isSuccess: false,
  isError: false,
};

export const fetchProfile = createAsyncThunk(
  'fetchProfile',
  async (params, thunkApi) => {
    console.log('params', WebUrls.url.fetch_profile); // Ensure this prints the correct login URL
    try {
      const response = await API.post(WebUrls.url.fetch_profile, params);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response ? error.response.data : error.message,
      );
    }
  },
);

const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProfile.pending, state => {
      state.isloading = true;
    });
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.isloading = false;
      state.isError = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(fetchProfile.rejected, (state, action) => {
      state.isloading = false;
      state.isError = true;
      state.isSuccess = false;
      state.data = action.payload || action.error.message;
    });
  },
});

export default ProfileSlice.reducer;
