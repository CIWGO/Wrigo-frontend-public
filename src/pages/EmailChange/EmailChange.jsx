import React from "react";
import { Form, Input } from "antd";
import {
	MyButton,
	VerifyButton,
	MyForm,
	PageLayout,
	ResendLayout
} from "./style";
import { useSelector } from "react-redux";
import { sendOTPViaEmail, changeEmail } from "../../utils/index";
import { useNavigate } from "react-router-dom";

function EmailChange () {
	const { uid, username, email } = useSelector((state) => state.emailVerificationStore);
	const navigate = useNavigate();

	const onSendCode = (values) => {
		sendOTPViaEmail({ uid, username, newEmail: values.Email })
			.then((response) => {
				if (response.status === 200) {
					alert("send email successful! Check your new mailbox for the code!");
				} else if (response.status === 500) {
					alert("send fail 500 (Something went wrong)");
				} else {
					alert("send fail other than 500");
				}
			});
	};
	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};
	const onEmailChange = (values) => {
		changeEmail({ uid, username, newEmail: email, userInput: values.VerificationCode })
			.then((response) => {
				if (response.status === 200) {
					alert("The new email has been successfully verified");
					navigate("/login");
				} else if (response.status === 500) {
					alert("verify failed 500 (Something went wrong)");
				} else {
					alert("verify failed other than 500");
				}
			});
	};

	return (
		<PageLayout>
			<MyForm
				name="basic"
				onFinish={onSendCode}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<ResendLayout>
					<Form.Item
						name="Email"
						rules={[
							{
								type: "email"
							}
						]}
					>
						<Input placeholder="New Email" />
					</Form.Item>
					<Form.Item>
						<MyButton type="primary" htmlType="submit">
							Send Code
						</MyButton>
					</Form.Item>
				</ResendLayout>
			</MyForm>

			<MyForm
				name="basic"
				onFinish={onEmailChange}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item
					name="VerificationCode"
					rules={[
						{
							// required: true,
							message: "Please input Verification Code!"
						}
					]}
				>
					<Input placeholder="Verification Code" />
				</Form.Item>
				<Form.Item>
					<VerifyButton type="primary" htmlType="submit">
						Verify
					</VerifyButton>
				</Form.Item>
			</MyForm>
		</PageLayout>
	);
}

export default EmailChange;
