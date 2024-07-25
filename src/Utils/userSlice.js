import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    adduser: (state, action) => {
      return action.payload;
    },
    removeuser: () => {
      return null;
    },
  },
});
export const {adduser,removeuser}=user.actions
export default user.reducer;
