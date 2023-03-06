import React from "react";
import { Button, Form, Input } from "antd";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
import { ERROR_MESSAGES } from "../../constants/errorMessages";
// import { defaultFrontEndPrefix } from "../../constants";
import { MyForm, PageLayout, ResendLayout } from "./emailVerificationStyle";

function EmailVerification () {
// 	const Container = styled.div`
//   margin: 8px 15px;
//   display: flex-row;
//   height: 250px;
// 	color:#2F71DA;
// `;

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
			<h1 style={{ marginTop: 200, marginBottom: 80 }}>WRIGO</h1>
			<h2>Verify your email</h2>
			<p>please check your inbox</p>
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
						<Button type="primary" onClick={onResend}>
        Resend
						</Button>
					</Form.Item>

				</ResendLayout>
				<Form.Item
				>
					<Button type="primary" htmlType="submit">
        Verify
					</Button>
				</Form.Item>
			</MyForm>
			<a href="/EmailChange">
        Forgot your password?
			</a>
		</PageLayout>
	);
}

export default EmailVerification;
