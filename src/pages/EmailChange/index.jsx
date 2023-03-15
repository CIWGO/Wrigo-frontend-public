import EmailChangeForm from "./EmailChangeForm";
import { useSelector } from "react-redux";

import { SignUpLayout, CreateAccount, Logo, Message } from "./style";

const EmailChangePage = () => {
	const { uid, username, email } = useSelector((state) => state.emailVerificationStore);
	return (
		<SignUpLayout>
			<Logo>WRIGO</Logo>
			<CreateAccount>Verify your email</CreateAccount>
			<Message>Please input new email address</Message>

			<EmailChangeForm uid={uid}username={username}email={email} />

		</SignUpLayout>
	);
};
export default EmailChangePage;
