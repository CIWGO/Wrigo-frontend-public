import SignUpForm from "./SignUpForm";
import { SignUpLayout, LoginTag, CreateAccount, Logo } from "./style";

const SignUpPage = () => {
	return (
		<SignUpLayout>
			<Logo>WRIGO</Logo>
			<CreateAccount>Create account</CreateAccount>
			<SignUpForm />

			<LoginTag to="/login"> Already have account? Log in</LoginTag>

			{/* </content> */}
		</SignUpLayout>
	);
};
export default SignUpPage;
