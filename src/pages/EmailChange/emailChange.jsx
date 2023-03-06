import React from "react";
import { Button, Form, Input } from "antd";
// import styled from "styled-components";
import { MyForm, PageLayout } from "./emailChangeStyle";
// import { useNavigate } from "react-router-dom";
// import ERROR_MESSAGES from "../../constants/errorMessages";

function EmailChange () {
	// const Container = styled.div`
	// 	margin: 8px 15px;
	// 	display: flex-row;
	// 	height: 250px;
	// 	color:#2F71DA;
	// `;

	const onFinish = (values) => {
		console.log("Success:", values);
	};
	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};
	return (
		<PageLayout>
			<h1 style={{ marginTop: 200, marginBottom: 80 }}>WRIGO</h1>
			<h2>Verify your email</h2>
			<p>please input new email address</p>
			{/* <Form
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
			> */}
			<MyForm name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">

				<Form.Item
					rules={[
						{
							type: "email"
						}
					]}
				>
					<Input placeholder="New Email"/>
				</Form.Item>
				<Form.Item
				>
					<Button type="primary" htmlType="submit">
        Send Code
					</Button>
				</Form.Item>

				<Form.Item
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
				>
					<Button type="primary" htmlType="submit">
        Verify
					</Button>
				</Form.Item>
			</MyForm>
		</PageLayout>

	);
}

export default EmailChange;
