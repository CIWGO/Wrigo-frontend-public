import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "../slice/numberSlice";

export const store = configureStore({
	reducer: {
		numberStore: numberReducer
		// your store goes here
	}
});
