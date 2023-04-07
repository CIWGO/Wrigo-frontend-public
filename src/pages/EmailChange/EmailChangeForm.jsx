import React, { useEffect, useState } from "react";
import { Col, Form, Input, notification, Row, Space } from "antd";
import { VerifyButton, MyForm, PageLayout, SendButton } from "./style";
import { changeEmail, sendOTPViaEmail } from "../../utils/index";
import { useNavigate } from "react-router-dom";
import { ERROR_MESSAGES } from "../../constants/errorMessages";

function EmailChangeForm () {
	const [form] = Form.useForm();
	const [disabled, setDisabled] = useState(false);
	const [timeLeft, setTimeLeft] = useState(60);
	const navigate = useNavigate();

	const onSend = async () => {
		const newEmail = form.getFieldValue("newEmail");

		if (!newEmail) {
			notification.error({ message: "Please enter new email" });
			return;
		}

		const uid = localStorage.getItem("uid");
		const username = localStorage.getItem("username");

		await sendOTPViaEmail({ uid, username, newEmail })
			.then((response) => {
				if (response.status === 200) {
					notification.success({ message: "Email sent successfully" });
					setDisabled(true);
				}
			})
			.catch(() => {
				notification.error({ message: "Unknown error occurred" });
			});
	};

	useEffect(() => {
		let timer;
		if (disabled) {
			timer = setInterval(() => {
				setTimeLeft((prevTimeLeft) => {
					if (prevTimeLeft === 1) {
						setDisabled(false);
						clearInterval(timer);
						return 60;
					}
					return prevTimeLeft - 1;
				});
			}, 1000);
		}
		return () => clearInterval(timer);
	}, [disabled]);

	const onFinish = async (values) => {
		const uid = localStorage.getItem("uid");
		const { userInput, newEmail } = values;

		await changeEmail({ uid, userInput, newEmail })
			.then((response) => {
				if (response.status === 200) {
					notification.success({ message: "Email set successfully" });
					navigate("/login");
				}
			})
			.catch((error) => {
				let errorMessage;
				if (error.response && error.response.data && error.response.data.error) {
					errorMessage = error.response.data.error;
				} else if (error.response && error.response.status === 401) {
					errorMessage = "Invalid or expired verification code";
				} else {
					errorMessage = error.message || "Unknown error occurred";
				}
				notification.error({ message: `${errorMessage}` });
			});
	};

	return (
		<PageLayout>
			<MyForm
				name="emailChangeForm"
				form={form}
				onFinish={onFinish}
				scrollToFirstError
			>
				<Row>
					<Col span={24}>
						<Form.Item
							name="newEmail"
							rules={[
								{
									required: true,
									message: ERROR_MESSAGES.email,
									whitespace: true
								}
							]}
						>
							<Input placeholder="New Email" />
						</Form.Item>
					</Col>
				</Row>
				<Row>
					<Col span={15}>
						<Form.Item
							name="userInput"
							rules={[
								{
									required: true,
									message: "Please enter verification code",
									whitespace: true
								}
							]}
						>
							<Input placeholder="Verification code" />
						</Form.Item>
					</Col>
					<Col span={9}>
						<Space
							direction="horizontal"
							style={{ justifyContent: "flex-end", width: "100%" }}
						>
							<SendButton type="primary" onClick={onSend} disabled={disabled}>
								{disabled ? `Resend (${timeLeft})` : "Send"}
							</SendButton>
						</Space>
					</Col>
				</Row>
				<Form.Item>
					<VerifyButton type="primary" htmlType="submit">
						Verify
					</VerifyButton>
				</Form.Item>
			</MyForm>
		</PageLayout>
	);
}

export default EmailChangeForm;
