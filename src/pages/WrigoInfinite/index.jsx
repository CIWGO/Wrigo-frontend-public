import React from "react";
import { CardFree, CardPremium, CardsContainer, Container, Description, Header, Section, TextContainer } from "./style";
// import styles from "./styles";

function Infinite () {
	return (
		<Section>
			<Container>
				<TextContainer>

					<Header>WRIGO <span style={{ fontWeight: 400, color: "#5db1ff" }}>Infinite</span></Header>
					<Description><b>Wrigo Infinite</b> provides you unlimited access to our intelligent AI
					writing evaluators with best capabilities on giving you feedbacks for
					improvement and accurate band estimations to help you better
					navigating through the exam preparation.</Description>
				</TextContainer>
				<CardsContainer>
					<CardFree></CardFree>
					<CardPremium></CardPremium>
				</CardsContainer>
			</Container>
		</Section>
	);
}

export default Infinite;
