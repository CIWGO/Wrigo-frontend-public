import React, { useState, useEffect } from "react";
import { Form, Input } from "antd";
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
	requestVerifyOTPAsync,
	updateEmailVerification
} from "../../slice/emailVerificationSlice";
import { sendOTPViaEmail } from "../../utils/index";
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
		try {
			const response = await dispatch(
				requestVerifyOTPAsync({
					uid,
					userInput: values.VerificationCode
				})
			);
			if (response.payload.data.message === "OTP verified successfully") {
				await dispatch(
					updateEmailVerification({
						username,
						uid,
						OTPcode: values.VerificationCode,
						email_verified: "true"
					})
				);
				navigate("/login");
			} else {
				console.log("failed", response);
			}
		} catch (error) {
			console.log("Failed:", error);
		}
	};

	const onFinishFailed = (errorInfo) => {
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
								message: ERROR_MESSAGES.verificationCode
							}
						]}
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
