import { MyForm, ResendLayout, MyButton } from "./style";
import { Form, Input, notification } from "antd";
import { ERROR_MESSAGES } from "../../constants/errorMessages";
import React, { useState, useEffect } from "react";
import {
	sendOTPViaEmail,
	verifyOTP,
	changePassword,
	getUser
} from "../../utils";
import { useNavigate } from "react-router-dom";

function ResetPasswordForm () {
	const [uid, setUid] = useState("");
	const [username, setUsername] = useState("");
	const [code, setCode] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [verified, setVerified] = useState(false);
	const [resendDisabled, setResendDisabled] = useState(false);
	const [countdown, setCountdown] = useState(60);

	const navigate = useNavigate();

	// Send email to server to receive verification code
	function handleSendEmail () {
		event.preventDefault();
		// get user uid and email
		getUser({ username })
			.then((response) => {
				if (response.status === 201) {
				// const uid = response.data.user.uid;
				// const email = response.data.user.email;
					const { uid, email } = response.data.user;
					setUid(uid);
					// send email to server
					sendOTPViaEmail({ uid, username, email })
						.then((response) => {
							if (response.status === 200) {
								notification.success({ message: "Send email successful! Check your mailbox for the code!" });
							} else if (response.status === 500) {
								alert("Send fail 500 (Something went wrong)");
							} else {
								alert("Send fail other than 500");
							}
						})
						.catch((error) => {
							console.log(error);
						});
					setResendDisabled(true);
					setCountdown(60);
				} else {
					console.log(response.status);
				}
			})
			.catch((error) => {
				if (error.response && error.response.status === 404) {
					notification.error({ message: "Username not found. Please try again." });
				} else {
					notification.error({ message: "Unknown error occurred" });
				}
			});
	}

	// Resend email after countdown timer expires
	useEffect(() => {
		if (countdown > 0 && resendDisabled) {
			setTimeout(() => setCountdown(countdown - 1), 1000);
		} else {
			setResendDisabled(false);
		}
	}, [countdown, resendDisabled]);

	async function onFinish (values) {
		// event.preventDefault();
		// reset password with server
		try {
			const response = await verifyOTP({ uid, userInput: code });
			if (response.status === 200) {
				setVerified(true);
			} else if (response.status === 401) {
				setVerified(false);
				alert("Verified fail 401 (Invalid OTP)");
			} else if (response.status === 500) {
				setVerified(false);
				alert("Verified fail 500");
			}
		} catch (error) {
			setVerified(false);
			alert("Verified fail other than 500");
			console.log(error);
		}
		console.log("Wait for the verified");
		console.log(verified);
	}

	useEffect(() => {
		if (verified === true) {
			console.log(uid, username, confirmPassword);
			changePassword({ uid, username, password: confirmPassword })
				.then((response) => {
					if (response.status === 200) {
						alert("Change password successful!");
						navigate("/login");
					} else if (response.status === 500) {
						alert("Fail 500 (Something went wrong)");
					} else {
						alert("Verified fail other than 500");
					}
				})
				.catch((error) => {
					console.log(error);
					alert();
				});
		}
	}, [verified, uid, username, confirmPassword]);

	return (
		<div>
			<MyForm
				onFinish={onFinish}
			>
				<Form.Item
					name="username"
					// label="Username"
					rules={[
						{
							required: true,
							message: ERROR_MESSAGES.username
						}
					]}
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				>
					<Input placeholder="Username" />
				</Form.Item>

				<ResendLayout>
					<Form.Item
						name="VerificationCode"
						rules={[
							{
								required: true,
								message: ERROR_MESSAGES.verificationCode
							}
						]}
						value={code}
						onChange={(e) => setCode(e.target.value)}
					>
						<Input placeholder="Verification Code" />
					</Form.Item>

					<Form.Item>
						<MyButton
							type="primary"
							disabled={resendDisabled}
							onClick={() => {
								handleSendEmail();
								setVerified(false);
							}}
						>
              Send {resendDisabled ? `(${countdown})` : null}
						</MyButton>
					</Form.Item>
				</ResendLayout>
			</MyForm>

			<Form.Item
				name="password"
				// label="Password"
				rules={[
					{
						required: true,
						message: ERROR_MESSAGES.password
					}
				]}
				value={newPassword}
				onChange={(e) => setNewPassword(e.target.value)}
			>
				<Input.Password placeholder="Password" />
			</Form.Item>

			<Form.Item
				name="passwordConfirm"
				// label="Password"
				rules={[
					{
						required: true,
						message: ERROR_MESSAGES.passwordConfirm
					},
					({ getFieldValue }) => ({
						validator (_, value) {
							if (!value || getFieldValue("password") === value) {
								return Promise.resolve();
							}
							return Promise.reject(new Error(ERROR_MESSAGES.passwordMatch));
						}
					})
				]}
				value={confirmPassword}
				onChange={(e) => setConfirmPassword(e.target.value)}
			>
				<Input.Password placeholder="Confirm Password" />
			</Form.Item>

			<Form.Item>
				<MyButton
					type="primary"
					htmlType="submit"
				>
					Reset Password
				</MyButton>
			</Form.Item>
		</div>
	);
}

export default ResetPasswordForm;
