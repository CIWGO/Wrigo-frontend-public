import axios from "axios";
import React from "react";
import { defaultBackEndPrefix } from "../../constants/index";

const STRIPE_PAYMENT_URL = `http://${defaultBackEndPrefix}/api/checkout`;
const Payment = () => {
	const token = localStorage.getItem("token");
	const id = localStorage.getItem("uid");
	const handleClick = async () => {
		try {
			const response = await axios.post(
				STRIPE_PAYMENT_URL,
				{
					id,
					token,
					// testing plan id that charges daily
					planId: "price_1MqA0CJm2vMPXBBfE8jqo1ZX"
					// actual plan id that charges monthly
					// planId: "price_1Ml4JRJm2vMPXBBf8YgX4Aqa"
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
			console.log("wrong");
			console.error(error);
		}
	};

	return (<button onClick={handleClick}> checkout
	</button>);
};

export default Payment;
