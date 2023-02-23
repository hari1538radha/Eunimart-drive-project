import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserDatas from "./Slice/UserDetails";
const rootReducer = combineReducers({
  userDataInfo: UserDatas,
});
const Store = configureStore({
  reducer: rootReducer,
});
export default Store;
