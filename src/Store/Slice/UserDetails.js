import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Axio } from "../../Config/Config.js";

export const UserDetails = createAsyncThunk("User", async (data) => {
  return Axio.get(`/users`);
});
export const SingleUserDetails = createAsyncThunk(
  "Singleuser",
  async (data) => {
    return Axio.get(`/users/${data} `);
  }
);

const UserData = createSlice({
  name: "Users",
  initialState: {
    UserData: [],
    DataLoading: true,
    singleUserData: [],
    Loading: true,
  },
  extraReducers: {
    [UserDetails.pending]: (state, action) => {
      state.DataLoading = true;
    },
    [UserDetails.fulfilled]: (state, action) => {
      state.DataLoading = false;
      state.UserData = action.payload;
    },
    [UserDetails.rejected]: (state, action) => {
      state.DataLoading = true;
    },
    [SingleUserDetails.pending]: (state, action) => {
      state.Loading = true;
    },
    [SingleUserDetails.fulfilled]: (state, action) => {
      state.Loading = false;
      state.singleUserData = action.payload;
    },
    [SingleUserDetails.rejected]: (state, action) => {
      state.Loading = true;
    },
  },
});

const UserDatas = UserData.reducer;
export default UserDatas;
