import React from "react";
import { Button, Form, Input } from "antd";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

function EmailVerification () {
	const Container = styled.div`
  margin: 8px 15px;
  display: flex-row;
  height: 250px;
	color:#2F71DA;
`;

	const onFinish = (values) => {
		console.log("Success:", values);
	};
	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};
	return (
		<Container>
			<h1 style={{ marginTop: 200, marginBottom: 80 }}>WRIGO</h1>
			<h2>Verify your email</h2>
			<p>please check your inbox</p>
			<Form
				name="basic"
				style={{
					maxWidth: 280,
					justifyContent: "space-between",
					margin: "0 auto"
				}}
				initialValues={{
					remember: true
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
				layout="inline"
			>

				<Form.Item
					style={{
						maxWidth: 200,
						margin: 0
					}}
					// label="Verification Code"
					name="Verification Code"
					rules={[
						{
							// required: true,
							message: "Please input Verification Code!"
						}
					]}
				>
					<Input placeholder="Verification Code"/>
				</Form.Item>

				<Form.Item
					style={{
						margin: 0
					}}
				>
					<Button style={{
						backgroundColor: "#2F71DA",
						margin: 0
					}} type="primary" htmlType="submit">
        Resend
					</Button>
				</Form.Item>
			</Form>
			<Form.Item
				style={{ marginTop: 15 }}
			>
				<Button style={{ backgroundColor: "#2F71DA", width: 120 }} type="primary" htmlType="submit">
        Verify
				</Button>
			</Form.Item>
			<a href="/EmailVerificationChange">
        Forgot your password?
			</a>
		</Container>
	);
}

export default EmailVerification;
