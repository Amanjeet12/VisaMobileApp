const {createSlice} = require('@reduxjs/toolkit');

const initialState = {
  passportData: [],
};

const NewUserSlice = createSlice({
  name: 'insurance',
  initialState,
  reducers: {
    AddNewUserAddress: (state, action) => {
      state.passportData.push(action.payload); // Add new entry to the array
    },
  },
});

export const {AddNewUserAddress} = NewUserSlice.actions;

export default NewUserSlice.reducer;
