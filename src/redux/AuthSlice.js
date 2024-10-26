import WebUrls from '../api/WebUrls'; // Ensure correct path to WebUrls
import {API} from '../api'; // Assuming you have an API utility to make requests
const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');

const initialState = {
  data: null,
  isloading: false,
  isSuccess: false,
  isError: false,
};

export const loginVerify = createAsyncThunk(
  'loginVerify',
  async (params, thunkApi) => {
    console.log('params', WebUrls.url.login); // Ensure this prints the correct login URL
    try {
      const response = await API.post(WebUrls.url.login, params);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response ? error.response.data : error.message,
      );
    }
  },
);

const AuthSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    resetUserState: state => initialState,
  },
  extraReducers: builder => {
    builder.addCase(loginVerify.pending, state => {
      state.isloading = true;
    });
    builder.addCase(loginVerify.fulfilled, (state, action) => {
      state.isloading = false;
      state.isError = false;
      if (action.payload.success === 1) {
        state.isSuccess = true;
      } else {
        state.isSuccess = false;
      }
      state.data = action.payload;
    });
    builder.addCase(loginVerify.rejected, (state, action) => {
      state.isloading = false;
      state.isError = true;
      state.isSuccess = false;
      state.data = action.payload || action.error.message;
    });
  },
});

export const {resetUserState} = AuthSlice.actions;

export default AuthSlice.reducer;
