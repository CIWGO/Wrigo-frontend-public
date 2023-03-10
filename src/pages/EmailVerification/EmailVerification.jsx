import React from "react";
import { Form, Input } from "antd";
// import { useNavigate } from "react-router-dom";
import { ERROR_MESSAGES } from "../../constants/errorMessages";
// import { defaultFrontEndPrefix } from "../../constants";
import { VerifyButton, MyForm, PageLayout, ResendLayout, MyButton } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { requestVerifyOTPAsync, updateEmailVerification } from "../../slice/emailVerificationSlice";
import { sendOTPViaEmail } from "../../utils/index";
import { useNavigate } from "react-router-dom";

function EmailVerification () {
	const navigate = useNavigate();

	const { userId, userName } = useSelector(state => state.user);

	const dispatch = useDispatch();

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	const onFinish = async (values) => {
		try {
			const response = await dispatch(requestVerifyOTPAsync({ uid: userId, userInput: values.VerificationCode }));
			if (response.payload === true) {
				console.log("success:", response);
				await dispatch(updateEmailVerification({ uid: userId, OTPcode: values.VerificationCode }));
				navigate("/login");
			} else {
				console.log("Failed:", response);
			}
		} catch (error) {
			console.log("Failed:", error);
		}
	};

	const onResend = () => {
		sendOTPViaEmail({ uid: userId, username: userName })
			.then(response => {
				if (response.status === 200) {
					alert("send email successful! Check your mailbox for the code!");
				} else if (response.status === 500) {
					alert("send fail 500 (Something went wrong)");
				} else {
					alert("send fail other than 500");
				}
			})
			.catch(error => {
				console.log(error);
			});
	};

	return (
		<PageLayout>
			<MyForm name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off"
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
						<Input placeholder="Verification Code"/>
					</Form.Item>

					<Form.Item
					>
						<MyButton type="primary" onClick={onResend}>
        					Resend
						</MyButton>
					</Form.Item>

				</ResendLayout>

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

export default EmailVerification;
