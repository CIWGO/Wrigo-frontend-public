import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../slice/userSlice";
// import userAccountReducer from "../slice/userAccountSlice";
// import userAccountReducer from "../slice/userAccountSlice";
import numberReducer from "../features/numberSlice";
import { emailVerificationReducer } from "../slice/emailVerificationSlice";
import { topicReducer } from "../slice/topicDataSlice";
export const store = configureStore({
	reducer: {
		numberStore: numberReducer,
		emailVerificationStore: emailVerificationReducer,
		user: userReducer,
		topic: topicReducer
		// your store should start form here
	}
});
