import PersonalInfo from "./components/PersonalInfo";
import BillingInfo from "./components/BillingInfo";
import { UserProfileLayout } from "./components/style";

const UserProfile = () => {
	return (
		<UserProfileLayout>
			<PersonalInfo />
			<BillingInfo />
		</UserProfileLayout>
	);
};

export default UserProfile;
