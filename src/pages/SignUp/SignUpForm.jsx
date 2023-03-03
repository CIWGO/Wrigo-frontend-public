import { Form, Input, Button, notification } from "antd";
import axios from "axios";
import { MyForm } from "./style";
import { ERROR_MESSAGES } from "../../constants/errorMessages";
import { defaultFrontEndPrefix } from "../../constants/index";

const SignUpForm = () => {
	const onFinish = async (values) => {
		try {
			const response = await axios.post("http://localhost:3005/users/signup", values);
			console.log(response.data);
			notification.success({ message: "Sign up success" });
			window.location.href = `http://${defaultFrontEndPrefix}/login`; // Redirect to /login page
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
