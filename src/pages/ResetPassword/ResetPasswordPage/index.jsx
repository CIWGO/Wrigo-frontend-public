import ResetPasswordForm from "./ResetPasswordForm";
import { Logo, SignUpLayout, Message } from "./style";

const ResetPasswordPage = () => {
	return (
		<SignUpLayout>
			<Logo>WRIGO</Logo>
			<Message>Reset your password</Message>
			<ResetPasswordForm/>
		</SignUpLayout>
	);
};

export default ResetPasswordPage;
