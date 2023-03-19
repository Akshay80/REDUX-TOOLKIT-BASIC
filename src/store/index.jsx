import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/UserSlice";

// OUR ACTUAL STORE CREATED BY US
const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

export default store;
