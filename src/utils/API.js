import axios from "axios";

export const signupUser = (values) => {
	return axios.post("http://localhost:3005/users/signup", values);
};
// your fetching data API could go here

// example mock request
export const requestNumber = () => {
	const data = { value: 10 };
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ data });
		}, 3000);
	});
};
