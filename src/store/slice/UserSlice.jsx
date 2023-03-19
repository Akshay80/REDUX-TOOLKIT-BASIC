import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.splice(action.payload, 1);
    },
    removeAllUsers: (state, action) => {
      return [];
    },
  },
});

export default userSlice.reducer;
export const { addUser, deleteUser, removeAllUsers } = userSlice.actions;
