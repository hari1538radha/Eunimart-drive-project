import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Axio } from "../../Config/Config.js";

export const UserDetails = createAsyncThunk("login", async (data) => {
 
  return Axio.get(`/users`);
});

const UserData = createSlice({
  name: "Users",
  initialState: {
    UserData: [],
    DataLoading: true,
  },
  extraReducers: {
    [UserDetails.pending]: (state, action) => {
      state.DataLoading = true;
    },
    [UserDetails.fulfilled]: (state, action) => {
      state.LoginLoading = false;
      state.UserData = action.payload;
    },
    [UserDetails.rejected]: (state, action) => {
      state.DataLoading = true;
    },
  },
});

const UserDatas = UserData.reducer;
export default UserDatas;
