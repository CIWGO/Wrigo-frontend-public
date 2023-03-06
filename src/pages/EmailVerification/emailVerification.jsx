import React from "react";
import { Form, Input } from "antd";
// import { useNavigate } from "react-router-dom";
import { ERROR_MESSAGES } from "../../constants/errorMessages";
// import { defaultFrontEndPrefix } from "../../constants";
import { VerifyButton, MyForm, PageLayout, ResendLayout, MyButton } from "./style";

function EmailVerification () {
	const onFinish = (values) => {
		console.log("Success:", values);
	};
	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};
	const onResend = () => {
		console.log(1123);
	};
	return (
		<PageLayout>
			{/* <h1 style={{ marginTop: 200, marginBottom: 80 }}>WRIGO</h1>
			<h2>Verify your email</h2>
			<p>please check your inbox</p> */}
			<MyForm name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off"
			>
				<ResendLayout>

					<Form.Item
						name="Verification Code"
						rules={[
							{
								required: true,
								message: ERROR_MESSAGES.verificationCode
							}
						]}
					>
						<Input placeholder="Verification Code"/>
					</Form.Item>

					<Form.Item
					>
						<MyButton type="primary" onClick={onResend}>
        Resend
						</MyButton>
					</Form.Item>

				</ResendLayout>
				<Form.Item
				>
					<VerifyButton type="primary" htmlType="submit">
        Verify
					</VerifyButton>
				</Form.Item>
			</MyForm>
		</PageLayout>
	);
}

export default EmailVerification;
