import PersonalInfo from "./components/PersonalInfo";
import BillingInfo from "./components/BillingInfo";
import ProfileHeader from "./components/ProfileHeader";
import { UserProfileLayout } from "./components/style";

const UserProfile = () => {
	return (
		<>
			<ProfileHeader />
			<UserProfileLayout>
				<PersonalInfo />
				<BillingInfo />
			</UserProfileLayout>
		</>
	);
};

export default UserProfile;
