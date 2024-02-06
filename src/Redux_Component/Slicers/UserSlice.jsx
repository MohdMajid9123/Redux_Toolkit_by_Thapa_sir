import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "slice",
  initialState: [],
  reducers: {
    addUser(state, action) {
      // console.log(action.payload);
      state.push(action.payload);
    },
    deleteOneUser(state, action) {
      //   console.log("hi i am delete", action.payload);
      state.splice(action.payload, 1);
    },
    deleteAllUser(state, action) {
      //   console.log("hi all delete");
      return [];
    },
  },
});

export const { addUser, deleteAllUser, deleteOneUser } = UserSlice.actions;
export default UserSlice.reducer;
