import newRequest from "./newRequest.js";

// Post
export const signupUser = (values) => { return newRequest.post("/users/signup", values); };

export const loginUser = (values) => { return newRequest.post("/users/login", values); };

export const sendOTPViaEmail = (values) => { return newRequest.post("/users/sendOTP", values); };

export const verifyOTP = (values) => { return newRequest.post("/users/verifyOTP", values); };

export const getUser = (values) => { return newRequest.post("/users/getUser", values); };

export const changePassword = (values) => { return newRequest.post("/users/changePassword", values); };

export const getTopic = (values) => { return newRequest.post("/users/getTopic", values); };

export const writingDraft = (values) => { return newRequest.post("/users/writingDraft", values); };

// Patch
export const changeEmail = (values) => { return newRequest.patch("/users/changeEmail", values); };

export const viewHistory = (values) => { return newRequest.patch("/users/viewHistory", values); };

// example mock request
export const requestNumber = () => {
	const data = { value: 10 };
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ data });
		}, 3000);
	});
};
