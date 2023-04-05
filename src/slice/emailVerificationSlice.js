import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { verifyOTP, getUser } from "../utils/index";

const initialState = {
	uid: "",
	username: "",
	OTPcode: "",
	email: "",
	email_verified: "false",
	loading: false,
	error: null
};
export const requestVerifyOTPAsync = createAsyncThunk(
	"emailVerification/postData",
	async (data) => {
		const response = await verifyOTP(data);
		console.log(response);
		return response;
	}
);
export const requestEmail = createAsyncThunk(
	"emailVerification/postEmail",
	async (data) => {
		const response = await getUser(data);
		return (response.data.user);
	}
);

export const emailVerificationSlice = createSlice({
	name: "emailVerification",
	initialState,
	reducers: {
		updateEmailVerification: (state, action) => {
			state = {
				...state,
				...action.payload
			};
			return state;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(requestEmail.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(requestEmail.fulfilled, (state, action) => {
				state.loading = false;
				state.email = action.payload.email;
				state.uid = action.payload.uid;
				state.username = action.payload.username;
			})
			.addCase(requestEmail.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			.addCase(requestVerifyOTPAsync.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(requestVerifyOTPAsync.fulfilled, (state, action) => {
				state.loading = false;
				state.email_verified = action.email_verified;
			})
			.addCase(requestVerifyOTPAsync.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	}
});

// Action creators are generated for each case reducer function
export const emailVerificationReducer = emailVerificationSlice.reducer;
export const { updateEmailVerification } = emailVerificationSlice.actions;
