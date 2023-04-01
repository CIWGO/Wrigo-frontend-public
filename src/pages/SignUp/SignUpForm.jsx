import { Form, Input, Button, notification } from "antd";
import { MyForm } from "./style";
import { ERROR_MESSAGES } from "../../constants/errorMessages";
import { signupUser } from "../../utils";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
	const navigate = useNavigate();
	// Think about refactor it by using redux and redux toolkit.
	const onFinish = async (values) => {
		try {
			const response = await signupUser(values);
			console.log(response.data);
			notification.success({ message: "Sign up success" });
			navigate("/login");// Redirect to /login page
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
