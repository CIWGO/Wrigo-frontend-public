import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "../features/numberSlice";

export const store = configureStore({
	reducer: {
		numberStore: numberReducer
		// your store should start form here
	}
});
