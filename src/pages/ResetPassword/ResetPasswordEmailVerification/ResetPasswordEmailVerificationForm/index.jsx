import React, { useState, useEffect } from "react";
import { Col, Form, Input, Row, Space, notification } from "antd";
import { ERROR_MESSAGES } from "../../../../constants/errorMessages";
import { MyForm, PageLayout, SendButton, VerifyButton } from "../style";
import { getUser, sendOTPViaEmail, verifyOTP } from "../../../../utils";
import { useNavigate } from "react-router";

const ResetPasswordEmailVerificationForm = () => {
	const [form] = Form.useForm();
	const [uid, setUid] = useState();
	const [disabled, setDisabled] = useState(false);
	const [timeLeft, setTimeLeft] = useState(60);
	const navigate = useNavigate();

	const onSend = async () => {
		const username = form.getFieldValue("username");

		if (!username) {
			notification.error({ message: "Please enter username" });
			return;
		}

		await getUser({ username })
			.then(async (response) => {
				if (response.status === 201) {
					const uid = response.data.user.uid;
					setUid(uid);

					await sendOTPViaEmail({ uid, username })
						.then((response) => {
							if (response.status === 200) {
								notification.success({ message: "Email sent successfully!" });
								setDisabled(true);
							}
						})
						.catch(() => {
							notification.error({
								message: "Unknown error when sending email"
							});
						});
				}
			})
			.catch((error) => {
				if (error.response && error.response.status === 404) {
					notification.error({ message: "User not found. Please enter correct username." });
				} else {
					notification.error({
						message: "Unknown error when searching for user"
					});
				}
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

	const onFinish = async () => {
		const userInput = form.getFieldValue("userInput");
		await verifyOTP({ uid, userInput })
			.then((response) => {
				if (response.status === 200) {
					notification.success({ message: "OTP verified successfully!" });
					navigate("/resetpassword1");
				}
			})
			.catch((error) => {
				if (error.response && error.response.status === 401) {
					notification.error({ message: ERROR_MESSAGES.verificationCode });
				} else {
					notification.error({
						message: "Unknown error when verifying OTP"
					});
				}
			});
	};

	return (
		<PageLayout>
			<MyForm
				name="resetPasswordEmailVerificationForm"
				form={form}
				onFinish={onFinish}
				scrollToFirstError
			>
				<Row>
					<Col span={24}>
						<Form.Item
							name="username"
							rules={[
								{
									required: true,
									message: ERROR_MESSAGES.username,
									whitespace: true
								}
							]}
						>
							<Input placeholder="Username" />
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
							<SendButton
								type="primary"
								onClick={onSend}
								disabled={disabled}
							>
								{disabled ? `Resend (${timeLeft}s)` : "Send"}
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
};

export default ResetPasswordEmailVerificationForm;
