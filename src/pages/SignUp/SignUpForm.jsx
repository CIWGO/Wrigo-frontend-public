import { Form, Input, Button, notification } from "antd";
import { MyForm } from "./style";
import { ERROR_MESSAGES } from "../../constants/errorMessages";
import { signupUser, sendOTPViaEmail } from "../../utils";
import { useNavigate } from "react-router-dom";
import { setUserLogin, setUserInfo } from "../../slice/userSlice";
import { useDispatch } from "react-redux";

const SignUpForm = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	// Think about refactor it by using redux and redux toolkit.
	const onFinish = async (values) => {
		try {
			const response = await signupUser(values);
			console.log(response.data);

			if (response.status === 201) {
				// sign up success
				const { uid: userId, username: userName, token } = response.data;

				dispatch(setUserLogin({ userId, userName, token }));
				dispatch(setUserInfo({ userId, userName }));
				localStorage.setItem("token", token); // store the token in localStorage
				localStorage.setItem("uid", userId); // store the uid in localStorage
				localStorage.setItem("username", userName); // store the username in localStorage
				await sendOTPViaEmail({ uid: userId, username: userName });
				console.log("sign up success");
				navigate("/emailVerification");
			}

			notification.success({ message: "Sign up success" });
		} catch (error) {
			console.error(error);
			notification.error({ message: "Sign up failed" });
		}
	};

	return (
		<MyForm name="basic"
			onFinish={onFinish}>
			<Form.Item
				name="username"
				// label="Username"
				rules={[
					{
						required: true,
						message: ERROR_MESSAGES.username
					}
				]}
			>
				<Input placeholder="Username" />
			</Form.Item>

			<Form.Item
				name="email"
				// label="Email"
				rules={[
					{
						required: true,
						message: ERROR_MESSAGES.email
					},
					{
						type: "email",
						message: ERROR_MESSAGES.emailFormat
					}
				]}
			>
				<Input placeholder="Email" />
			</Form.Item>

			<Form.Item
				name="password"
				// label="Password"
				rules={[
					{
						required: true,
						message: ERROR_MESSAGES.password
					}
				]}
			>
				<Input.Password placeholder="Password" />
			</Form.Item>

			<Form.Item
				name="passwordConfirm"
				// label="Password"
				rules={[
					{
						required: true,
						message: ERROR_MESSAGES.passwordConfirm
					},
					({ getFieldValue }) => ({
						validator (_, value) {
							if (!value || getFieldValue("password") === value) {
								return Promise.resolve();
							}
							return Promise.reject(new Error(ERROR_MESSAGES.passwordMatch));
						}
					})
				]}
			>
				<Input.Password placeholder="Confirm Password" />
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit">
					Sign up
				</Button>
			</Form.Item>
		</MyForm>
	);
};

export default SignUpForm;
