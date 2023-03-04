import React from "react";
import { Button, Form, Input } from "antd";
import styled from "styled-components";

// import { useNavigate } from "react-router-dom";

function EmailVerificationChange () {
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
			<p>please input new email address</p>
			<Form
				name="basic"
				style={{
					maxWidth: 300,
					display: "flex",
					justifyContent: "space-between",
					margin: "auto",
					marginTop: 20
				}}
				initialValues={{
					email: true
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
				layout="inline"
			>

				<Form.Item
					style={{ margin: 0 }}
					rules={[
						{
							type: "email"
						}
					]}
				>
					<Input placeholder="New Email"/>
				</Form.Item>
				<Form.Item
					style={{ margin: 0 }}
				>
					<Button style={{ backgroundColor: "#2F71DA" }} type="primary" htmlType="submit">
        Send Code
					</Button>
				</Form.Item>
			</Form>
			<Form
				style={{
					maxWidth: 300,
					margin: "auto"
				}}>

				<Form.Item
					style={{ marginTop: 20 }}
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
					// style={{ marginTop: 10 }}
				>
					<Button style={{ backgroundColor: "#2F71DA", width: 150 }} type="primary" htmlType="submit">
        Verify
					</Button>
				</Form.Item>
			</Form>
		</Container>

	);
}

export default EmailVerificationChange;
