import ResetPasswordForm from "./ResetPasswordForm";
import { Logo, SignUpLayout, Message, CancelTag } from "./style";

const ResetPasswordPage = () => {
	return (
		<SignUpLayout>
			<Logo>WRIGO</Logo>
			<Message>Reset your password</Message>
			<ResetPasswordForm/>
			<CancelTag to="/login"> Cancel</CancelTag>
		</SignUpLayout>
	);
};

export default ResetPasswordPage;
