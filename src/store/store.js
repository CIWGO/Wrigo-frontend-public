import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "../features/numberSlice";
import emailVerificationReducer from "../features/emailVerificationSlice";
export const store = configureStore({
	reducer: {
		numberStore: numberReducer,
		emailVerificationStore: emailVerificationReducer
		// your store should start form here
	}
});
