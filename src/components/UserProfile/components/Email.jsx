import { useState, useEffect } from "react";
import newRequest from "../../../utils/newRequest";
// import { Button } from "antd";
import {
	ButtonDefault,
	ButtonVerify,
	FormDefault,
	InputDefault
} from "./style";
import { notification } from "antd";

const Email = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [newEmail, setNewEmail] = useState("");
	const [disabled, setDisabled] = useState(false);
	const [timeLeft, setTimeLeft] = useState(60);
	const [code, setCode] = useState("");
	const openHandler = (e) => {
		e.preventDefault();
		setIsOpen(true);
	};

	const sendCodeHandler = async (e) => {
		e.preventDefault();
		if (!newEmail) {
			notification.error({ message: "Please enter a valid email address" });
			return;
		}
		try {
			const response = await newRequest.post("/users/sendOTP", {
				uid: props.uid,
				username: props.username,
				newEmail
			});
			if (response.status === 200) {
				notification.success({ message: "Email sent successfully! Check your new mailbox for the code." });
				setDisabled(true);
			} else if (response.status === 500) {
				notification.error({ message: "send fail 500 (Something went wrong)" });
			} else {
				notification.error({ message: "send fail other than 500" });
			}
		} catch (e) {
			console.err(e.message);
		}
	};

	const emailOnChangeHandler = (e) => {
		setNewEmail(e.target.value);
		console.log(newEmail);
	};

	const codeOnChangeHandler = (e) => {
		setCode(e.target.value);
	};

	const changeEmailHandler = async (e) => {
		e.preventDefault();
		if (!code) {
			notification.error({ message: "Please enter a valid code" });
			return;
		}
		try {
			const response = await newRequest.patch("/users/changeEmail", {
				uid: props.uid,
				userInput: code,
				newEmail
			});
			if (response.status === 200) {
				notification.success({ message: "Change email successful!" });
			} else if (response.status === 500) {
				throw new Error("send fail 500 (Something went wrong)");
				// notification.error({ message: "send fail 500 (Something went wrong)" });
			} else {
				throw new Error("send fail other than 500");
				// notification.error({ message: "send fail other than 500" });
			}
			setTimeout(() => {
				window.location.reload(false);
			}, 2000);
		} catch (error) {
			notification.error({ message: error.message });
		}
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

	return (
		<>
			<FormDefault>
				<FormDefault.Item>
					<label style={{ display: "block", textAlign: "start", color: "#2F71DA" }} htmlFor="email">Email</label>
					<InputDefault id="email" placeholder={props.emailValue} autoComplete="off" onChange={emailOnChangeHandler}/>
				</FormDefault.Item>
				<FormDefault.Item>
					<ButtonDefault type="primary" onClick={openHandler}>
          Update
					</ButtonDefault>
				</FormDefault.Item>
			</FormDefault>
			{isOpen && <> <FormDefault>
				<FormDefault.Item>
					<label style={{ display: "block", textAlign: "start", color: "#1890ff" }} htmlFor="code">Send Verification Code</label>
					<InputDefault id="code" placeholder="Verification Code" autoComplete="off" onChange={codeOnChangeHandler} />
				</FormDefault.Item>
				<FormDefault.Item>
					<ButtonDefault type="primary" onClick={sendCodeHandler} disabled={disabled}>
						{disabled ? `Resend (${timeLeft})` : "Send"}
					</ButtonDefault>
				</FormDefault.Item>
			</FormDefault>
			<ButtonVerify type="primary" htmltype="submit" onClick={changeEmailHandler}>
                    Verify and Change
			</ButtonVerify> </>}

		</>
	);
};

export default Email;
