import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../Slicers/UserSlice";

const store = configureStore({
  reducer: {
    users: UserSlice,
  },
});

export default store;
