import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../slice/userSlice";
// import userAccountReducer from "../slice/userAccountSlice";
// import userAccountReducer from "../slice/userAccountSlice";
import numberReducer from "../features/numberSlice";
import emailVerificationReducer from "../features/emailVerificationSlice";
export const store = configureStore({
	reducer: {
		numberStore: numberReducer,
		emailVerificationStore: emailVerificationReducer,
		user: userReducer
		// your store should start form here
	}
});
