import PersonalInfo from "./components/PersonalInfo";
import BillingInfo from "./components/BillingInfo";
import PaymentHistory from "./components/PaymentHistory";
import { UserProfileLayout } from "./components/style";

const UserProfile = () => {
	return (
		<UserProfileLayout>
			<PersonalInfo />
			<BillingInfo />
			<PaymentHistory />
		</UserProfileLayout>
	);
};

export default UserProfile;
