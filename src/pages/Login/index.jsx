import LoginForm from "./LoginForm";
import { ForgotTag, Logo, WelcomeBack, LoginLayout } from "./style";
import logo from "../Landing/assets/logo+name.svg";

const Login = () => {
	return (
		<LoginLayout>
			<Logo src={logo}></Logo>
			<WelcomeBack>Welcome back</WelcomeBack>
			<LoginForm />
			<ForgotTag to="/resetPasswordEmailVerification"> Forgot password?</ForgotTag>
		</LoginLayout>

	);
};

export default Login;
