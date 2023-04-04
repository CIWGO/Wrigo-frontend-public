
import { notification, Row, Col } from "antd";
import { MyForm, LoginButton } from "./style";
import InputField from "./InputField";
import { ERROR_MESSAGES } from "../../constants/errorMessages";
import { setUserLogin, setUserInfo } from "../../slice/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser, sendOTPViaEmail } from "../../utils";

const LoginForm = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmit = async (values) => {
		try {
			const response = await loginUser(values);
			console.log(response.data);
			if (response.status === 200) {
				// login success
				const { uid: userId, username: userName, token } = response.data;

				dispatch(setUserLogin({ userId, userName, token }));
				localStorage.setItem("token", token); // store the token in localStorage
				localStorage.setItem("uid", userId); // store the uid in localStorage
				localStorage.setItem("username", userName); // store the username in localStorage
				console.log("login success");
				navigate("/user/dashboard");
			}
		} catch (error) {
			// unverified email
			if (error.response.status === 401) {
				const { uid: userId, username: userName } = error.response.data;

				await sendOTPViaEmail({ uid: userId, username: userName });
				// axios.post(`${defaultBackEndPrefix}/users/sendOTP`, { uid: userId, username: userName });
				dispatch(setUserInfo({ userId, userName }));
				console.log("unverified email =", values);
				navigate("/emailVerification");
			} else {
				const errorMessage = error.response.data.error;

				notification.error({ message: `${errorMessage}` });
			}
		}
	};

	const signUpOnClick = () => {
		navigate("/signup");
	};

	return (
		<MyForm name="basic" onFinish={handleSubmit}>
			<InputField
				name="username"
				placeholder="Username"
				errorMessages={ERROR_MESSAGES.username} />

			<InputField
				name="password"
				placeholder="Password"
				errorMessages={ERROR_MESSAGES.password} />

			<Row justify="space-between">
				<Col>
					<LoginButton type="primary" onClick={signUpOnClick}>
        Sign up
					</LoginButton>
				</Col>
				<Col>
					<LoginButton type="default" htmlType="submit">
        Login
					</LoginButton>
				</Col>
			</Row>
		</MyForm>
	);
};

export default LoginForm;
