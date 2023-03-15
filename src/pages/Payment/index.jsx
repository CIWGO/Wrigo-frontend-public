import axios from "axios";
import React from "react";

const STRIPE_PAYMENT_URL = "http://localhost:3005/api/checkout";
const Payment = () => {
	const token = localStorage.getItem("token");
	const handleClick = async () => {
		try {
			const response = await axios.post(
				STRIPE_PAYMENT_URL,
				{
					token,
					items: [
						{ id: "pro", quantity: 1 }
					]

				},
				{
					headers: {
						"Content-Type": "application/json"
					}
				}
			);
			if (response.status === 200) {
				const { url } = response.data;
				window.location.href = url;
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (<button onClick={handleClick}> checkout
	</button>);
};

export default Payment;
