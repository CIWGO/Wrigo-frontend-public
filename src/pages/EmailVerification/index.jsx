import EmailVerification from "./EmailVerification";
import { defaultFrontEndPrefix } from "../../constants/index";
import { SignUpLayout, EmailChangeTag, CreateAccount, Logo, Message } from "./style";

const EmailVerificationPage = () => {
	return (
		<SignUpLayout>
			<Logo>WRIGO</Logo>
			<CreateAccount>Verify your email</CreateAccount>
			<Message>Please check your inbox</Message>

			<EmailVerification />

			<EmailChangeTag href={`http://${defaultFrontEndPrefix}/emailChange`}>Wrong email? </EmailChangeTag>

			{/* </content> */}
		</SignUpLayout>
	);
};
export default EmailVerificationPage;
