import { useState, useEffect } from "react";
import { getUser } from "../../../utils";
import {
	InformationCard,
	ButtonDefault,
	FormDefault,
	InputDisabled
} from "./style";

const BillingInfo = () => {
	const [isSubscribed, setIsSubscribed] = useState(null);

	const fetchIsSubscribed = async () => {
		const username = localStorage.getItem("username");
		const response = await getUser({ username });
		const isSubscribed = response.data.user.isSubscribed;
		setIsSubscribed(isSubscribed);
	};

	useEffect(() => {
		fetchIsSubscribed();
	}, []);
	return (
		<InformationCard title="Plan & Billing Information" headStyle={{ color: "#1890ff", fontWeight: 700, fontSize: "1.4rem", textAlign: "start" }}>
			{/* plan */}
			<FormDefault>
				<FormDefault.Item>
					<label style={{ display: "block", textAlign: "start", color: "#1890ff" }} htmlFor="plan">Plan</label>
					<InputDisabled id="plan" defaultValue="WRIGO Infinite" suffix="$9.99/month" style={{ color: "#1890ff", fontWeight: 400 }} disabled={true} />
				</FormDefault.Item>
			</FormDefault>
			{/* payment method */}
			<FormDefault>
				<FormDefault.Item>
					<label style={{ display: "block", textAlign: "start", color: "#1890ff" }} htmlFor="method">Payment Method</label>
					<InputDisabled id="method" defaultValue="Visa - 4242" disabled={true} suffix=" "/>
				</FormDefault.Item>
			</FormDefault>
			{/* subscription since */}
			<FormDefault>
				<FormDefault.Item>
					<label style={{ display: "block", textAlign: "start", color: "#1890ff" }} htmlFor="since">Subscription Since</label>
					<InputDisabled id="since" defaultValue="21 Mar, 2023" disabled={true} suffix=" "/>
				</FormDefault.Item>
			</FormDefault>
			{isSubscribed && <ButtonDefault type="default" htmlType="submit">
          Cancel Subscription
			</ButtonDefault>}

		</InformationCard>
	);
};

export default BillingInfo;
