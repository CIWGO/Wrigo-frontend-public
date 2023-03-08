import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../slice/userSlice";
// import userAccountReducer from "../slice/userAccountSlice";

export const store = configureStore({
	reducer: {
		user: userReducer
		// userAccount: userAccountReducer
		// your store goes here
	}
});
