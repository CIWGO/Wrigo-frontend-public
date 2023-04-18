import { useEffect, useState } from "react";
import { paymentRedirection, getUser } from "../../utils/API";
import { ButtonContainer, CardBodyHeader, CardBodyPrice, CardDescriptionHeader, CardDescriptionText, CardFree, CardFreeBody, CardPremium, CardsContainer, Container, DefaultButton, Description, Header, Section, TextContainer, CardPreBody, PreCardBodyHeader, PreCardBodyPrice, PreCardDescriptionHeader, PreCardDescriptionText } from "./styles";
// import styles from "./styles";
import { ReactComponent as Tick } from "./Checkbox.svg";

function Infinite () {
	const token = localStorage.getItem("token");
	const uid = localStorage.getItem("uid");
	const username = localStorage.getItem("username");
	const [isSubscribed, setIsSubscribed] = useState(null);

	const fetchIsSubscribed = async () => {
		try {
			const response = await getUser({ username });
			const isSubscribed = response.data.user.isSubscribed;
			setIsSubscribed(isSubscribed);
		} catch (error) {
			console.log("wrong");
			console.error(error);
		}
	};

	useEffect(() => {
		fetchIsSubscribed();
	}, [uid, token]);

	const handleClick = async () => {
		try {
			const response = await paymentRedirection({
				uid,
				username,
				token,
				// testing plan id that charges daily
				// planId: "price_1MqA0CJm2vMPXBBfE8jqo1ZX"
				// actual plan id that charges monthly
				planId: "price_1Ml4JRJm2vMPXBBf8YgX4Aqa"
			},
			{
				headers: {
					"Content-Type": "application/json"
				}
			});
			if (response.status === 200) {
				const { url } = response.data;
				window.location.href = url;
			}
		} catch (error) {
			console.log("wrong");
			console.error(error);
		}
	};
	return (
		<Section>
			<Container>
				<TextContainer>

					<Header>Wrigo <span style={{ fontWeight: 400, color: "#5db1ff" }}>Infinite</span></Header>
					<Description><b>Wrigo Infinite</b> provides you unlimited access to our intelligent AI
					writing evaluators with best capabilities on giving you feedbacks for
					improvement and accurate band estimations to help you better
					navigating through the exam preparation.</Description>
				</TextContainer>
				<CardsContainer>
					<CardFree>
						<CardFreeBody>
							<CardBodyHeader>Free</CardBodyHeader>
							<CardBodyPrice><span style={{ fontSize: "3.6rem", color: "#5db1ff" }}>$</span><span style={{ fontSize: "3.6rem", color: "#5db1ff" }}>0</span>/ Month</CardBodyPrice>

							<CardDescriptionHeader>Features:</CardDescriptionHeader>
							<CardDescriptionText><Tick />AI-Powered Grading</CardDescriptionText>
							<CardDescriptionText><Tick /> Evaluation & Feedback</CardDescriptionText>
							<CardDescriptionText><Tick /> Topic Library</CardDescriptionText>
							<CardDescriptionText><Tick /> Writing Analytics</CardDescriptionText>
						</CardFreeBody>

					</CardFree>
					<CardPremium>
						<CardPreBody>
							<PreCardBodyHeader>Infinite</PreCardBodyHeader>
							<PreCardBodyPrice><span style={{ fontSize: "3.6rem", color: "#d7ecff" }}>$9.99</span>/ Month</PreCardBodyPrice>

							<PreCardDescriptionHeader>In addition to free tier:</PreCardDescriptionHeader>
							<PreCardDescriptionText><Tick /> Precise AI-Powered Grading</PreCardDescriptionText>
							<PreCardDescriptionText><Tick /> Extensive Evaluation & Feedback</PreCardDescriptionText>
							<PreCardDescriptionText><Tick /> Intelligent Grammar Fix</PreCardDescriptionText>
							<PreCardDescriptionText><Tick /> Writing Sample Generation</PreCardDescriptionText>

						</CardPreBody>
						<ButtonContainer>
							{ !isSubscribed ? <DefaultButton onClick={handleClick}>Subscribe Now</DefaultButton> : <DefaultButton disabled style={{ color: "#fff" }} >Already subscribed</DefaultButton>}
						</ButtonContainer>
					</CardPremium>
				</CardsContainer>
			</Container>
		</Section>
	);
}

export default Infinite;
