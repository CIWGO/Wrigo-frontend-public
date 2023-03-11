import EmailChange from "./EmailChange";
// import { defaultFrontEndPrefix } from "../../constants/index";
import { SignUpLayout, CreateAccount, Logo, Message } from "./style";

const EmailChangePage = () => {
	return (
		<SignUpLayout>
			<Logo>WRIGO</Logo>
			<CreateAccount>Verify your email</CreateAccount>
			<Message>Please input new email address</Message>

			<EmailChange />

			{/* <EmailChangeTag href={`http://${defaultFrontEndPrefix}/emailVerification`}>Wrong email? </EmailChangeTag> */}

			{/* </content> */}
		</SignUpLayout>
	);
};
export default EmailChangePage;
