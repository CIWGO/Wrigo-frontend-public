import { Form, Input, Button, notification } from "antd";
import axios from "axios";
import { MyForm } from "./style";

const SignUpForm = () => {
	// const [form] = Form.useForm();
	const onFinish = async (values) => {
		try {
			const response = await axios.post("http://localhost:3005/users/signup", values);
			console.log(response.data);
			notification.success({ message: "Sign up success" });
			window.location.href = "http://localhost:3005/users/login"; // Redirect to /login page
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
						message: "Please input your username!"
					}
				]}
			>
				<Input placeholder="Username"/>
			</Form.Item>

			<Form.Item
				name="email"
				// label="Email"
				rules={[
					{
						required: true,
						message: "Please input your email!"
					},
					{
						type: "email",
						message: "Please enter a valid email address"
					}
				]}
			>
				<Input placeholder="Email"/>
			</Form.Item>

			<Form.Item
				name="password"
				// label="Password"
				rules={[
					{
						required: true,
						message: "Please input your password!"
					}
				]}
			>
				<Input.Password placeholder="Password"/>
			</Form.Item>

			<Form.Item
				name="passwordConfirm"
				// label="Password"
				rules={[
					{
						required: true,
						message: "Please input your password!"
					},
					({ getFieldValue }) => ({
						validator (_, value) {
							if (!value || getFieldValue("password") === value) {
								return Promise.resolve();
							}
							return Promise.reject(new Error("The two passwords that you entered do not match!"));
						}
					})
				]}
			>
				<Input.Password placeholder="Confirm Password"/>
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
