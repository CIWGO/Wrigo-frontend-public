import LoginForm from "./LoginForm";
import { ForgotTag, Logo, WelcomeBack, LoginLayout } from "./style";
import { defaultFrontEndPrefix } from "../../constants/index";

const Login = () => {
	return (
		<LoginLayout>
			<Logo>WRIGO</Logo>
			<WelcomeBack>Welcome back</WelcomeBack>
			<LoginForm />

			<ForgotTag href={`http://${defaultFrontEndPrefix}/resetpassword`}> Forgot password?</ForgotTag>

			{/* </content> */}
		</LoginLayout>

	);
};

export default Login;
