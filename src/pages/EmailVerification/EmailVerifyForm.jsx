import React, { useState, useEffect } from "react";
import { Form, Input, notification } from "antd";
import { ERROR_MESSAGES } from "../../constants/errorMessages";
import {
	VerifyButton,
	MyForm,
	PageLayout,
	ResendLayout,
	MyButton
} from "./style";
import { useDispatch } from "react-redux";
import {
	updateEmailVerification
} from "../../slice/emailVerificationSlice";
import { sendOTPViaEmail, verifyOTP } from "../../utils/index";
import { useNavigate } from "react-router-dom";

function EmailVerifyForm ({ uid, username }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [countdown, setCountdown] = useState(60);
	const [resendDisabled, setResendDisabled] = useState(false);

	useEffect(() => {
		if (countdown > 0 && resendDisabled) {
			setTimeout(() => setCountdown(countdown - 1), 1000);
		} else {
			setResendDisabled(false);
		}
	}, [countdown, resendDisabled]);

	const onFinish = async (values) => {
		await verifyOTP({
			uid,
			userInput: values.VerificationCode
		})
			.then((response) => {
				if (response.status === 200) {
					dispatch(
						updateEmailVerification({
							username,
							uid,
							OTPcode: values.VerificationCode,
							email_verified: "true"
						})
					);
					notification.success({ message: "Email set successfully" });
					navigate("/login");
				}
			})
			.catch((error) => {
				if (error.response && error.response.status === 401) {
					notification.error({ message: ERROR_MESSAGES.verificationCodeError });
				} else {
					notification.error({ message: "Unknown error when verifying OTP" });
				}
			});
	};
	const onFinishFailed = (errorInfo) => {
		notification.error({ message: ERROR_MESSAGES.noVerificationCode });
	};

	const onResend = () => {
		sendOTPViaEmail({ uid, username })
			.then((response) => {
				if (response.status === 200) {
					notification.success({ message: "Email sent successfully! Check your mailbox for the code." });
				}
			})
			.catch(() => {
				notification.error({ message: "Unknown error occurred" });
			});
		setResendDisabled(true);
		setCountdown(60);
	};

	return (
		<PageLayout>
			<MyForm
				name="basic"
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<ResendLayout>
					<Form.Item
						name="VerificationCode"
						rules={[
							{
								required: true,
								message: ERROR_MESSAGES.noVerificationCode
							}
						]}
						style={{ marginRight: "5%" }}
					>
						<Input placeholder="Verification Code" />
					</Form.Item>

					<Form.Item>
						<MyButton type="primary" disabled={resendDisabled} onClick={onResend}>
							Resend {resendDisabled ? `(${countdown})` : null}
						</MyButton>
					</Form.Item>
				</ResendLayout>

				<Form.Item>
					<VerifyButton type="primary" htmlType="submit">
						Verify
					</VerifyButton>
				</Form.Item>
			</MyForm>
		</PageLayout>
	);
}

export default EmailVerifyForm;
