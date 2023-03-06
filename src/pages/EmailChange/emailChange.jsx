import React from "react";
import { Form, Input } from "antd";
import { MyButton, VerifyButton, MyForm, PageLayout, ResendLayout } from "./style";

function EmailChange () {
	const onFinish = (values) => {
		console.log("Success:", values);
	};
	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};
	return (
		<PageLayout>

			<MyForm name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
				<ResendLayout>

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
						<MyButton type="primary" htmlType="submit">
        Send Code
						</MyButton>
					</Form.Item>

				</ResendLayout>

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
					<VerifyButton type="primary" htmlType="submit">
        Verify
					</VerifyButton>
				</Form.Item>
			</MyForm>
		</PageLayout>

	);
}

export default EmailChange;
