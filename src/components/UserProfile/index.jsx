import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import BillingInfo from "./components/BillingInfo";
import PaymentHistory from "./components/PaymentHistory";
import { UserProfileLayout } from "./components/style";

const UserProfile = () => {
	const [showPayment, setShowPayment] = useState(false);
	const togglePayment = () => {
		setShowPayment(!showPayment);
	};
	return (
		<UserProfileLayout>
			<PersonalInfo />
			<BillingInfo togglePayment={togglePayment} showPayment={showPayment} />
			{ showPayment && <PaymentHistory /> }

		</UserProfileLayout>
	);
};

export default UserProfile;
