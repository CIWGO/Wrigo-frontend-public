import ResetPasswordEmailVerificationForm from "./ResetPasswordEmailVerificationForm";
import { SignUpLayout, VerifyMessage, Logo, CheckMessage, CancelTag } from "./style";

const ResetPasswordEmailVerificationPage = () => {
	return (
		<SignUpLayout>
			<Logo>WRIGO</Logo>
			<VerifyMessage>Verify your email</VerifyMessage>
			<CheckMessage>Please check your inbox</CheckMessage>
			<ResetPasswordEmailVerificationForm/>
			<CancelTag to="/login"> Cancel</CancelTag>
		</SignUpLayout>
	);
};

export default ResetPasswordEmailVerificationPage;
