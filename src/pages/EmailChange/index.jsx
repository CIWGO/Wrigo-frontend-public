import EmailChange from "./EmailChange";

import { SignUpLayout, CreateAccount, Logo, Message } from "./style";

const EmailChangePage = () => {
	return (
		<SignUpLayout>
			<Logo>WRIGO</Logo>
			<CreateAccount>Verify your email</CreateAccount>
			<Message>Please input new email address</Message>

			<EmailChange />

		</SignUpLayout>
	);
};
export default EmailChangePage;
