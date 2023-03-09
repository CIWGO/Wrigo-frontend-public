import React, { useState } from "react";
import { Form, Input } from "antd";
// import { useNavigate } from "react-router-dom";
import { ERROR_MESSAGES } from "../../constants/errorMessages";
// import { defaultFrontEndPrefix } from "../../constants";
import { VerifyButton, MyForm, PageLayout, ResendLayout, MyButton } from "./style";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import emailVerificationSlice from "../../features/emailVerificationSlice";
function EmailVerification () {
	const [OTPcode, setOTPCode] = useState();
	const { uid, username } = useSelector(state => state.loginData);
	const dispatch = useDispatch();
	const onFinish = (values) => {
		setOTPCode(values);
		dispatch(emailVerificationSlice(OTPcode, uid));
		console.log("Success:", values);
	};
	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};
	const onResend = () => {
		axios.post("http://localhost:3005/users/resetPassword/sendOTPViaEmail",
			{ uid, username }
		)
			.then(response => {
				if (response.ok) {
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
						name="Verification Code"
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
