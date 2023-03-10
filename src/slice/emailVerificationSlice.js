import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { verifyOTP } from "../utils/index";

const initialState = {
	uid: "",
	OTPcode: "",
	email_verified: "false",
	loading: false,
	error: null
};
export const requestVerifyOTPAsync = createAsyncThunk(
	"emailVerification/postData",
	async (data) => {
		const response = await verifyOTP(data);
		return response.data.user.email_verified;
	}

);

export const emailVerificationSlice = createSlice({
	name: "emailVerification",
	initialState,
	reducers: {
		updateEmailVerification: (state, action) => {
			console.log("updateEmailVerification", state, action);
			// state.uid = action.payload.uid;
			// state.userId = action.payload.uid;
			state = {
				...state,
				...action.payload
			};
			return state;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(requestVerifyOTPAsync.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(requestVerifyOTPAsync.fulfilled, (state, action) => {
				state.loading = false;
				state.email_verified = action.payload;
			})
			.addCase(requestVerifyOTPAsync.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	}
});

// Action creators are generated for each case reducer function
export const { updateEmailVerification } = emailVerificationSlice.actions;

export default emailVerificationSlice.reducer;
