const {createSlice} = require('@reduxjs/toolkit');

const initialState = {
  passportData: [],
};

const NewUserSlice = createSlice({
  name: 'insurance',
  initialState,
  reducers: {
    AddNewUserAddress: (state, action) => {
      const existingUserIndex = state.passportData.findIndex(
        user => user.userId === action.payload.userId
      );

      if (existingUserIndex !== -1) {
        // Update the existing entry
        state.passportData[existingUserIndex] = {
          ...state.passportData[existingUserIndex],
          ...action.payload,
        };
      } else {
        // If userId does not exist, push the new entry
        state.passportData.push(action.payload);
      }
    },
  },
});

export const {AddNewUserAddress} = NewUserSlice.actions;

export default NewUserSlice.reducer;
