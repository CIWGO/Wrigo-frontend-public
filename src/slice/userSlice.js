import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
	userId: null,
	userName: null,
	token: null
};

const userSlice = createSlice({
	name: "user",
	initialState: initialUserState,
	reducers: {
		setUserLogin: (state, action) => {
			console.log("setUserLogin", state, action);
			state.userId = action.payload.userId;
			state.userName = action.payload.userName;
			state.token = action.payload.token;
			return state;
		},
		setUserInfo: (state, action) => {
			console.log("setUserInfo", state, action);
			state.userId = action.payload.userId;
			state.userName = action.payload.userName;
			state.token = null;
			return state;
		}
	}
});

export const userReducer = userSlice.reducer;
export const { setUserLogin, setUserInfo } = userSlice.actions;
