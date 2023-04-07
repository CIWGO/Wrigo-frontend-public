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
					console.log(response);
					navigate("/login");
				}
				console.log(response);
			})
			.catch((error) => {
				if (error.response && error.response.status === 401) {
					console.log(error.response);
					notification.error({ message: ERROR_MESSAGES.verificationCodeError });
				} else {
					notification.error({
						message: "Unknown error when verifying OTP"
					});
				}
			});
	};
	const onFinishFailed = (errorInfo) => {
		notification.error({ message: ERROR_MESSAGES.noVerificationCode });
		console.log("Failed123:", errorInfo);
	};

	const onResend = () => {
		sendOTPViaEmail({ uid, username })
			.then((response) => {
				if (response.status === 200) {
					console.log("Success:", response.status);
					alert("send email successful! Check your mailbox for the code!");
				} else if (response.status === 500) {
					alert("send fail 500 (Something went wrong)");
				} else {
					alert("send fail other than 500");
				}
			})
			.catch((error) => {
				console.log(error);
			});
		setResendDisabled(true);
		setCountdown(60);
		console.log(countdown, resendDisabled);
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
