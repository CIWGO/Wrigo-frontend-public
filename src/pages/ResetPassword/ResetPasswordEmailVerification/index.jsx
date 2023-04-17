import ResetPasswordEmailVerificationForm from "./ResetPasswordEmailVerificationForm";
import { SignUpLayout, VerifyMessage, Logo, CheckMessage, CancelTag } from "./style";
import logo from "../../Landing/assets/logo+name.svg";

const ResetPasswordEmailVerificationPage = () => {
	return (
		<SignUpLayout>
			<Logo src={logo}></Logo>
			<VerifyMessage>Verify your email</VerifyMessage>
			<CheckMessage>Please check your inbox</CheckMessage>
			<ResetPasswordEmailVerificationForm/>
			<CancelTag to="/login"> Cancel</CancelTag>
		</SignUpLayout>
	);
};

export default ResetPasswordEmailVerificationPage;
