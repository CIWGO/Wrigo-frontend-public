import EmailChangeForm from "./EmailChangeForm";
import logo from "../Landing/assets/logoName.svg";

import { SignUpLayout, Logo, VerifyMessage, CheckMessage, CancelTag } from "./style";

const EmailChangePage = () => {
	return (
		<SignUpLayout>
			<Logo src={logo}></Logo>
			<VerifyMessage>Verify your email</VerifyMessage>
			<CheckMessage>Please input new email address</CheckMessage>
			<EmailChangeForm />
			<CancelTag to="/login"> Cancel</CancelTag>
		</SignUpLayout>
	);
};
export default EmailChangePage;
