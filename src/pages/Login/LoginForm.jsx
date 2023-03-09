
import { notification, Row, Col } from "antd";
import { MyForm, LoginButton } from "./style";
import InputField from "./InputField";
import { ERROR_MESSAGES } from "../../constants/errorMessages";
import axios from "axios";
import { setUserLogin, setUserInfo } from "../../slice/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const LoginForm = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmit = async (values) => {
		try {
			const response = await axios.post("http://localhost:3005/users/login", values);
			console.log(response.data);
			if (response.status === 200) {
				// login success
				const { uid: userId, username: userName, token } = response.data;

				dispatch(setUserLogin({ userId, userName, token }));
				console.log("login success");
				navigate("/userProfile");
			}
		} catch (error) {
			// unverified email
			if (error.response.status === 401) {
				const { uid: userId, username: userName } = error.response.data;

				await axios.post("http://localhost:3005/users/resetPassword/sendOTPViaEmail", values);
				dispatch(setUserInfo({ userId, userName }));
				console.log("unverified email");
				navigate("/emailVerification");
			} else {
				const errorMessage = error.response.data.error;

				notification.error({ message: `${errorMessage}` });
			}
		}
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
					<LoginButton type="primary" htmlType="submit">
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
