import EmailVerification from "./EmailVerification";
import { SignUpLayout, EmailChangeTag, CreateAccount, Logo, Message } from "./style";
import {
	updateEmailVerification,
	requestEmail
} from "../../slice/emailVerificationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EmailVerificationPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { userName } = useSelector((state) => state.user);

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
			<Logo>WRIGO</Logo>
			<CreateAccount>Verify your email</CreateAccount>
			<Message>Please check your inbox</Message>

			<EmailVerification />

			<EmailChangeTag onClick={ onFinish}>Wrong email? </EmailChangeTag>
		</SignUpLayout>
	);
};
export default EmailVerificationPage;
