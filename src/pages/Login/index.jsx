import LoginForm from "./LoginForm";
import { ForgotTag, Logo, WelcomeBack, LoginLayout } from "./style";

const Login = () => {
	return (
		<LoginLayout>
			<Logo>WRIGO</Logo>
			<WelcomeBack>Welcome back</WelcomeBack>
			<LoginForm />

			<ForgotTag to="/resetpassword"> Forgot password?</ForgotTag>

			{/* </content> */}
		</LoginLayout>

	);
};

export default Login;
