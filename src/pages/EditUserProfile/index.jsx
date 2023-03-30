import ProfileInfo from "./ProfileInfo";
import { EditProfileLayout } from "./style";
import ProfileHeader from "../EditUserProfile/ProfileHeader";

const EditUserProfile = () => {
	return (
		<div>
			<ProfileHeader />
			<EditProfileLayout>
				<ProfileInfo />
			</EditProfileLayout></div>
	);
};

export default EditUserProfile;
