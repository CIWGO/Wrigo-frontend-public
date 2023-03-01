import SignUpForm from "./SignUpForm";
// import { Layout } from "antd";
import { SignUpLayout, LoginTag, CreateAccount, Logo } from "./style";

const SignUpPage = () => {
	return (
		<SignUpLayout>
			<Logo>WRIGO</Logo>
			<CreateAccount>Create account</CreateAccount>
			<SignUpForm />

			<LoginTag href="http://localhost:3005/users/login"> Already have account? Log in</LoginTag>

			{/* </content> */}
		</SignUpLayout>
	);
};
export default SignUpPage;
