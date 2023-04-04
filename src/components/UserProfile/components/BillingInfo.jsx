import { useState, useEffect } from "react";
import { getUser, cancelSubscription } from "../../../utils";
import {
	InformationCard,
	ButtonDefault,
	FormDefault,
	InputDisabled
} from "./style";

const BillingInfo = () => {
	const [isSubscribed, setIsSubscribed] = useState(null);
	const username = localStorage.getItem("username");
	const uid = localStorage.getItem("uid");

	const fetchIsSubscribed = async () => {
		const response = await getUser({ username });
		const isSubscribed = response.data.user.isSubscribed;
		setIsSubscribed(isSubscribed);
	};

	useEffect(() => {
		fetchIsSubscribed();
	}, []);

	const cancelSubHandler = async () => {
		const response = await cancelSubscription({ uid });
		if (response.status === 200) {
			alert("Cancel successful!");
		} else if (response.status === 500) {
			alert("(Something went wrong)");
		} else {
			alert("send fail other than 500");
		}
		setTimeout(() => {
			window.location.reload(false);
		}, 2000);
	};
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
			{isSubscribed && <ButtonDefault type="default" onClick={cancelSubHandler} >
          Cancel Subscription
			</ButtonDefault>}

		</InformationCard>
	);
};

export default BillingInfo;
