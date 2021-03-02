import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "UserSlice",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      console.log(action.payload);
      let selectedUser = state.find((user) => user.id === action.payload.id);

      state.splice(state.indexOf(selectedUser), 1, action.payload);
    },
    removeUser: (state, action) => {
      state.splice(
        state.findIndex((user) => user.id === action.payload),
        1
      );
    },
  },
});

export const { addUser, removeUser, updateUser } = UserSlice.actions;
export const userSelector = (state) => state.users;
export default UserSlice.reducer;
