import ResetPasswordEmailVerificationForm from "./ResetPasswordEmailVerificationForm";
import { SignUpLayout, VerifyMessage, Logo, CheckMessage } from "./style";

const ResetPasswordEmailVerificationPage = () => {
	return (
		<SignUpLayout>
			<Logo>WRIGO</Logo>
			<VerifyMessage>Verify your email</VerifyMessage>
			<CheckMessage>Please check your inbox</CheckMessage>
			<ResetPasswordEmailVerificationForm/>
		</SignUpLayout>
	);
};

export default ResetPasswordEmailVerificationPage;
