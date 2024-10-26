import WebUrls from '../api/WebUrls'; // Ensure correct path to WebUrls
import {API} from '../api'; // Assuming you have an API utility to make requests
const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');

const initialState = {
  data: null,
  isloading: false,
  isSuccess: false,
  isError: false,
  userSelectedData: null,
};

export const signUp = createAsyncThunk('signUp', async (params, thunkApi) => {
  console.log('params', WebUrls.url.fetch_visa);
  try {
    const response = await API.post(WebUrls.url.check_email, params);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(
      error.response ? error.response.data : error.message,
    );
  }
});

export const completeSignUp = createAsyncThunk('completeSignUp', async (params, thunkApi) => {
  console.log('params', WebUrls.url.complete_signUp);
  try {
    const response = await API.post(WebUrls.url.complete_signUp, params);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(
      error.response ? error.response.data : error.message,
    );
  }
});

const SignUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signUp.pending, state => {
      state.isloading = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.isloading = false;
      state.isError = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.isloading = false;
      state.isError = true;
      state.isSuccess = false;
      state.data = action.payload || action.error.message;
    });
  },
});

export default SignUpSlice.reducer;
