import axios from "axios";

const newRequest = axios.create({
	baseURL: "http://localhost:3005"
	// withCredentials: true,
});

export default newRequest;
