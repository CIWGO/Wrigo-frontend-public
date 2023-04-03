import {
	InformationCard,
	// ButtonDefault,
	FormDefault,
	InputDisabled
} from "./style";
import { getUserPaymentInfo } from "../../../../src/utils/API";
import { useState, useEffect } from "react";

const BillingInfo = () => {
	const [paymentInfo, setPaymentInfo] = useState([]);

	const uid = localStorage.getItem("uid");
	const token = localStorage.getItem("token");

	useEffect(() => {
		getUserPaymentInfo({ uid, token })
			.then(function (response) {
				const data = response.data;
				setPaymentInfo(data);
			})
			.catch(function (error) {
				console.error("Error:", error);
			});
	}, [uid, token]);
	const { subscriptionSince, paymentMethod, isSubscribed } = paymentInfo;
	const dateSince = subscriptionSince ? subscriptionSince.substring(0, 10) : "";

	return (
		<InformationCard title="Plan & Billing Information" headStyle={{ color: "#1890ff", fontWeight: 700, fontSize: "1.4rem", textAlign: "start" }}>
			{/* plan */}
			<FormDefault>
				<FormDefault.Item>
					<label style={{ display: "block", textAlign: "start", color: "#1890ff" }} htmlFor="plan">Plan</label>
					<InputDisabled id="plan"
						defaultValue={isSubscribed ? "WRIGO Infinite" : "free"}
						suffix={isSubscribed ? "$9.99/month" : "$0.00/month"}
						style={{ color: "#1890ff", fontWeight: 400 }} disabled={true} />
				</FormDefault.Item>
			</FormDefault>
			{/* payment method */}
			<FormDefault>
				<FormDefault.Item>
					<label style={{ display: "block", textAlign: "start", color: "#1890ff" }} htmlFor="method">Payment Method</label>
					<InputDisabled id="method" value={ paymentMethod} disabled={true} suffix=" "/>
				</FormDefault.Item>
			</FormDefault>
			{/* subscription since */}
			<FormDefault>
				<FormDefault.Item>
					<label style={{ display: "block", textAlign: "start", color: "#1890ff" }} htmlFor="since">Subscription Since</label>
					<InputDisabled id="since" value={ dateSince} disabled={true} suffix=" " />
					{/* <div>{subscriptionSince }</div> */}
				</FormDefault.Item>
			</FormDefault>
			{/* <ButtonDefault type="default" htmlType="submit">
          Cancel
			</ButtonDefault> */}
		</InformationCard>
	);
};

export default BillingInfo;
