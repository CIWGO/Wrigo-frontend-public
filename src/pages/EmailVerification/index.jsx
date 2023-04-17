import EmailVerifyForm from "./EmailVerifyForm";
import { SignUpLayout, EmailChangeTag, CreateAccount, Logo, Message } from "./style";
import {
	updateEmailVerification,
	requestEmail
} from "../../slice/emailVerificationSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../Landing/assets/logoName.svg";

const EmailVerificationPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	// const { userId, userName } = useSelector((state) => state.user);
	const userId = localStorage.getItem("uid");
	const userName = localStorage.getItem("username");
	console.log(userId, userName);
	const onFinish = async (values) => {
		await dispatch(
			requestEmail({
				username: userName
			})
		);

		await dispatch(
			updateEmailVerification()
		);
		navigate("/emailChange");
	};
	return (
		<SignUpLayout>
			<Logo src={logo}></Logo>
			<CreateAccount>Verify your email</CreateAccount>
			<Message>Please check your inbox</Message>

			<EmailVerifyForm username={userName} uid={userId} />

			<EmailChangeTag onClick={onFinish}>Wrong email? </EmailChangeTag>
		</SignUpLayout>
	);
};
export default EmailVerificationPage;
