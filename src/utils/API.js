import newRequest from "./newRequest.js";

// Post
export const signupUser = (values) => { return newRequest.post("/users/signup", values); };

export const loginUser = (values) => { return newRequest.post("/users/login", values); };

export const sendOTPViaEmail = (values) => { return newRequest.post("/users/sendOTP", values); };

export const verifyOTP = (values) => { return newRequest.post("/users/verifyOTP", values); };

export const getUser = (values) => { return newRequest.post("/users/getUser", values); };

export const changePassword = (values) => { return newRequest.post("/users/changePassword", values); };

export const getTopic = (values) => { return newRequest.post("/users/getTopic", values); };

export const searchAllTopics = (values) => { return newRequest.post("/users/searchAllTopics", values); };

export const searchUserTopics = (values) => { return newRequest.post("/users/searchUserTopics", values); };

export const writingDraft = (values) => { return newRequest.post("/users/writingDraft", values); };

export const viewHistory = (values) => { return newRequest.post("/users/viewHistory", values); };

export const writingStatistics = (values) => { return newRequest.post("/api/writingStatistics", values); };

export const writingSubmissions = (values) => { return newRequest.post("/api/writingSubmissions", values); };

export const paymentRedirection = (values) => { return newRequest.post("/api/checkout", values); };

export const checkoutSuccess = (values) => { return newRequest.post("/api/checkoutSuccess", values); };

export const getUserPaymentInfo = (values) => { return newRequest.post("/users/getUserPaymentInfo", values); };

// Patch
export const changeEmail = (values) => { return newRequest.patch("/users/changeEmail", values); };

// example mock request
export const requestNumber = () => {
	const data = { value: 10 };
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ data });
		}, 3000);
	});
};
