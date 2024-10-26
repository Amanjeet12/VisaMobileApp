import WebUrls from '../api/WebUrls'; // Ensure correct path to WebUrls
import {API} from '../api'; // Assuming you have an API utility to make requests
const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');

const initialState = {
  data: null,
  isloading: false,
  isSuccess: false,
  isError: false,
};

export const fetchInsurance = createAsyncThunk(
  'fetchInsurance',
  async (params, thunkApi) => {
    try {
      const response = await API.post(WebUrls.url.fetch_insurance, params);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response ? error.response.data : error.message,
      );
    }
  },
);

const InsuranceSlice = createSlice({
  name: 'insurance',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchInsurance.pending, state => {
      state.isloading = true;
    });
    builder.addCase(fetchInsurance.fulfilled, (state, action) => {
      state.isloading = false;
      state.isError = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(fetchInsurance.rejected, (state, action) => {
      state.isloading = false;
      state.isError = true;
      state.isSuccess = false;
      state.data = action.payload || action.error.message;
    });
  },
});

export default InsuranceSlice.reducer;
