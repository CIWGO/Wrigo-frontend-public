import { configureStore } from "@reduxjs/toolkit";
import userAccountReducer from "../features/counter/userAccountSlice";

export const store = configureStore({
	reducer: {
		userAccount: userAccountReducer
	}
});
