import axios from "axios";
import { defaultBackEndPrefix } from "../constants";

const newRequest = axios.create({
	baseURL: `${defaultBackEndPrefix}`
	// withCredentials: true,
});

export default newRequest;
