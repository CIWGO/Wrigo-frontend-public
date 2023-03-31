import ResetPasswordForm from "./ResetPasswordForm";
import { defaultFrontEndPrefix } from "../../constants/index";
import { ResetLayout, CancelTag, Notification, ResetPassword, Logo } from "./style";

const ResetPasswordPage = () => {
	return (
		<ResetLayout>
			<Logo>WRIGO</Logo>
			<ResetPassword>Reset Password</ResetPassword>
			<Notification>Please check your email box</Notification>
			<ResetPasswordForm />

			<CancelTag href={`http://${defaultFrontEndPrefix}/login`}> Cancel</CancelTag>

			{/* </content> */}
		</ResetLayout>
	);
};
export default ResetPasswordPage;
