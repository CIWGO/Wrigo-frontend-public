
import { Button } from "antd";
// notification
import { MyForm, ButtonLayout } from "./style";
import InputField from "./InputField";
import { ERROR_MESSAGES } from "../../constants/errorMessages";
// import axios from "axios";

// import { setUserLogin, setUserInfo } from "../../slice/userSlice";
// import { Navigate } from "react-router-dom";
// import { Dispatch } from "react";

// const handleSubmit = async (values) => {
// 	event.preventDefault();
// 	const response = await fetch("http://localhost:3005/users/login", {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json"
// 		},
// 		body: JSON.stringify({ username, password })
// 	});
// 	if (response.ok) {
// 		const data = await response.json();
// 		// login success
// 		localStorage.setItem("token", data.token); // store the token in localStorage
// 		localStorage.setItem("uid", data.uid); // store the uid in localStorage
// 		localStorage.setItem("username", data.username); // store the username in localStorage
// 		alert("Login successful!");
// 		navigate("/userProfile");
// 	} else if (response.status === 401) {
// 		// unverified email
// 		alert("unverified email");
// 	} else {
// 		// login failure
// 		alert("Invalid username or password.");
// 	}
// };

const LoginForm = () => {
	// const handleSubmit = async (values) => {
	// 	try {
	// 		const response = await axios.post("http://localhost:3005/users/login", values);
	// 		console.log(response.data);
	// 		notification.success({ message: "login success" });
	// 		if (response.ok) {
	// 			const data = await response.json();
	// 			// login success
	// 			Dispatch(
	// 				setUserLogin({
	// 					userId: data.uid,
	// 					userName: data.username,
	// 					token: data.token
	// 				})
	// 			);
	// 			alert("Login successful!");
	// 			Navigate("/userProfile");
	// 		} else if (response.status === 401) {
	// 			const data = await response.json();
	// 			Dispatch(
	// 				setUserInfo({
	// 					userId: data.uid,
	// 					userName: data.username
	// 				})
	// 			);
	// 			alert("unverified email");
	// 			Navigate("/emailVerification");
	// 		} else {
	// 			// login failure
	// 			alert("Invalid username or password.");
	// 		}
	// 		// window.location.href = `http://${defaultFrontEndPrefix}/login`; // Redirect to /login page
	// 	} catch (error) {
	// 		console.error(error);
	// 		notification.error({ message: "login failed" });
	// 	}
	// };

	return (
		<MyForm name="basic"
			// onFinish={handleSubmit}
		>

			<InputField
				name="username"
				placeholder="Username"
				errorMessages={ERROR_MESSAGES.username} />

			<InputField
				name="password"
				placeholder="Password"
				errorMessages={ERROR_MESSAGES.password} />

			<ButtonLayout>
				<Button type="primary" htmlType="submit">
        Sign up
				</Button>

				<Button type="default" htmlType="submit">
        Login
				</Button>
			</ButtonLayout>

		</MyForm>

	);
};

export default LoginForm;
