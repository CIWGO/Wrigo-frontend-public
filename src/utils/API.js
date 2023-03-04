import axios from "axios";

export const signupUser = (values) => {
	return axios.post("http://localhost:3005/users/signup", values);
};
