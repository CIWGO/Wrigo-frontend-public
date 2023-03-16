import axios from "axios";

const newRequest = axios.create({
	baseURL: "https://api.wrigo.com.au"
	// withCredentials: true,
});

export default newRequest;
