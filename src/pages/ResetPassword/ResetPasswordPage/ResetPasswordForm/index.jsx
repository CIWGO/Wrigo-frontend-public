import { Button, Form, Input, notification } from "antd";
import { MyForm, PageLayout } from "../style";
import { changePassword } from "../../../../utils";
import { useNavigate } from "react-router";

const ResetPasswordForm = () => {
	const [form] = Form.useForm();
	const navigate = useNavigate();

	const onFinish = async () => {
		const username = localStorage.getItem("username");
		const password = form.getFieldValue("password");

		await changePassword({ username, password })
			.then((response) => {
				if (response.status === 200) {
					notification.success({ message: "Password reset successfully" });
					navigate("/login");
				}
			})
			.catch((error) => {
				if (error.response && error.response.status === 404) {
					notification.error({ message: "User not found. Please try again" });
				} else {
					notification.error({
						message: "Unknown error when resetting password"
					});
				}
			});
	};

	return (
		<PageLayout>
			<MyForm
				name="resetPasswordForm"
				form={form}
				onFinish={onFinish}
				scrollToFirstError
			>
				<Form.Item
					name="password"
					rules={[
						{
							required: true,
							message: "Please input your password!"
						}
					]}
					hasFeedback
				>
					<Input.Password placeholder="Password"/>
				</Form.Item>

				<Form.Item
					name="confirm"
					dependencies={["password"]}
					hasFeedback
					rules={[
						{
							required: true,
							message: "Please confirm your password!"
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
					<Input.Password placeholder="Confirm password"/>
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit">
					Reset password
					</Button>
				</Form.Item>
			</MyForm>
		</PageLayout>

	);
};

export default ResetPasswordForm;
