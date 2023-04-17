import ResetPasswordForm from "./ResetPasswordForm";
import { Logo, SignUpLayout, Message, CancelTag } from "./style";
import logo from "../../Landing/assets/logoName.svg";

const ResetPasswordPage = () => {
	return (
		<SignUpLayout>
			<Logo src={logo}></Logo>
			<Message>Reset your password</Message>
			<ResetPasswordForm/>
			<CancelTag to="/login"> Cancel</CancelTag>
		</SignUpLayout>
	);
};

export default ResetPasswordPage;
