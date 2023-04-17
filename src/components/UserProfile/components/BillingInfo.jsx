import { useState, useEffect } from "react";
import { cancelSubscription } from "../../../utils";
import {
	InformationCard,
	ButtonDefault,
	FormDefault,
	InputDisabled
} from "./style";
import { getUserPaymentInfo } from "../../../../src/utils/API";

const BillingInfo = (props) => {
	const [paymentInfo, setPaymentInfo] = useState([]);

	const uid = localStorage.getItem("uid");
	const token = localStorage.getItem("token");
	// const username = localStorage.getItem("username");

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

	// const fetchIsSubscribed = async () => {
	// 	const response = await getUser({ username });
	// 	const isSubscribed = response.data.user.isSubscribed;
	// };

	// useEffect(() => {
	// 	fetchIsSubscribed();
	// }, []);

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

	const showPaymentHandler = () => {
		props.togglePayment();
	};

	return (
		<InformationCard title="Plan & Billing Information" headStyle={{ color: "#2F71DA", fontWeight: 700, fontSize: "1.4rem", textAlign: "start" }}>
			{/* plan */}
			<FormDefault>
				<FormDefault.Item>
					<label style={{ display: "block", textAlign: "start", color: "#2F71DA" }} htmlFor="plan">Plan</label>
					<InputDisabled id="plan"
						defaultValue={isSubscribed ? "Wrigo Infinite" : "free"}
						suffix={isSubscribed ? "$9.99/month" : "$0.00/month"}
						style={{ color: "#2F71DA", fontWeight: 400 }} disabled={true} />
				</FormDefault.Item>
			</FormDefault>
			{/* payment method */}
			<FormDefault>
				<FormDefault.Item>
					<label style={{ display: "block", textAlign: "start", color: "#2F71DA" }} htmlFor="method">Payment Method</label>
					<InputDisabled id="method" value={ paymentMethod} disabled={true} suffix=" "/>
				</FormDefault.Item>
			</FormDefault>
			{/* subscription since */}
			<FormDefault>
				<FormDefault.Item>
					<label style={{ display: "block", textAlign: "start", color: "#2F71DA" }} htmlFor="since">Subscription Since</label>
					<InputDisabled id="since" value={ dateSince} disabled={true} suffix=" " />
					{/* <div>{subscriptionSince }</div> */}
				</FormDefault.Item>
			</FormDefault>
			<ButtonDefault type="primary" onClick={showPaymentHandler} >
				{ !props.showPayment ? "Payment History" : "Hide Payment History"}
			</ButtonDefault>
			{isSubscribed &&
				<ButtonDefault type="default" onClick={cancelSubHandler} >
          Cancel Subscription
				</ButtonDefault>
			}

		</InformationCard>
	);
};

export default BillingInfo;
