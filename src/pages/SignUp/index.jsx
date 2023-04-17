import SignUpForm from "./SignUpForm";
import { SignUpLayout, LoginTag, CreateAccount, Logo } from "./style";
import logo from "../Landing/assets/logo+name.svg";

const SignUpPage = () => {
	return (
		<SignUpLayout>
			<Logo src={logo}></Logo>
			<CreateAccount>Create account</CreateAccount>
			<SignUpForm />

			<LoginTag to="/login"> Already have account? Log in</LoginTag>

			{/* </content> */}
		</SignUpLayout>
	);
};
export default SignUpPage;
