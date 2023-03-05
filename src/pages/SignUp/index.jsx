import SignUpForm from "./SignUpForm";
import { defaultFrontEndPrefix } from "../../constants/index";
import { SignUpLayout, LoginTag, CreateAccount, Logo } from "./style";

const SignUpPage = () => {
	return (
		<SignUpLayout>
			<Logo>WRIGO</Logo>
			<CreateAccount>Create account</CreateAccount>
			<SignUpForm />

			<LoginTag href={`http://${defaultFrontEndPrefix}/users/login`}> Already have account? Log in</LoginTag>

			{/* </content> */}
		</SignUpLayout>
	);
};
export default SignUpPage;
