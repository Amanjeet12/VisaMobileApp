import WebUrls from '../api/WebUrls'; // Ensure correct path to WebUrls
import {API} from '../api'; // Assuming you have an API utility to make requests
const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');

const initialState = {
  data: null,
  isloading: false,
  isSuccess: false,
  isError: false,
  userSelectedData: null
};

export const fetchVisa = createAsyncThunk(
  'fetchVisa',
  async (params, thunkApi) => {
    console.log('params', WebUrls.url.fetch_visa); // Ensure this prints the correct login URL
    try {
      const response = await API.post(WebUrls.url.fetch_visa, params);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response ? error.response.data : error.message,
      );
    }
  },
);

const VisaSlice = createSlice({
  name: 'fetchVisa',
  initialState,
  reducers: {
    UserSelectedVisaState: (state, action) => {
      state.userSelectedData = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchVisa.pending, state => {
      state.isloading = true;
    });
    builder.addCase(fetchVisa.fulfilled, (state, action) => {
      state.isloading = false;
      state.isError = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(fetchVisa.rejected, (state, action) => {
      state.isloading = false;
      state.isError = true;
      state.isSuccess = false;
      state.data = action.payload || action.error.message;
    });
  },
});

export const {UserSelectedVisaState} = VisaSlice.actions;


export default VisaSlice.reducer;
