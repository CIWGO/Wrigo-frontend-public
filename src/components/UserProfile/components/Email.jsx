import { useState } from "react";
import newRequest from "../../../utils/newRequest";
// import { Button } from "antd";
import {
	ButtonDefault,
	ButtonVerify,
	FormDefault,
	InputDefault
} from "./style";

const Email = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [newEmail, setNewEmail] = useState("");
	const [code, setCode] = useState("");
	const openHandler = (e) => {
		e.preventDefault();
		setIsOpen(true);
	};

	const sendCodeHandler = async (e) => {
		e.preventDefault();
		if (!newEmail) {
			alert("Please enter a valid email address");
			return;
		}
		try {
			const response = await newRequest.post("/users/sendOTP", {
				uid: props.uid,
				username: props.username,
				newEmail
			});
			if (response.status === 200) {
				alert("send email successful! Check your new mailbox for the code!");
			} else if (response.status === 500) {
				alert("send fail 500 (Something went wrong)");
			} else {
				alert("send fail other than 500");
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
			alert("Please enter a valid code");
			return;
		}
		try {
			const response = await newRequest.patch("/users/changeEmail", {
				uid: props.uid,
				userInput: code,
				newEmail
			});
			if (response.status === 200) {
				alert("Change email successful!");
			} else if (response.status === 500) {
				alert("send fail 500 (Something went wrong)");
			} else {
				alert("send fail other than 500");
			}
			setTimeout(() => {
				window.location.reload(false);
			}, 2000);
		} catch (e) {
			console.err(e.message);
		}
	};
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
					<ButtonDefault type="primary" onClick={sendCodeHandler}>
                    &nbsp;&nbsp;Send&nbsp;&nbsp;
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
