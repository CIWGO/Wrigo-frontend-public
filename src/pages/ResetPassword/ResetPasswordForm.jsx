import { MyForm } from "./style";
import React, { useState, useEffect } from "react";

function ResetPasswordForm () {
	const [email, setEmail] = useState("");
	const [code, setCode] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [verified, setVerified] = useState(false);
	const [resendDisabled, setResendDisabled] = useState(false);
	const [countdown, setCountdown] = useState(60);

	// Send email to server to receive verification code
	function handleSendEmail (event) {
		event.preventDefault();
		// send email to server
		fetch("http://localhost:3005/users/resetPassword/sendOTPViaEmail", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ uid: "", email: "" })
		})
			.then((response) => response.json())
			.then((data) => setData(data));
		setResendDisabled(true);
		setCountdown(60);
	}

	// Verify code entered by user
	function handleVerifyCode (event) {
		event.preventDefault();
		// verify code with server
		fetch("http://localhost:3005/users/resetPassword/verifyOTP", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ uid: "", userInput: "" })
		})
			.then((response) => response.json())
			.then((data) => setData(data));
		setVerified(true);
	}

	// Resend email after countdown timer expires
	useEffect(() => {
		if (countdown > 0 && resendDisabled) {
			setTimeout(() => setCountdown(countdown - 1), 1000);
		} else {
			setResendDisabled(false);
		}
	}, [countdown, resendDisabled]);

	// Reset password using new password entered by user
	function handleResetPassword (event) {
		event.preventDefault();
		// reset password with server
	}

	return (
		<div>
			<MyForm onSubmit={handleResetPassword}>
				<label htmlFor="newPassword">New Password:</label>
				<input
					type="password"
					id="newPassword"
					value={newPassword}
					onChange={(e) => setNewPassword(e.target.value)}
				/>
				<br />
				<label htmlFor="confirmPassword">Confirm Password:</label>
				<input
					type="password"
					id="confirmPassword"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>
				<br />
				<button type="submit">Reset Password</button>
			</MyForm>
			<MyForm onSubmit={handleSendEmail}>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<br />
				<button type="submit">Send Verification Code</button>
			</MyForm>
			<br />
			<MyForm onSubmit={handleVerifyCode}>
				<label htmlFor="code">Verification Code:</label>
				<input
					type="text"
					id="code"
					value={code}
					onChange={(e) => setCode(e.target.value)}
				/>
				<br />
				<button type="submit">Verify Code</button>
				<br />
				<button
					type="button"
					disabled={resendDisabled}
					onClick={() => {
						handleSendEmail(event);
						setVerified(false);
					}}
				>
          Resend Verification Code {resendDisabled ? `(${countdown})` : null}
				</button>
			</MyForm>
		</div>
	);
}

export default ResetPasswordForm;
