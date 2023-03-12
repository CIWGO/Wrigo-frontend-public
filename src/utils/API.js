import axios from "axios";

export const signupUser = (values) => {
	return axios.post("http://localhost:3005/users/signup", values);
};
// your fetching data API could go here
export const loginUser = (values) => { return axios.post("http://localhost:3005/users/login", values); };

export const sendOTPViaEmail = (values) => { return axios.post("http://localhost:3005/users/sendOTP", values); };

export const verifyOTP = (values) => { return axios.post("http://localhost:3005/users/verifyOTP", values); };

export const getUser = (values) => { return axios.post("http://localhost:3005/users/getUser", values); };

export const changePassword = (values) => { return axios.post("http://localhost:3005/users/changePassword", values); };

// example mock request
export const requestNumber = () => {
	const data = { value: 10 };
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ data });
		}, 3000);
	});
};
