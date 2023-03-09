import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../slice/userSlice";
// import userAccountReducer from "../slice/userAccountSlice";
// import userAccountReducer from "../slice/userAccountSlice";
import numberReducer from "../features/numberSlice";

export const store = configureStore({
	reducer: {
		user: userReducer,
		numberStore: numberReducer
		// your store should start form here
	}
});
