import EmailChangeForm from "./EmailChangeForm";
// import { useSelector } from "react-redux";

import { SignUpLayout, Logo, VerifyMessage, CheckMessage, CancelTag } from "./style";

const EmailChangePage = () => {
	// const { uid, username, email } = useSelector((state) => state.emailVerificationStore);
	return (
		<SignUpLayout>
			<Logo>WRIGO</Logo>
			<VerifyMessage>Verify your email</VerifyMessage>
			<CheckMessage>Please input new email address</CheckMessage>
			<EmailChangeForm />
			<CancelTag to="/login"> Cancel</CancelTag>
		</SignUpLayout>
	);
};
export default EmailChangePage;
